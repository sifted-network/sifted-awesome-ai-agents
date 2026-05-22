---
title: "Fast Reconstruction of Exact Maxwell Dynamics from Sparse Data"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20514"
author: "Dan DeGenaro, Xin Li, Obed Amo, Michael Pokojovy, Sarah Adel Bargal, Markus Lange-Hegermann, Bogdan Rai\\c{t}\\u{a}"
categories: ["cs.LG", "cs.NA", "math.NA", "stat.ML"]
---

arXiv:2605.20514v1 Announce Type: new Abstract: We introduce FLASH-MAX, a shallow, exact-by-construction neural network architecture for predicting homogeneous electromagnetic fields from sparse pointwise observations. Each hidden neuron represents a separate exact solution to Maxwell's equations, so that the network satisfies the governing equations symbolically by construction and can be trained end-to-end from sparse data within seconds. We prove a universal approximation result showing that this exact model class remains universal on arbitrary domains. FLASH-MAX reaches sub-1% relative validation error from about 1K sparse pointwise observations in seconds, all while maintaining a zero PDE residual, and keeps single-digit errors even for only 100 observations sampled from 3D space. These results suggest that moving governing structure from the loss into the hypothesis class can dramatically improve the trade-off between precision and optimization speed in scientific machine learning.

---

📖 [Read original article](https://arxiv.org/abs/2605.20514)