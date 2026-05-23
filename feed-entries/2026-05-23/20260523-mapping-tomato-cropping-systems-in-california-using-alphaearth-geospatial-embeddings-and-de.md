---
title: "Mapping Tomato Cropping Systems in California Using AlphaEarth Geospatial Embeddings and Deep Learning Analysis"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21804"
author: "Mohammadreza Narimani, Alireza Pourreza, Parastoo Farajpoor"
categories: ["eess.IV", "cs.CV", "cs.LG"]
---

arXiv:2605.21804v1 Announce Type: cross Abstract: Field-scale crop maps support supply-chain forecasting and policy, yet statewide crop identification still often depends on retrospective surveys or remote-sensing workflows built around hand-engineered spectral features. Those pipelines can be accurate, but they require repeated preprocessing and often lose robustness across years. This study evaluated whether Google DeepMind's AlphaEarth geospatial embeddings can serve as an analysis-ready alternative for mapping processing tomato systems in California. LandIQ 2018 crop polygons were used to assemble a balanced reference dataset of 4,742 tomato and 4,742 non-tomato fields. For each polygon, 64-band AlphaEarth embedding chips were extracted and aligned with binary masks, then divided into spatially independent training (n = 6,638), validation (n = 1,422), and test (n = 1,424) sets. A U-Net segmentation model was trained on AWS SageMaker using a composite masked binary cross-entropy and soft Dice loss. To complement hard predictions, Monte Carlo dropout was retained at inference and repeated 100 times per chip to estimate predictive mean and variance. On the independent test set, the model achieved 99.19% pixel accuracy, 98.69% precision, 99.40% recall, 99.04% F1 score, 98.11% intersection over union, and 99.02% chip accuracy. Uncertainty maps were consistently highest near field edges and low within field interiors. The results show that AlphaEarth embeddings retain crop-relevant spatial and temporal structure and can support accurate, field-scale tomato mapping without manual feature engineering.

---

📖 [Read original article](https://arxiv.org/abs/2605.21804)