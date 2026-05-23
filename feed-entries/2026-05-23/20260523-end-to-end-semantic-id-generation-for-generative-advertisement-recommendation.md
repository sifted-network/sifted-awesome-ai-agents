---
title: "End-to-End Semantic ID Generation for Generative Advertisement Recommendation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.10445"
author: "Jie Jiang, Xinxun Zhang, Enming Zhang, Yuling Xiong, Jun Zhang, Jingwen Wang, Huan Yu, Yuxiang Wang, Hao Wang, Xiao Yan, Jiawei Jiang"
categories: ["cs.IR", "cs.LG"]
---

arXiv:2602.10445v3 Announce Type: replace-cross Abstract: Generative Recommendation (GR) has excelled by framing recommendation as next-token prediction. This paradigm relies on Semantic IDs (SIDs) to tokenize large-scale items into discrete sequences. Existing GR approaches predominantly generate SIDs via Residual Quantization (RQ), where items are encoded into embeddings and then quantized to discrete SIDs. However, this paradigm suffers from inherent limitations: 1) Objective misalignment and semantic degradation stemming from the two-stage compression; 2) Error accumulation inherent in the structure of RQ. To address these limitations, we propose UniSID, a Unified SID generation framework for generative advertisement recommendation. Specifically, we jointly optimize embeddings and SIDs in an end-to-end manner from raw advertising data, enabling semantic information to flow directly into the SID space and thus addressing the inherent limitations of the two-stage cascading compression paradigm. To capture fine-grained semantics, a multi-granularity contrastive learning strategy is introduced to align distinct items across SID levels. Finally, a summary-based ad reconstruction mechanism is proposed to encourage SIDs to capture high-level semantic information that is not explicitly present in advertising contexts. Experiments demonstrate that UniSID consistently outperforms state-of-the-art SID generation methods, yielding up to a 4.62% improvement in Hit Rate metrics across downstream advertising scenarios compared to the strongest baseline.

---

📖 [Read original article](https://arxiv.org/abs/2602.10445)