---
title: "FlashSinkhorn: IO-Aware Entropic Optimal Transport on GPU"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.03067"
author: "Felix X. -F. Ye, Xingjie Li, An Yu, Ming-Ching Chang, Linsong Chu, Davis Wertheimer"
categories: ["cs.LG", "cs.AI", "cs.NA", "math.NA"]
---

arXiv:2602.03067v3 Announce Type: replace-cross Abstract: Entropic optimal transport (EOT) via Sinkhorn iterations is widely used in modern machine learning, yet GPU solvers remain inefficient at scale. Tensorized implementations suffer quadratic HBM traffic from dense $n\times m$ interactions, while existing online backends avoid storing dense matrices but still rely on generic tiled map-reduce reduction kernels with limited fusion. We present \textbf{FlashSinkhorn}, an IO-aware EOT solver for squared Euclidean cost that rewrites stabilized log-domain Sinkhorn updates as row-wise LogSumExp reductions of biased dot-product scores, the same normalization as transformer attention. This enables FlashAttention-style fusion and tiling: fused Triton kernels stream tiles through on-chip SRAM and update dual potentials in a single pass, substantially reducing HBM IO per iteration while retaining linear-memory operations. We further provide streaming kernels for transport application, enabling scalable first- and second-order optimization. On A100 GPUs, FlashSinkhorn achieves up to $32\times$ forward-pass and $161\times$ end-to-end speedups over state-of-the-art online baselines on point-cloud OT, improves scalability on OT-based downstream tasks. For reproducibility, we release an open-source implementation at https://github.com/ot-triton-lab/flash-sinkhorn .

---

📖 [Read original article](https://arxiv.org/abs/2602.03067)