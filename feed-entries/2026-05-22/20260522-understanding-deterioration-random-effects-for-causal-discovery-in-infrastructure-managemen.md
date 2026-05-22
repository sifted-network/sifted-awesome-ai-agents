---
title: "Understanding Deterioration Random Effects for Causal Discovery in Infrastructure Management"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20400"
author: "Takato Yasuno"
categories: ["stat.AP", "cs.LG", "stat.ML"]
---

arXiv:2605.20400v1 Announce Type: cross Abstract: Infrastructure deterioration poses significant challenges for asset management, yet existing approaches rely on population-averaged models that overlook equipment-specific heterogeneity. We present a novel framework that combines Bayesian hierarchical hazard modeling with causal discovery to identify operational patterns that drive heterogeneous deterioration rates in pump equipment. Our approach first estimates pump-specific random effects $u_i$ using GPU-accelerated No-U-Turn Sampling (NUTS), achieving 3--5$\times$ speedup over CPU implementations. We then employ DirectLiNGAM to discover causal relationships between 22 engineered time-series features and deterioration rates, stratified by positive ($u_i > 0$, faster deterioration) versus negative ($u_i \leq 0$, slower deterioration) random effects. Analyzing 112 pumps with 92,861 observations over 650 days, we uncover striking heterogeneity: the negative group exhibits causal effects 400$\times$ larger than the positive group, with standard deviation (std) showing a strong positive causal effect ($+1.515$) on deterioration rates in low-risk equipment. We validate linearity assumptions through NonlinearLiNGAM comparison and demonstrate practical scalability through GPU acceleration. Our findings enable targeted maintenance strategies by revealing that different operational regimes require fundamentally distinct management approaches, advancing predictive maintenance from population-averaged to heterogeneity-aware decision making.

---

📖 [Read original article](https://arxiv.org/abs/2605.20400)