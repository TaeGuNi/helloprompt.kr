import sys
import re

class CriticAgent:
    def __init__(self):
        self.criteria = [
            ("Contextual Delivery", 40, r"(퇴근|아침|회의|갑자기|위기|동료|상사)"),  # Pain Point keywords
            ("Workflow Integration", 30, r"(매일|아침|전|후|실행|명령어|설정)"), # Usage timing
            ("Narrative Arc", 30, r"(해결|결과|변화|결론|결국)") # Story structure
        ]
        self.threshold = 95

    def evaluate(self, content):
        score = 0
        feedback = []
        
        # 1. Check Quality Model (Simplified Regex Heuristic for now)
        # In production, this would be an LLM call: 
        # "Evaluate this text against QUALITY_MODEL.md. Return JSON {score, feedback}"
        
        for name, max_points, pattern in self.criteria:
            matches = re.findall(pattern, content)
            if len(matches) > 0:
                points = max_points
                feedback.append(f"✅ {name}: Found relevant keywords ({len(matches)}).")
            else:
                points = 0
                feedback.append(f"❌ {name}: Missing contextual keywords. Add more specific scenario.")
            score += points

        # Base score buffer (assuming basic grammar is correct)
        # Adjusting to 100 scale for the specific 'Contextual Delivery' section only?
        # Let's assume we are scoring OUT OF 100 for the "Contextual Delivery" section specifically.
        
        return {
            "score": score,
            "passed": score >= self.threshold,
            "feedback": "\n".join(feedback)
        }

if __name__ == "__main__":
    # Test mode
    sample_text = sys.stdin.read()
    agent = CriticAgent()
    result = agent.evaluate(sample_text)
    print(f"Score: {result['score']}")
    print(f"Passed: {result['passed']}")
    print(f"Feedback:\n{result['feedback']}")
