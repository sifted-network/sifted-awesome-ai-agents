---
title: "Black-Box Optimization From Small Offline Datasets via Meta Learning with Synthetic Tasks"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.12325"
author: "Azza Fadhel, The Hung Tran, Trong Nghia Hoang, Jana Doppa"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2604.12325v3 Announce Type: replace-cross Abstract: We consider the problem of offline black-box optimization, where the goal is to discover optimal designs (e.g., molecules or materials) from past experimental data. A key challenge in this setting is data scarcity: in many scientific applications, only small or poor-quality datasets are available, which severely limits the effectiveness of existing algorithms. Prior work has theoretically and empirically shown that performance of offline optimization algorithms depends on how well the surrogate model captures the optimization bias (i.e., ability to rank input designs correctly), which is challenging to accomplish with limited experimental data. This paper proposes Surrogate Learning with Optimization Bias via Synthetic Task Generation (OptBias), a meta-learning framework that directly tackles data scarcity. OptBias learns a reusable optimization bias by training on synthetic tasks generated from a Gaussian process, and then fine-tunes the surrogate model on the small data for the target task. Across diverse continuous and discrete offline optimization benchmarks, OptBias consistently outperforms state-of-the-art baselines in small data regimes. These results highlight OptBias as a robust and practical solution for offline optimization in realistic small data settings.

---

📖 [Read original article](https://arxiv.org/abs/2604.12325)