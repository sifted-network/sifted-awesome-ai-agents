---
title: "Batched Single-Index Global Multi-Armed Bandits with Covariates"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2503.00565"
author: "Sakshi Arya, Hyebin Song"
categories: ["stat.ML", "cs.LG", "math.ST", "stat.ME", "stat.TH"]
---

arXiv:2503.00565v3 Announce Type: replace-cross Abstract: The multi-armed bandits (MAB) framework is a widely used approach for sequential decision-making, where a decision-maker selects an arm in each round with the goal of maximizing long-term rewards. In many practical applications, such as personalized medicine and recommendation systems, contextual information is available at the time of decision-making, rewards from different arms are related rather than independent, and feedback is provided in batches. We propose a novel semi-parametric framework for batched bandits with covariates that incorporates a shared parameter across arms. We leverage the single-index regression (SIR) model to capture relationships between arm rewards while balancing interpretability and flexibility. Our algorithm, Batched single-Index Dynamic binning and Successive arm elimination (BIDS), employs a batched successive arm elimination strategy with a dynamic binning mechanism guided by the single-index direction. We consider two settings: one where a pilot direction is available and another where the direction is estimated from data, deriving theoretical regret bounds for both cases. When a pilot direction is available with sufficient accuracy and the number of arms $K$ is fixed, our approach achieves minimax-optimal rates (with $d = 1$) for nonparametric batched bandits, circumventing the curse of dimensionality. Extensive experiments on simulated and real-world datasets demonstrate the effectiveness of our algorithm compared to the nonparametric batched bandit method introduced by \cite{jiang2025batched}.

---

📖 [Read original article](https://arxiv.org/abs/2503.00565)