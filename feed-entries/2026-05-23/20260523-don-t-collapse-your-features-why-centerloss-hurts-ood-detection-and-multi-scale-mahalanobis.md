---
title: "Don't Collapse Your Features: Why CenterLoss Hurts OOD Detection and Multi-Scale Mahalanobis Wins"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21493"
author: "Rahul D Ray"
categories: ["cs.LG", "cs.AI", "cs.CV"]
---

arXiv:2605.21493v1 Announce Type: cross Abstract: The ability to detect out-of-distribution (OOD) inputs is fundamental to safe deployment of machine learning systems. Yet, current methods often rely on feature representations that are optimised solely for classification accuracy, neglecting the distinct requirements of epistemic uncertainty. We introduce GOEN (Geometry-Optimised Epistemic Network), a simple pipeline that combines multi-scale features, L2 normalisation, Mahalanobis distance, and a calibration head trained with real hard OOD examples. Through systematic ablation we uncover a counter-intuitive finding: CenterLoss, a popular regulariser for feature compactness, significantly degrades OOD detection performance, reducing average OOD AUROC from 0.9483 to 0.9366 despite improving classification accuracy. The best variant, GOEN-NoCenterLoss, achieves an average OOD AUROC of 0.9483, surpassing all baselines including deep ensembles (0.8827), KNN (0.8967), and ODIN (0.8870) on CIFAR-10 benchmarks, while maintaining competitive in-distribution accuracy. Our results challenge the prevailing assumption that better classification geometry automatically leads to better epistemic uncertainty. Instead, we show that overly tight feature clusters compress inter-class margins and distort the covariance structure needed for effective OOD detection. GOEN is efficient, training in under 20 minutes on a single GPU, and provides a practical blueprint for building AI systems that reliably recognise their own limitations.

---

📖 [Read original article](https://arxiv.org/abs/2605.21493)