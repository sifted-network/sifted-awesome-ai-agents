---
title: "A Reproducible Log-Driven AutoML Framework for Interpretable Pipeline Optimization in Healthcare Risk Prediction"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21528"
author: "Rui Huang, Lican Huang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21528v1 Announce Type: cross Abstract: Accurate and reproducible disease risk prediction remains challenging due to heterogeneous features, limited samples, and severe class imbalance. This study introduces yvsoucom-iterkit, a deterministic and log-driven automated machine learning framework that formulates pipeline optimization as a fully reproducible, configuration-level system. Each pipeline is encoded as a traceable log entity, enabling analysis of component attribution, interactions, similarity, and cross-seed robustness. Experiments on the Pima Indians Diabetes and Stroke datasets across more than 18,000 pipeline configurations reveal a structured and partially redundant search space, where performance is governed by a small subset of interacting components. Random Forest importance analysis identifies augmentation (0.454), model choice (0.198), and imbalance handling (0.101) as key drivers on Pima, while imbalance handling dominates Stroke (0.406). Component similarity analysis shows strong redundancy, with feature selection variants (biMax-biMean) exhibiting low RMS distance (0.0252), mixup closely matching no augmentation (0.0279), and TomekLinks aligning with no imbalance handling (0.0325), whereas Gaussian noise shows greater divergence from no augmentation (0.10). The framework achieves strong and stable performance using ensemble models (Weighted-F1 0.89, Macro-F1 0.88 on Pima; Weighted-F1 0.94 on Stroke), while Macro-F1 remains lower on Stroke (0.67) due to class imbalance. Cross-seed analysis reveals a performance-robustness trade-off, with ensembles showing lower variability (0.023-0.026) than SVM. These results indicate that effective AutoML optimization can focus on a reduced set of high-impact components.

---

📖 [Read original article](https://arxiv.org/abs/2605.21528)