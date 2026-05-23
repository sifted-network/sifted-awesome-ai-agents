---
title: "Adaptive Measurement Allocation for Learning Kernelized SVMs Under Noisy Observations"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22275"
author: "Artur Miroszewski"
categories: ["cs.LG"]
---

arXiv:2605.22275v1 Announce Type: new Abstract: Kernel methods are typically formulated under the assumption of exact, noise-free access to the Gram matrix. However, in emerging settings such as quantum machine learning, each kernel entry must be inferred from noisy observations, and its accuracy depends on how a limited measurement budget is allocated. Despite this, existing approaches overwhelmingly rely on uniform allocation, which equalizes estimator variance but ignores the highly non-uniform dependence of kernelized classifiers on the Gram matrix. In this work, we introduce an adaptive measurement-allocation strategy for learning kernelized Support Vector Machines (SVMs) from noisy Bernoulli observations. Our approach combines two complementary principles: (i) geometric sensitivity, capturing how perturbations of individual kernel entries affect the classifier margin, and (ii) active-set instability, quantifying the probability of discrete changes in support-vector membership induced by measurement noise. These signals define a task-aware allocation scheme that concentrates measurements on the most decision-critical regions of the kernel matrix. We provide a theoretical analysis showing that the benefit of adaptive allocation is governed by the heterogeneity of the induced kernel importance structure, leading to distinct regimes in which adaptive or uniform strategies are preferable. Empirical evaluations on synthetic datasets demonstrate that adaptive allocation significantly improves support-vector recovery, margin estimation, and decision-function accuracy under fixed measurement budgets. A dual-coefficient stability criterion further enables early stopping, achieving near-optimal performance while using only a fraction of the measurement cost. Additional experiments on quantum kernels derived from real-world data reveal a regime-dependent behavior aligned with known phenomena such as kernel concentration. Together...

---

📖 [Read original article](https://arxiv.org/abs/2605.22275)