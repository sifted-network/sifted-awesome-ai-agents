---
title: "Causal Discovery from Heteroscedastic Stochastic Dynamical Systems under Imperfect Physical Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.04907"
author: "Jianhong Chen, Naichen Shi, Xubo Yue"
categories: ["cs.LG", "cs.AI", "stat.ME"]
---

arXiv:2602.04907v2 Announce Type: replace-cross Abstract: Causal discovery is a data-driven paradigm for analyzing complex systems, while physics-based models, such as ordinary differential equations (ODEs), provide mechanistic structure for real-world dynamical processes. Integrating these paradigms can improve identifiability, stability, and robustness. However, real dynamical systems often exhibit cyclic interactions and nonstationarity, whereas many causal discovery methods rely on acyclicity, stationarity, or equilibrium assumptions. We propose an integrative causal discovery framework for dynamical systems that leverages partial physical knowledge through stochastic differential equations (SDEs). The drift term encodes known ODE dynamics, while the diffusion term captures unknown causal couplings beyond the prescribed physics. We develop a scalable sparsity-inducing maximum quasi-likelihood estimator with a theoretically justified stabilization technique to improve the optimization landscape. Under mild conditions, we establish causal graph recovery guarantees for both stable and unstable SDEs. We also analyze robustness of our causal graph estimate to ODE misspecification and clarify how the introduced stabilization technique balances numerical stability and statistical recoverability. Experiments on linear SDEs and nonlinear benchmarks, including Lotka-Volterra and Lorenz dynamics with acyclic and cyclic structures, show improved graph recovery and robustness over data-driven baselines. We also demonstrate practical utility on real-world epidemic data by reconstructing stochastic SIR dynamics within our causal discovery framework.

---

📖 [Read original article](https://arxiv.org/abs/2602.04907)