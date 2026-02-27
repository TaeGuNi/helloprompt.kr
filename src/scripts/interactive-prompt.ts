// src/scripts/interactive-prompt.ts

document.addEventListener("DOMContentLoaded", () => {
    // --- 0. Shared GA Helper ---
    const trackEvent = (action: string, params: Record<string, any>) => {
      // @ts-expect-error - gtag is defined globally by a script snippet
      if (typeof gtag === "function") {
        // @ts-expect-error - gtag is defined globally by a script snippet
        gtag("event", action, params);
      }
    };

    // --- 1. Link Copy & Share Logic ---
    const copyLinkBtn = document.getElementById("copy-link-btn");
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
          trackEvent("share", {
            method: "link_copy",
            content_type: "article",
            item_id: document.title,
          });
        } catch (err) {
          console.error("Failed to copy link:", err);
        }
      });
    }

    const twitterBtn = document.querySelector(".share-btn.twitter");
    if (twitterBtn) {
      twitterBtn.addEventListener("click", () => {
        trackEvent("share", {
          method: "twitter",
          content_type: "article",
          item_id: document.title,
        });
      });
    }

    // --- 2. TOC Tracking ---
    const tocLinks = document.querySelectorAll(".toc-link");
    tocLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const sectionName = target.innerText || target.textContent;
        trackEvent("click_toc", {
          section_heading: sectionName,
          page_title: document.title,
        });
      });
    });

    // --- 3. Tag Tracking (Article) ---
    const tagBadges = document.querySelectorAll(".tag-badge");
    tagBadges.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const tagName = target.innerText || target.textContent;
        trackEvent("click_tag", {
          tag_name: tagName,
          location: "article_header",
        });
      });
    });

    // --- 4. Bookmark Logic ---
    const bookmarkBtn = document.getElementById("bookmark-btn");
    if (bookmarkBtn) {
      const currentPath = window.location.pathname;
      const pageTitle = document.title.replace(" | Hello Prompt", "");
      const bookmarks = JSON.parse(
        localStorage.getItem("bookmarks") || "[]",
      );

      const isBookmarked = bookmarks.some((b: any) => b.path === currentPath);
      if (isBookmarked) {
        bookmarkBtn.classList.add("active");
        const iconNode = bookmarkBtn.querySelector(".icon");
        if(iconNode) iconNode.textContent = "★";
      }

      bookmarkBtn.addEventListener("click", () => {
        const currentBookmarks = JSON.parse(
          localStorage.getItem("bookmarks") || "[]",
        );
        const existingIndex = currentBookmarks.findIndex(
          (b: any) => b.path === currentPath,
        );

        if (existingIndex > -1) {
          currentBookmarks.splice(existingIndex, 1);
          bookmarkBtn.classList.remove("active");
          const iconNode = bookmarkBtn.querySelector(".icon");
          if(iconNode) iconNode.textContent = "☆";
          alert("Bookmark removed.");
          trackEvent("bookmark", {
            action: "remove",
            page_title: pageTitle,
          });
        } else {
          currentBookmarks.push({
            path: currentPath,
            title: pageTitle,
            date: new Date().toISOString(),
          });
          bookmarkBtn.classList.add("active");
          const iconNode = bookmarkBtn.querySelector(".icon");
          if(iconNode) iconNode.textContent = "★";
          alert("Bookmark added!");
          trackEvent("bookmark", {
            action: "add",
            page_title: pageTitle,
          });
        }
        localStorage.setItem("bookmarks", JSON.stringify(currentBookmarks));
      });
    }

    // --- 5. Interactive Prompt Logic (Inputs & Buttons) ---
    const wrappers = document.querySelectorAll(".quote-wrapper"); // code-wrapper 제외 (결과물)

    // [Analytics] Track Prompt Customization (Delegation)
    document.body.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      if (
        target &&
        target.tagName === "INPUT" &&
        target.classList.contains("prompt-input")
      ) {
        trackEvent("customize_prompt", {
          page_title: document.title,
          input_value: target.value,
          original_text: target.getAttribute("data-original"),
        });
      }
    });

    wrappers.forEach((wrapper) => {
      // 1. 가장 가까운 이전 헤더 찾기
      let currentNode = wrapper.previousElementSibling;
      let targetHeader: Element | null = null;

      while (currentNode) {
        if (
          ["H1", "H2", "H3", "H4", "H5", "H6"].includes(currentNode.tagName)
        ) {
          targetHeader = currentNode;
          break;
        }
        currentNode = currentNode.previousElementSibling;
      }

      // 2. 헤더 검증 (Strict Mode)
      // 헤더가 없거나 (Hook), "Basic Version" 또는 "Pro Version"이 아니면 제외
      if (!targetHeader) return;

      const headerText = targetHeader.textContent?.toLowerCase() || "";
      if (
        !headerText.includes("basic version") &&
        !headerText.includes("pro version")
      ) {
        return;
      }

      // 3. 내용 기반 2차 필터링 (안전장치)
      if (wrapper.classList.contains("quote-wrapper")) {
        const blockquote = wrapper.querySelector("blockquote");
        if (blockquote) {
          const text = (blockquote as HTMLElement).innerText.trim();
          if (
            text.includes("해커:") ||
            text.includes("AI:") ||
            text.includes("❌") ||
            text.includes("✅") ||
            /^[_*"'“]/.test(text)
          ) {
            return;
          }
        }
      }

      // A. Convert [placeholders] to Input Fields (Only for Prompts)
      if (wrapper.classList.contains("quote-wrapper")) {
        const blockquote = wrapper.querySelector("blockquote");
        if (blockquote) {
          // HTML 내용을 가져와서 [ ] 패턴을 input으로 치환
          // 주의: 이미 HTML 태그가 있을 수 있으므로 조심스럽게 처리
          // 간단한 구현을 위해 innerHTML 치환 사용 (XSS 위험은 정적 사이트라 낮음)
          let html = blockquote.innerHTML;

          // Regex: [text] or (text) but avoid existing tags
          // 매칭 그룹 1: 괄호 포함 전체 ([...])
          // 매칭 그룹 2: 내부 텍스트 (...)
          const placeholderRegex = /([\[\(]([^\[\]\(\)<>]+)[\]\)])/g;

          if (placeholderRegex.test(html)) {
            html = html.replace(
              placeholderRegex,
              (match, _full, innerText) => {
                // 제외 조건: 너무 길거나(50자 이상), 특수문자만 있거나 하면 패스
                if (innerText.length > 50) return match;
                return `<input type="text" class="prompt-input" placeholder="${innerText}" data-original="${innerText}" />`;
              },
            );
            blockquote.innerHTML = html;
          }
        }
      }

      // B. Copy Logic (Helper Function)
      const getFinalText = () => {
        const element = wrapper.querySelector("blockquote, pre");
        if (!element) return "";

        // Clone node to manipulate inputs without touching DOM
        const clone = element.cloneNode(true) as HTMLElement;
        const inputs = clone.querySelectorAll("input.prompt-input");
        const originalInputs =
          element.querySelectorAll("input.prompt-input");

        // Replace inputs with their values or placeholders in the clone
        inputs.forEach((input, index) => {
          const userValue = (originalInputs[index] as HTMLInputElement).value.trim();
          const originalPlaceholder = input.getAttribute("data-original");
          // 값이 있으면 값으로, 없으면 원래 placeholder([..])로 치환
          const textNode = document.createTextNode(
            userValue || `[${originalPlaceholder}]`,
          );
          if (input.parentNode) {
              input.parentNode.replaceChild(textNode, input);
          }
        });

        return clone.innerText || clone.textContent || "";
      };

      // C. Create Copy Button
      if (wrapper.querySelector(".copy-btn")) {
        wrapper.classList.add("is-prompt");
        return;
      }

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.ariaLabel = "Copy to Clipboard";
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

      btn.addEventListener("click", async () => {
        try {
          const content = getFinalText();
          await navigator.clipboard.writeText(content);

          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          btn.classList.add("copied");

          // GA Event: Copy Prompt
          trackEvent("copy_prompt", {
            page_title: document.title,
            prompt_text: content.slice(0, 100), // Track first 100 chars
          });

          setTimeout(() => {
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
            btn.classList.remove("copied");
          }, 2000);
        } catch (err) {
          console.error("Copy failed:", err);
        }
      });

      wrapper.appendChild(btn);
      wrapper.classList.add("is-prompt");

      // D. Action Buttons (ChatGPT/Claude)
      if (wrapper.classList.contains("quote-wrapper")) {
        const actionContainer = document.createElement("div");
        actionContainer.className = "action-buttons";

        const createActionBtn = (_name: string, url: string, label: string, colorClass: string) => {
          const a = document.createElement("a");
          a.className = `action-btn ${colorClass}`;
          a.href = url;
          a.target = "_blank";
          a.innerHTML = label;
          a.onclick = async () => {
            try {
              const content = getFinalText();
              await navigator.clipboard.writeText(content);
              btn.classList.add("copied");
              btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

              // GA Event: Use AI Tool
              trackEvent("use_ai_tool", {
                tool_name: _name,
                page_title: document.title,
              });

              setTimeout(() => btn.classList.remove("copied"), 2000);
            } catch {}
          };
          return a;
        };

        actionContainer.appendChild(
          createActionBtn(
            "ChatGPT",
            "https://chatgpt.com",
            "⚡️ ChatGPT",
            "btn-gpt",
          ),
        );
        actionContainer.appendChild(
          createActionBtn(
            "Claude",
            "https://claude.ai/new",
            "🧠 Claude",
            "btn-claude",
          ),
        );
        actionContainer.appendChild(
          createActionBtn(
            "Gemini",
            "https://gemini.google.com/app",
            "✨ Gemini",
            "btn-gemini",
          ),
        );
        actionContainer.appendChild(
          createActionBtn(
            "Grok",
            "https://x.com/i/grok",
            "🚀 Grok",
            "btn-grok",
          ),
        );

        wrapper.appendChild(actionContainer);
      }
    });
  });
