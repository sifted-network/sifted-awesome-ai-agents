---
title: "Models Can Model, But Can't Bind: Structured Grounding in Text-to-Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21751"
author: "Zhiqi Gao, Albert Ge, Alexander Berenbeim, Nathaniel D. Bastian, Frederic Sala"
categories: ["cs.LG"]
---

arXiv:2605.21751v1 Announce Type: new Abstract: Text-to-optimization requires two separable capabilities: modeling -- choosing the right optimization structure -- and binding -- grounding every coefficient, index, and parameter in the concrete problem data. We study this via Text2Opt-Bench, a scalable benchmark of solver-verified optimization problems spanning 12 categories, from textbook linear programs to stochastic and multi-objective formulations with up to thousands of variables. Across 10+ models, we find that accuracy collapses as instance data grows, even when the formulation itself is simple. We call this the effective binding limit. We address this via a simple inference-time approach, BIND, which externalizes numeric data to structured files so the model binds data programmatically rather than transcribing from the prompt. BIND improves GPT-5-Nano from 59.1% to 82.4% accuracy, matching pass@5 (82.0%) at lower token cost than pass@1, and GPT-5 from 86.2% to 95.8%. Furthermore, we validate our hypothesis by finetuning a model exclusively on binding and show that it outperforms end-to-end SFT and RL across three structurally distinct optimization categories, with a 1.5B binding specialist alone matching a 7B end-to-end baseline.

---

📖 [Read original article](https://arxiv.org/abs/2605.21751)