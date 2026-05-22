---
title: "Modality-Decoupled Online Recursive Editing"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20273"
author: "Siyuan Li, Youyuan Zhang, Fangming Liu, Jing Li"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20273v1 Announce Type: cross Abstract: Online model editing for multimodal large language models (MLLMs) requires assimilating a stream of corrections under tight compute and memory budgets. Yet editors developed for text-only LLMs often degrade on MLLMs: visually dominant activations skew the statistics that shape updates, causing cross-modal conflict, while sequential writes become entangled in a shared edit space and amplify long-horizon interference, causing inter-edit interference. To address these, we propose M-ORE, a modality-decoupled online recursive editor for lifelong MLLM adaptation. M-ORE is derived from a unified proximal-projection formulation and admits a closed-form update with a Sherman-Morrison recursion, yielding constant per-edit overhead. It maintains module-wise locality statistics for the text stack and the visual projector to avoid visually dominated update shaping and performs continual updates in a fixed orthogonal low-rank edit subspace via a Sherman-Morrison recursion to mitigate long-horizon interference. Experiments on multiple MLLM backbones and online editing benchmarks show that our M-ORE method consistently improves reliability, generality, and locality over strong baselines, while achieving favorable quality-efficiency scaling. Our code is publicly available at https://github.com/lab-klc/M-ORE.

---

📖 [Read original article](https://arxiv.org/abs/2605.20273)