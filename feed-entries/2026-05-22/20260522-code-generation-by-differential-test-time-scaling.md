---
title: "Code Generation by Differential Test Time Scaling"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20473"
author: "Yifeng He, Ethan Wang, Jicheng Wang, Xuanxin Ouyang, Hao Chen"
categories: ["cs.SE", "cs.AI", "cs.LG"]
---

arXiv:2605.20473v1 Announce Type: cross Abstract: Test-time scaling has emerged as a promising approach for improving code generation by exploring large solution spaces at inference time. However, existing methods often rely on public test cases that are unavailable in practice, or require extensive LLM inference for candidate selection, leading to significant token consumption and time overhead. We present DiffCodeGen, a novel test-time scaling method for code generation based on coverage-guided differential analysis. DiffCodeGen generates diverse code candidates using various sampling and prompting strategies, then applies coverage-guided fuzzing to synthesize inputs without requiring any existing tests or large language models. By executing all candidates on these inputs, DiffCodeGen captures their dynamic behavior and clusters candidates based on behavioral similarity. DiffCodeGen selects the medoid of the largest cluster as the final output. Unlike prior test-time scaling methods that invoke additional LLM inference for candidate selection, DiffCodeGen performs selection without any extra model calls, incurring little to no additional token consumption. DiffCodeGen is fully asynchronous, naturally suited to the current trend of agentic coding, and is thus efficient and highly scalable. We evaluate DiffCodeGen across 4 large language models, demonstrating consistent improvements over baselines. Compared to state-of-the-art test-time scaling methods, DiffCodeGen achieves competitive or superior performance while using only a fraction of time and tokens. DiffCodeGen is model-agnostic and can be combined with reasoning models to further boost performance.

---

📖 [Read original article](https://arxiv.org/abs/2605.20473)