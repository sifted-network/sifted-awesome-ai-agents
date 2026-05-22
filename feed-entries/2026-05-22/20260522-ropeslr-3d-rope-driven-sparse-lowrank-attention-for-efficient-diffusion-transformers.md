---
title: "RoPeSLR: 3D RoPE-driven Sparse-LowRank Attention for Efficient Diffusion Transformers"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20659"
author: "Yuxi Liu, Zekun Zhang, Yixiang Cai, Renjia Deng, Yutong He, Kun Yuan"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20659v1 Announce Type: cross Abstract: Diffusion Transformers (DiTs) have revolutionized high-fidelity video generation, yet their $\mathcal{O}(L^2)$ attention complexity poses a formidable bottleneck for long-sequence synthesis. While recent sparse-linear attention hybrids aim to mitigate this, their performance severely degrades at extreme sparsity due to the "RoPE Dilemma": standard linear attention fails to preserve the orthogonal relative-position structure of 3D Rotary Position Embeddings (RoPE), neutralizing vital distance awareness. To address this, we propose \textbf{RoPeSLR}, a 3D RoPE-guided Sparse-LowRank attention framework. We establish that under empirically validated assumptions, the DiT attention manifold admits a decoupling into a high-frequency semantic spike set (bounded by $\mathcal{O}(L^{3/2})$ sparsity) and an extreme low-rank ($\mathcal{O}(d_h \log L)$) background continuum. Guided by this structural prior, RoPeSLR eschews standard linear attention for a head-wise low-rank parameterization equipped with a learnable 3D Absolute Positional Embedding (PE) injection, seamlessly synthesizing long-range relative distance decay. By guaranteeing sub-quadratic sparsity and sub-linear rank growth, RoPeSLR is exceptionally suited for scaling to ultra-long video inference. Extensive evaluations validate this scalable superiority: at 90\% sparsity, RoPeSLR achieves up to $10\times$ fewer FLOPs on Wan2.1-1.3B and delivers a $2.26\times$ end-to-end inference speedup on the ultra-long 100K+ token sequences of HunyuanVideo-13B, all while maintaining near-lossless generation fidelity (less than 1.3\% average VBench degradation).

---

📖 [Read original article](https://arxiv.org/abs/2605.20659)