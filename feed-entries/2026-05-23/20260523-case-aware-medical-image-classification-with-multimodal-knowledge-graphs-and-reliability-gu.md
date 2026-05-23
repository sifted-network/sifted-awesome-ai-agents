---
title: "Case-Aware Medical Image Classification with Multimodal Knowledge Graphs and Reliability-Guided Refinement"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22547"
author: "Yiming Xu, Yixuan Liu, Yuhang Zhang, Ling Zheng, Yihan Wang, Qi Song"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22547v1 Announce Type: cross Abstract: Deep learning has brought significant progress to medical image classification, yet most existing methods still rely on isolated visual evidence and cannot effectively leverage similar cases or external knowledge. In clinical practice, diagnosis is typically supported by historical similar cases and their associated symptoms. To simulate this diagnostic process, we propose a framework that performs case-aware reasoning using multimodal knowledge graphs for explainable medical image diagnosis. Given an input image, our method constructs a multimodal knowledge graph from adaptively retrieved similar cases, enabling more effective utilization of related samples. We further introduce a knowledge propagation and injection mechanism, where an image-centric Graph Attention Network propagates knowledge semantics to obtain case-based features, followed by a bidirectional cross-modal attention mechanism that injects these features into visual representations for cross-modal alignment. To mitigate noisy retrieval, we design a confidence-calibrated decision refinement scheme that estimates the reliability of each retrieved case by jointly considering prediction confidence and sample similarity, adaptively adjusting its contribution to the final prediction and providing interpretable case-level evidence. Extensive experiments on multiple medical imaging datasets show that our approach consistently outperforms strong baselines, and ablation studies validate the effectiveness of each component. The source code is publicly available at https://anonymous.4open.science/r/MKG-CARE-8B7B.

---

📖 [Read original article](https://arxiv.org/abs/2605.22547)