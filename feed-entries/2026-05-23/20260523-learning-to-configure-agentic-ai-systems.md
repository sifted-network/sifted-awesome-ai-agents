---
title: "Learning to Configure Agentic AI Systems"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.11574"
author: "Aditya Taparia, Som Sagar, Ransalu Senanayake"
categories: ["cs.AI"]
---

arXiv:2602.11574v3 Announce Type: replace Abstract: Configuring LLM-based agent systems involves choosing workflows, tools, token budgets, and prompts from a large combinatorial design space, and is typically handled today by fixed templates or hand-tuned heuristics that apply the same configuration regardless of query difficulty, leading to brittle behavior and wasted compute. To address this, we formulate agent configuration as a semi-Markov decision process (SMDP) where each configuration acts as a temporally extended option that determines how an agent system processes a query, and introduce introduce ARC (Agentic Resource & Configuration learner), a lightweight hierarchical policy that dynamically selects query-specific agent configurations. Across reasoning, tool-use, and agentic benchmarks, ARC consistently improves over budget-matched tool-augmented LLMs, increasing average reasoning accuracy by 31.3%, tool-use accuracy by 13.95%, and doubling {\tau}-Bench (Airline) Pass^1 success from 9.0% to 18.0%. These results demonstrate that learning per-query agent configurations is a powerful alternative to "one size fits all" designs.

---

📖 [Read original article](https://arxiv.org/abs/2602.11574)