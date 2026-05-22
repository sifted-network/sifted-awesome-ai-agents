---
title: "PULSE: Generative Phase Evolution for Non-Stationary Time Series Forecasting"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.16793"
author: "Yangyou Liu, Zezhi Shao, Xinyu Chen, Hu Chen, Fei Wang, Yuankai Wu"
categories: ["cs.LG"]
---

arXiv:2605.16793v2 Announce Type: replace Abstract: Time series forecasting under non-stationarity faces a fundamental tension between capturing stable representations and adapting to distribution shifts. Existing methods implicitly rely on static historical assumptions, leading to a critical failure mode we term Phase Amnesia, where models become blind to the evolving global context. To resolve this, we formalize non-stationary dynamics through three physical hypotheses: wold decomposition, dynamical phase evolution, and heteroscedastic manifold generation. These principles inspire PULSE, a physics-informed, plug-and-play framework adopting a Disentangle--Evolve--Simulate design philosophy. Specifically, PULSE utilizes phase-anchored disentanglement to resolve optimization interference caused by dominant trends, employs a Phase Router to actively generate future trajectories, and introduces Statistic-Aware Mixup (SAM) to ensure robustness against out-of-distribution volatility. Empirically, PULSE enables a simple MLP backbone to achieve state-of-the-art or highly competitive performance across 12 real-world benchmarks. This validates that a correct physics-informed inductive bias is far more critical than raw architectural complexity for non-stationary forecasting. The code is available at: https://github.com/Gemost/PULSE.

---

📖 [Read original article](https://arxiv.org/abs/2605.16793)