---
title: "Closed Loop Dynamic Driving Data Mixture for Real-Synthetic Co-Training"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21372"
author: "Hongzhi Ruan, Pei Liu, Weiliang Ma, Zhengning Li, Xueyang Zhang, Jun Ma, Dan Xu, Kun Zhan"
categories: ["cs.CV", "cs.AI", "cs.LG", "cs.RO"]
---

arXiv:2605.21372v1 Announce Type: cross Abstract: Data scaling is fundamental to modern deep learning, and grows increasingly critical as autonomous driving shifts to end-to-end learning. Real-world driving data is expensive to annotate and scene-biased, making real-synthetic co-training with near-infinite synthetic data a promising direction. However, naively incorporating all available synthetic data is inefficient and leads to distribution shifts, and optimizing data mixture under practical training budgets remains a critical yet under-explored problem. In this sense, we claim that the mixture of training data requires clear guidance in terms of scene types and quantities. Particularly in this work, we conceptualize the data mixture approximately as a dynamic optimization process that iteratively adjusts the training data mixture to maximize model performance, guided by closed-loop evaluation feedback, and propose AutoScale, a fully automated closed-loop data engine unifying scene representation, data mixture optimization and retrieval, as well as model training and evaluation. Specifically, we propose Graph Regularized AutoEncoder (Graph-RAE) for driving scene representations, introduce Cluster-aware Gradient Ascent (Cluster-GA) for cluster-wise importance estimation and reweighting, and perform cluster-guided vector retrieval to select high-value samples. Experiments on NavSim demonstrate that AutoScale outperforms vanilla co-training and cross-domain baselines, achieving better performance with fewer synthetic samples under constrained budgets.

---

📖 [Read original article](https://arxiv.org/abs/2605.21372)