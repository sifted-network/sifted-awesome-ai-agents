---
title: "Physics-Informed Generative Solver: Bridging Data-Driven Priors and Conservation Laws for Stable Spatiotemporal Field Reconstruction"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22338"
author: "Ziyuan Zhu, Keyu Hu, Zhifei Chen, Yuhao Shi, Ming Bao, Jing Zhao, Gang Wang, Haitan Xu, Jiadong Li, Qijun Zhao, Xiaodong Li, Minghui Lu, Yanfeng Chen"
categories: ["cs.LG"]
---

arXiv:2605.22338v1 Announce Type: new Abstract: Reconstructing continuous physical fields from sparse measurements is a central inverse problem, but data-driven generative models can produce states that violate governing dynamics. We introduce a physics-informed generative solver that separates stable prior learning from inference-time enforcement of conservation laws. Martingale-Regularized Score Matching regularizes score pretraining with a Score Fokker-Planck constraint, yielding a dynamically stable prior. Physics-Informed Implicit Score Sampling then guides denoising trajectories by gradients of physical residuals, projecting samples toward admissible manifolds without retraining. In acoustics, the method co-generates pressure and particle velocity from sparse sensors, enabling dense virtual arrays that suppress spatial aliasing. The same framework generalizes to real-world ERA5 meteorological fields under extreme sparsity. Together, this work establishes a rigorous and generalizable paradigm for solving high-dimensional inverse problems, bridging the gap between generative artificial intelligence and first-principles science.

---

📖 [Read original article](https://arxiv.org/abs/2605.22338)