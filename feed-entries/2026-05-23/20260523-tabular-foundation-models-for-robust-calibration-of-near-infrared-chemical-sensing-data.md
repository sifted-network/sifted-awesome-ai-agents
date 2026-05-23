---
title: "Tabular foundation models for robust calibration of near-infrared chemical sensing data"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21544"
author: "Robin Reiter, Denis Cornet, Fabien Michel, Lauriane Rouan, Gregory Beurier"
categories: ["cs.LG", "eess.SP"]
---

arXiv:2605.21544v1 Announce Type: new Abstract: Near-infrared spectroscopy is increasingly used as a rapid, non-destructive chemical sensing technology for the analysis of food, pharmaceutical, biological, and environmental samples. However, the practical deployment of NIR sensors still depends on calibration models able to handle high-dimensional, collinear spectra, limited sample sizes, preprocessing dependence, spectral outliers, and extrapolation beyond the calibration domain. Here, we evaluate whether tabular foundation models can provide a new calibration strategy for NIR chemical sensing. We benchmark TabPFN on 66 NIR datasets covering 54 regression and 12 classification tasks, and compare direct inference on raw spectra with preprocessing-optimized inference against PLS/PLS-DA, Ridge, Catboost, and one-dimensional convolutional neural networks. The study uses a unified validation framework in which preprocessing and model selection are performed exclusively on calibration data before external test evaluation. In regression, preprocessing-optimized TabPFN achieves the best overall average rank and significantly outperforms PLS, CatBoost, TabPFN on raw spectra, and CNN-1D, while remaining statistically comparable to Ridge. In classification, TabPFN applied directly to raw spectra provides the best average rank, with performance close to the optimized variant. Robustness analyses show that TabPFN provides strong average predictive performance but that its advantage decreases on spectral outliers and extrapolated samples, where classical chemometric models remain competitive. These results suggest that tabular foundation models can complement established chemometric workflows for NIR chemical sensing, especially in small- to medium-sized calibration settings, while highlighting the need for spectroscopy-specific priors and uncertainty-aware deployment strategies.

---

📖 [Read original article](https://arxiv.org/abs/2605.21544)