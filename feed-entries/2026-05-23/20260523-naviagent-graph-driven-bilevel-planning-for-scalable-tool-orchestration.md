---
title: "NaviAgent: Graph-Driven Bilevel Planning for Scalable Tool Orchestration"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2506.19500"
author: "Yan Jiang, Hao Zhou, Lizhong GU, Tianlong Li, Ruinan Jin, Wanqi Zhou, Ai Han"
categories: ["cs.AI", "cs.CL", "cs.LG"]
---

arXiv:2506.19500v3 Announce Type: replace Abstract: Large Language Models (LLMs) increasingly act as function-call agents that invoke external tools to tackle tasks beyond their static knowledge. However, they typically invoke tools one at a time without a global view of task structure. As tools often depend on one another, this leads to error accumulation and poor scalability, particularly when scaling to hundreds or thousands of tools. To address these limitations, we propose NaviAgent, an explicit bilevel architecture that decouples task planning from tool execution through graph-based modeling of tool relations. At the planning level, the LLM-based agent decides whether to respond directly, clarify intent, or retrieve and execute a toolchain independent of inter-tool complexity. At the execution level, a Tool World Navigation Model (TWNM) encodes structural and behavioral relations among tools, steering the agent to compose scalable and robust invocation sequences. Incorporating feedback from real tool interactions, NaviAgent achieves closed-loop alignment between planning and execution, enabling adaptive navigation in large-scale tool ecosystems. Evaluations on API-Bank and ToolBench show consistent improvements in task success rate (TSR), with TWNM yielding an average gain of 13.1 points on complex tasks. Further tests on 50 real APIs across 7 domains show consistent gains of 4.3--12.0 points, with fewer steps and latency, demonstrating robust generalization under real-world dynamics.

---

📖 [Read original article](https://arxiv.org/abs/2506.19500)