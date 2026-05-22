---
title: "S2Aligner: Pair-Efficient and Transferable Pre-Training for Sparse Text-Attributed Graphs"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.18579"
author: "Yuhan Wang, Haopeng Zhang, Yibo Ding, Jiaqi Yu, Xinyu Zhao, Yuhang Liu, Ziwei Zhang, Xiao Wang, Ruijie Wang"
categories: ["cs.LG"]
---

arXiv:2605.18579v3 Announce Type: replace Abstract: Pre-training on text-attributed graphs (TAGs) is central to building transferable graph foundation models, where LLM-as-Aligner methods align graph and text representations through the semantic knowledge of large language models. However, these methods usually assume that node texts provide sufficient and reliable supervision, an assumption often violated in real-world sparse TAGs. When textual anchors are missing, noisy, or uneven across domains, graph structures must be aligned with weak semantic evidence, leading to unreliable structure-semantics correspondence and sparsity-induced transfer bias. This paper presents S2Aligner, a sparsity-aware and structure-enhanced LLM-as-Aligner framework for graph-text pre-training on sparse TAGs. The key idea is to decouple semantic alignment from structural modeling, allowing topology-aware signals to enhance alignment without contaminating the shared semantic space. Specifically, S2Aligner decomposes graph-text representations into semantic and structural components, uses structure-oriented reconstruction with consistency control to inject reliable topology cues into text representations, and suppresses inconsistent structural signals under textual sparsity. Moreover, S2Aligner introduces sparsity-aware cross-domain risk balancing, which calibrates domain risks through a global-domain density ratio and downweights unreliable sparse samples via graph reliability estimation. Theoretical analysis shows that this objective reduces cross-domain generalization gaps by controlling domain risk discrepancy. Extensive experiments across diverse graph domains, sparsity levels, and downstream tasks demonstrate that S2Aligner consistently outperforms existing baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.18579)