---
title: "Scalable On-Policy Reinforcement Learning via Adaptive Batch Scaling"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21557"
author: "Jongchan Park"
categories: ["stat.ML", "cs.AI", "cs.LG"]
---

arXiv:2605.21557v1 Announce Type: cross Abstract: Conventional wisdom holds that large-batch training is fundamentally incompatible with Reinforcement Learning (RL) - beyond a modest threshold, increasing batch sizes typically yields diminishing returns or performance degradation due to the inherent non-stationarity of the data distribution. We challenge this view by observing that non-stationarity is not a fixed property of RL, but evolves throughout training: early stages exhibit rapid behavioral shifts that demand small batches for plasticity, whereas late stages approach a quasi-stationary regime where large batches enable precise convergence. Motivated by this observation, we propose Adaptive Batch Scaling (ABS), that dynamically adjusts the effective batch size according to the stability of the learning policy. Central to ABS is Behavioral Divergence, a novel metric that quantifies policy non-stationarity by measuring action-level shifts between consecutive updates, which we use to scale batch size inversely to policy volatility. Integrated with the Parallelised Q-Network (PQN) algorithm and evaluated on the ALE benchmark, ABS seamlessly reconciles early-stage plasticity with late-stage stable convergence. Strikingly, contrary to conventional wisdom, our results reveal that the combination of larger networks and larger batch sizes achieves the best performance - a scaling behavior previously thought to be unattainable in RL, now unlocked through adaptive batch control.

---

📖 [Read original article](https://arxiv.org/abs/2605.21557)