---
title: "DECO: Sparse Mixture-of-Experts with Dense-Comparable Performance on End-Side Devices"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.10933"
author: "Chenyang Song, Weilin Zhao, Xu Han, Chaojun Xiao, Yingfa Chen, Zhiyuan Liu"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.10933v3 Announce Type: replace Abstract: While Mixture-of-Experts (MoE) scales model capacity without proportionally increasing computation, its massive total parameter footprint creates significant storage and memory-access bottlenecks, which hinder efficient end-side deployment that simultaneously requires high performance, low computational cost, and small storage overhead. To achieve these properties, we present DECO, a sparse MoE architecture designed to match the performance of dense Transformers under identical total parameter budgets and training tokens. DECO utilizes the differentiable and flexible ReLU-based routing enhanced by learnable expert-wise scaling, which adaptively balances the contributions of routed and shared experts. Furthermore, we introduce NormSiLU, an activation function that normalizes inputs prior to SiLU operators, producing a more stable trend of routed-expert activation ratio and a higher intrinsic sparsity level. We also identify an empirical advantage in using non-gated MLP experts with ReLU-based routing, indicating the possibility of MoE architecture simplification. Experiments demonstrate that DECO, activating only 20% of routed experts, matches dense performance and outperforms established MoE baselines. Our specialized acceleration kernel delivers a 2.93$\times$ speedup on Jetson AGX Orin compared with dense inference. Code and checkpoints are available at https://github.com/thunlp/DECO.

---

📖 [Read original article](https://arxiv.org/abs/2605.10933)