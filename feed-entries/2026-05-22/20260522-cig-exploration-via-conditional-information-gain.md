---
title: "CIG: Exploration via Conditional Information Gain"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20878"
author: "Tim Joseph, Marcus Fechner, Philipp Stegmaier, Karam Daaboul, J. Marius Z\\\"ollner"
categories: ["cs.LG"]
---

arXiv:2605.20878v1 Announce Type: new Abstract: Intrinsic rewards for exploration in reinforcement learning condition on different contexts: lifelong rewards score each transition against accumulated experience but ignore within-rollout redundancy; episodic rewards penalize intra-trajectory repetition but discard lifetime progress. Hybrid methods combine both signals through heuristic weights or require Gaussian-process dynamics that do not scale beyond low-dimensional state spaces. Trajectory-level information gain decomposes into per-step terms that condition on the replay buffer and rollout prefix simultaneously, but remains intractable for deep models. We derive the Conditional Information Gain (CIG) reward as a tractable surrogate: a log-determinant objective over an ensemble disagreement kernel whose Cholesky factorization yields causal per-step rewards that retain both conditioning sets while scaling to high-dimensional state spaces. We instantiate CIG in a model-based setting, where rollouts are short and within-rollout corrections remain largely unexplored. Across twelve tasks spanning discrete (MiniGrid) and continuous control (OGBench), in both clean and stochastic-distractor settings, CIG outperforms or matches prior exploration methods while remaining robust to stochastic distractors.

---

📖 [Read original article](https://arxiv.org/abs/2605.20878)