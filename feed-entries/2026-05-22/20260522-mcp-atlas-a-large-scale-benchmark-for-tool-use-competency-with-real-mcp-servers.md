---
title: "MCP-Atlas: A Large-Scale Benchmark for Tool-Use Competency with Real MCP Servers"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.00933"
author: "Chaithanya Bandi, Razvan-Gabriel Dumitru, Ben Hertzberg, Divyansh Agarwal, Geobio Boo, Tejas Polakam, Sami Hassaan, Jeff Da, HiJae Kim, Vipul Gupta, Manasi Sharma, Andrew Park, Martin Dimakis, Ernesto Gabriel Hernandez Montoya, Dan Rambado, Ivan Salazar, Rafael Cruz, MohammadHossein Rezaei, Chetan Rane, Ben Levin, Daniel Yue Zhang, Brad Kenstler, Bing Liu"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2602.00933v3 Announce Type: replace-cross Abstract: The Model Context Protocol (MCP) is emerging as a standard interface through which large language model (LLM) agents discover and invoke external tools. However, existing MCP evaluations fall short along three key axes: realistic multi-step workflows with cross-server orchestration, breadth across authentic MCP servers rather than mocks, and structured, reproducible claim-level scoring disentangled from agent verbosity or style. We introduce MCP-Atlas, a benchmark for measuring tool-use competency against production MCP servers. MCP-Atlas contains 1,000 natural-language tasks written and verified by human experts spanning 36 real MCP servers and 220 tools. Prompts do not specify servers, tools, or parameters, requiring agents to identify relevant tools among semantically plausible distractors and to compose multi-step, cross-server workflows. Each task is scored with a claim-level rubric, where final answers are scored against atomic factual claims grounded in tool outputs. This answer-centric scoring permits valid alternative tool-call trajectories to receive credit. We pair this with an 11-category diagnostic taxonomy that disentangles tool-call failures from cognitive failures in task understanding, synthesis, parsing, and stopping. Evaluating 20 frontier models from six providers under matched task-level conditions, we find pass rates up to 82.2% at a 0.75 claim coverage threshold and a clear three-tier performance structure. Automated diagnostics show that 63.3% of diagnosed failures are cognitive rather than tool-call related. Notably, several high-performing models fail after successful tool execution due to premature stopping or incorrect synthesis. We release the task schema, containerized harness, claim evaluator, and a 500-task public split, while reserving a 500-task private split to preserve leaderboard integrity. The code is at https://github.com/scaleapi/mcp-atlas.

---

📖 [Read original article](https://arxiv.org/abs/2602.00933)