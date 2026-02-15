---
title: "GraphRAG: Why Your 'Second Brain' Needs More Than Just Vectors"
description: "Vector search is great for similarity, but terrible for reasoning. Learn how to build a personal Knowledge Graph (GraphRAG) with Neo4j and LangChain to connect the dots in your notes."
date: 2026-02-15
tags: ["ai", "rag", "graphrag", "neo4j", "langchain", "pkm", "obsidian"]
cover: "./cover.png"
---

You have 5,000 markdown notes in Obsidian. You've indexed them all into a vector database (Chroma/Pinecone). You ask your AI: _"How does my research on 'Attention Mechanisms' relate to the 'Productivity Paradox' I wrote about last year?"_

The AI replies: _"I found some notes on attention mechanisms and productivity, but I'm not sure how they relate."_

**This is the failure of standard RAG (Retrieval-Augmented Generation).** It finds _similar words_, not _connected concepts_.

To build a true "Second Brain" that can reason like you do, you need **GraphRAG**.

## 🧠 Vectors vs. Graphs: The Missing Link

- **Vector Search (Semantic):** "Find chunks that look like this query." Great for factual retrieval.
- **Graph Search (Relational):** "Find nodes connected to this concept." Great for multi-hop reasoning and connecting disparate ideas.

If Vector Search is your brain's _hippocampus_ (memory retrieval), Graph Search is the _neocortex_ (pattern recognition and logic). You need both.

## 🛠️ The 2026 Stack for Personal GraphRAG

You don't need enterprise tools. You can run this locally or on free tiers.

1.  **Source:** Your Markdown notes (Obsidian/Notion).
2.  **Orchestrator:** LangChain 0.4 (Python/JS).
3.  **Graph Database:** Neo4j Aura (Free Tier) or Kùzu (Local embedded).
4.  **LLM:** Llama 4 (Local via Ollama) or GPT-5/Gemini 3 (API).

## 🚀 Step 1: The Extraction Prompt (The Secret Sauce)

The hardest part of GraphRAG is converting unstructured text into structured **Nodes** and **Edges**. We need an LLM to do this.

Here is a prompt I've refined over months of trial and error. It forces the LLM to extract specific entities and relationship types.

> **# Role**
> You are a Knowledge Graph Architect. Your task is to extract meaningful entities and relationships from the provided text to build a personal knowledge graph.
>
> **# Task**
> Analyze the input text and output a JSON object containing `nodes` and `relationships`.
>
> **# Format**
>
> ```json
> {
>   "nodes": [{ "id": "Entity Name", "type": "Concept|Person|Tool|Event" }],
>   "relationships": [
>     {
>       "source": "Entity Name",
>       "target": "Entity Name",
>       "type": "RELATES_TO|CAUSES|PART_OF|AUTHORED_BY"
>     }
>   ]
> }
> ```
>
> **# Constraints**
>
> 1. **Atomic Entities:** Don't create nodes like "The productivity paradox of 2025". Break it down: "Productivity Paradox" (Concept) -> "2025" (Time).
> 2. **Consistent ID:** "LLM", "Large Language Model", and "LLMs" should all map to the single ID "Large Language Model".
> 3. **Meaningful Relationships:** Avoid generic types like "HAS". Use specific verbs.

## 💻 Step 2: The Ingestion Script (Python)

Using `langchain-community` and `neo4j-driver`, we can automate this.

```python
from langchain_community.graphs import Neo4jGraph
from langchain_experimental.graph_transformers import LLMGraphTransformer
from langchain_openai import ChatOpenAI

# 1. Connect to Neo4j
graph = Neo4jGraph(
    url="bolt://localhost:7687",
    username="neo4j",
    password="password"
)

# 2. Initialize LLM (Llama 4 local or OpenAI)
llm = ChatOpenAI(temperature=0, model="gpt-4-turbo")

# 3. Define the Transformer
llm_transformer = LLMGraphTransformer(llm=llm)

# 4. Process a Document
from langchain_core.documents import Document

text = """
GraphRAG improves upon standard RAG by injecting relationship data.
It was popularized by Microsoft Research in 2024.
"""
docs = [Document(page_content=text)]

# 5. Convert to Graph Documents
graph_documents = llm_transformer.convert_to_graph_documents(docs)

# 6. Save to Neo4j
graph.add_graph_documents(graph_documents)
print(f"Nodes created: {len(graph_documents[0].nodes)}")
print(f"Relationships created: {len(graph_documents[0].relationships)}")
```

## 🔍 Step 3: Querying Your Second Brain

Now, instead of just searching for "GraphRAG", you can ask: _"What concepts influenced the development of GraphRAG?"_

The LLM generates a Cypher query (SQL for graphs):

```cypher
MATCH (t:Tool {id: "GraphRAG"})<-[:INFLUENCED]-(c:Concept)
RETURN c.id
```

This retrieves strictly connected concepts, providing a factual basis for the answer, rather than a hallucinated guess.

## 💡 Writer's Insight: Is It Worth The Effort?

I've been running this setup for 3 months on my Obsidian vault (12k notes).

**The Good:**

- **Serendipity:** It finds connections I forgot I made 3 years ago.
- **Complex Q&A:** It answers "How has my thinking on X changed?" much better than vector search.

**The Bad:**

- **Cost/Latency:** Extracting graphs with GPT-4 is expensive ($0.05/note). Using a local Llama 4 (8B) quant is free but slower (approx 10s/note on M3 Max).
- **Messy Graphs:** You _will_ get duplicate nodes ("AI" vs "Artificial Intelligence"). You need a periodic "Entity Resolution" cleanup script.

**Verdict:**
For a true "Second Brain" that aids creativity, **GraphRAG is essential**. For a simple document search, stick to vectors.

---

### Ready to build?

Start by exporting your top 10 most insightful notes and running them through the extraction prompt above. The results will surprise you.
