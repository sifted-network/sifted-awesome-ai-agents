---
title: "LiteCoOp: Lightweight Multi-LLM Shared-Tree Reasoning for Model-Serving Compiler Optimizations"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.01935"
author: "Annabelle Sujun Tang, Christopher Priebe, Lianhui Qin, Hadi Esmaeilzadeh"
categories: ["cs.LG", "cs.AI", "cs.PL"]
---

arXiv:2602.01935v2 Announce Type: replace-cross Abstract: LLM-guided compiler optimization has recently shown promise, but existing approaches rely on a single large LLM throughout search, making them expensive and excluding smaller models. We pose the research question: whether heterogeneous LLMs can collaborate during compiler optimization while reducing compilation cost below optimization guided by a single large LLM. Crucially, this must be achieved without introducing overhead from agentic frameworks, which would run counter to the goal of lower compilation cost. To achieve these competing objectives, we introduce LiteCoOp, a lightweight framework that turns the optimization search tree itself into the mechanism for multi-LLM collaboration, enabling heterogeneous models to share progress without external agentic coordination. At each optimization step, LiteCoOp queries one LLM to propose both a compiler transformation and select the LLM to query at the next step. These LLM proposals are recorded in a shared MCTS tree, so all models are invoked serially and yet are informed by each other's decisions. The shared MCTS backpropagates the rewards, allowing progress made by one model to influence later decisions by others. This makes the MCTS tree the collaborative reasoning mechanism itself, avoiding inter-model communication, heavy reasoning traces, or agentic infrastructure. We instantiate this idea with an LLM-aware UCT that biases model selection toward smaller LLMs to reduce cost while still preserving the compiler performance objective. Across diverse GPU and (CPU) benchmarks, LiteCoOp consistently outperforms single-model baselines, with the best results obtained when scaling collaboration to eight heterogeneous LLMs. This eight-model config reduces total compilation time by 1.95x (1.74x), reduces API cost by 4.47x (4.32x), and invokes the largest model for only 23.1% (23.9%) of total calls while demonstrating collaboration scalability.

---

📖 [Read original article](https://arxiv.org/abs/2602.01935)