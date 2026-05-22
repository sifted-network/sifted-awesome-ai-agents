---
title: "Learning to Defer in Non-Stationary Time Series via Switching State-Space Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.22538"
author: "Yannis Montreuil, Letian Yu, Axel Carlier, Lai Xing Ng, Wei Tsang Ooi"
categories: ["cs.LG", "stat.AP"]
---

arXiv:2601.22538v2 Announce Type: replace Abstract: Learning-to-defer (L2D) routes each decision to a system's own predictor or to an external expert. Streaming time-series settings break the offline-L2D assumptions: the data are non-stationary, expert availability shifts over time, and the internal predictor is trained online. We propose L2D-SLDS, a one-stage online L2D framework based on a factorized switching linear-Gaussian state-space model over all potential residuals: a discrete regime, a shared global factor, and per-expert idiosyncratic states. The always-observed internal residual continuously updates beliefs about every unqueried expert through the shared factor, and a learner-aware query score balances immediate cost against latent-state information gain and one-step learner improvement. We prove an oracle inequality against a time-varying learn-and-defer comparator, decomposing regret into a query-bonus budget, an SLDS predictive-cost-error term~$\mathcal{E}_{\mathrm{SLDS}}$, and the internal learner's interval dynamic regret. On synthetic, Melbourne, Jena, and 24-expert Delhi benchmarks, L2D-SLDS is competitive with or improves on contextual- and non-stationary-bandit baselines while deferring on ${<}2\%$ of real-data rounds.

---

📖 [Read original article](https://arxiv.org/abs/2601.22538)