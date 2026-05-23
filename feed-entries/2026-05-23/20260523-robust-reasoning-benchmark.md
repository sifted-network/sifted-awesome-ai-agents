---
title: "Robust Reasoning Benchmark"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.08571"
author: "Pavel Golikov, Evgenii Opryshko, Gennady Pekhimenko, Mark C. Jeffrey"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2604.08571v2 Announce Type: replace-cross Abstract: While Large Language Models (LLMs) achieve high performance on standard mathematical benchmarks, their problem-solving abilities depend on the context and textual formatting. We introduce the Robust Reasoning Benchmark (RRB), a pipeline of 13 deterministic textual perturbations applied to AIME 2024 and AIME 2025. Evaluating 8 state-of-the-art models, we find that frontier models are largely resilient, with the notable exception of Claude, which categorically refuses many transformed prompts. Open-weights reasoning models exhibit a range of failure modes under structural noise (cognitive thrashing, tokenization breakdown, and reasoning collapse), with up to 54% average accuracy drops across perturbations and up to 100% on some. We further study one of these failure modes in isolation: attention dilution caused by the model's own chain-of-thought. By tasking models with solving multiple independent mathematical problems sequentially within a single context window, we identify Intra-Query Attention Dilution. Open-weights models ranging from 7B to 120B parameters exhibit accuracy decay on subsequent problems, suggesting that intermediate reasoning steps progressively pollute standard dense attention mechanisms. We argue that in order to achieve reliable reasoning, future architectures need to integrate explicit contextual resets within models' own chain-of-thought, leading to open research questions regarding the optimal granularity of reasoning tasks.

---

📖 [Read original article](https://arxiv.org/abs/2604.08571)