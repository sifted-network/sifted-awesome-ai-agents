---
title: "CODA: Rewriting Transformer Blocks as GEMM-Epilogue Programs"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.19269"
author: "Han Guo, Jack Zhang, Arjun Menon, Driss Guessous, Vijay Thakkar, Yoon Kim, Tri Dao"
categories: ["cs.LG"]
---

arXiv:2605.19269v2 Announce Type: replace Abstract: Transformer training systems are built around dense linear algebra, yet a nontrivial fraction of end-to-end time is spent on surrounding memory-bound operators. Normalization, activations, residual updates, reductions, and related computations repeatedly move large intermediate tensors through global memory while performing little arithmetic, making data movement an increasingly important bottleneck in otherwise highly optimized training stacks. We introduce CODA, a GPU kernel abstraction that expresses these computations as GEMM-plus-epilogue programs. CODA is based on the observation that many Transformer operators exposed as separate framework kernels can be algebraically reparameterized to execute while a GEMM output tile remains on chip, before it is written to memory. The abstraction fixes the GEMM mainloop and exposes a small set of composable epilogue primitives for scaling, reductions, pairwise transformations, and accumulation. This constrained interface preserves the performance structure of expert-written GEMMs while remaining expressive enough to cover nearly all non-attention computation in the forward and backward pass of a standard Transformer block. Across representative Transformer workloads, both human- and LLM-authored CODA kernels achieve high performance, suggesting that GEMM-plus-epilogue programming offers a practical path toward combining framework-level productivity with hardware-level efficiency.

---

📖 [Read original article](https://arxiv.org/abs/2605.19269)