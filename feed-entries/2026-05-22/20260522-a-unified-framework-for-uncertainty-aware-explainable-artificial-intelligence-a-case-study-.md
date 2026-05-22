---
title: "A Unified Framework for Uncertainty-Aware Explainable Artificial Intelligence: A Case Study in Power Quality Disturbance Classification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21114"
author: "Yinsong Chen, Samson S. Yu, Zhong Li, Chee Peng Lim"
categories: ["cs.LG"]
---

arXiv:2605.21114v1 Announce Type: new Abstract: Post-hoc explainable AI (XAI) methods typically produce deterministic attribution maps, whereas Bayesian neural networks (BNNs) induce a distribution over explanations. Capturing the variability of this distribution is important for uncertainty-aware decision-making. This paper formalises the \emph{explanation distribution} as the push-forward measure of the BNN posterior through any Lipschitz-continuous attribution operator. It further proposes the uncertainty-aware relevance attribution operator (UA-RAO), a general family of operators that summarises the explanation distribution using the mean, variance, coefficient of variation, quantiles, and set-theoretic aggregation measures. Theoretical support is provided through Monte Carlo accessibility and Wasserstein approximation bounds. The framework is evaluated on a 15-class power quality disturbance (PQD) classification benchmark, comparing three BNN approximations paired with three attribution operators using relevance mass accuracy and intersection-over-union as localisation metrics. Results show that deep ensembles with the mean UA-RAO improve localisation over the deterministic baseline, while other UA-RAO summaries reveal uncertainty patterns absent from point-estimate attributions. Qualitative results on measured signals further suggest that these patterns generalise beyond the synthetic training distribution. The framework is domain-agnostic and can be applied to any BNN paired with a Lipschitz-continuous attribution operator.

---

📖 [Read original article](https://arxiv.org/abs/2605.21114)