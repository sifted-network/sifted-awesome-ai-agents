---
title: "Cluster-Adaptive Feature Extraction and its Theoretical Foundation with Minkowski Weighted k-Means"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.25958"
author: "Renato Cordeiro de Amorim, Vladimir Makarenkov"
categories: ["cs.LG"]
---

arXiv:2603.25958v2 Announce Type: replace Abstract: The Minkowski weighted $k$-means ($mwk$-means) algorithm extends classical $k$-means by incorporating feature weights and a Minkowski distance. We first show that the $mwk$-means objective can be expressed as a power-mean aggregation of within-cluster dispersions, with the order determined by the Minkowski exponent $p$. This formulation reveals how $p$ controls the transition between selective and uniform use of features. Using this representation, we derive bounds for the objective function and characterise the structure of the feature weights, showing that they depend only on relative dispersion and follow a power-law relationship with dispersion ratios. This leads to explicit guarantees on the suppression of high-dispersion features, and we establish convergence of the algorithm. Building on these theoretical results, we introduce Cluster-Adaptive Feature Extraction (CAFE), a method that uses the $mwk$-means feature weights to rescale the data prior to unsupervised feature extraction. We prove that this rescaling reverses the within-cluster dispersion ordering, suppressing noisy features and amplifying informative ones. Numerous experiments conducted under controlled within-cluster noise show that CAFE consistently improves the results of traditional feature extraction methods.

---

📖 [Read original article](https://arxiv.org/abs/2603.25958)