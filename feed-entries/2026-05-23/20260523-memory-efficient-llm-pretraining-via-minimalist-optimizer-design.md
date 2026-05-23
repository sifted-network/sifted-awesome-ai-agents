---
title: "Memory-Efficient LLM Pretraining via Minimalist Optimizer Design"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2506.16659"
author: "Athanasios Glentis, Jiaxiang Li, Andi Han, Mingyi Hong"
categories: ["cs.LG", "cs.AI", "math.OC"]
---

arXiv:2506.16659v3 Announce Type: replace-cross Abstract: Training large language models (LLMs) relies on adaptive optimizers such as Adam, which introduce extra operations and require significantly more memory to maintain first- and second-order moments than SGD. While recent works such as GaLore, Fira and APOLLO have proposed state-compressed memory-efficient variants, a fundamental question remains: What are the minimum modifications to plain SGD needed to match state-of-the-art pretraining performance? We systematically investigate this question using a bottom-up approach, and identify two simple yet highly (memory- and compute-) efficient techniques: (1) column-wise gradient normalization (normalizing the gradient along the output dimension), that boosts SGD performance without momentum; and (2) applying first-order momentum only to the output layer, where gradient variance is highest. Combining these two techniques lead to SCALE (Stochastic Column-normAlized Last-layer momEntum), a simple optimizer for memory efficient pretraining. Across multiple models (60M-1B), SCALE matches or exceeds the performance of Adam while using only 35-45% of the total memory. It also consistently outperforms memory-efficient optimizers such as GaLore, Fira and APOLLO, making it a strong candidate for large-scale pretraining under memory constraints. For LLaMA 7B, SCALE outperforms the state-of-the-art memory-efficient methods APOLLO and Muon in both perplexity and memory consumption.

---

📖 [Read original article](https://arxiv.org/abs/2506.16659)