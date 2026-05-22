---
title: "Symmetrization of Loss Functions for Robust Training of Neural Networks in the Presence of Noisy Labels"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20347"
author: "Alexandre Lemire Paquin, Brahim Chaib-Draa, Philippe Gigu\\`ere"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2605.20347v1 Announce Type: new Abstract: Labeling a training set is often expensive and susceptible to errors, making the design of robust loss functions for label noise an important problem. The symmetry condition provides theoretical guarantees for robustness to such noise. In this work, we study a symmetrization method arising from the unique decomposition of any multi-class loss function into a symmetric component and a class-insensitive term. In particular, symmetrizing the cross-entropy loss leads to a linear multi-class extension of the unhinged loss. Unlike in the binary case, the multi-class version must have specific coefficients in order to satisfy the symmetry condition. Under suitable assumptions, we show that this multi-class unhinged loss is the unique convex multi-class symmetric loss. We also show that it has a fundamental local role: the linear approximation of any symmetric loss around score vectors with equal components is equivalent to the multi-class unhinged loss. We then introduce SGCE and alpha-MAE, two loss functions that interpolate between the multi-class unhinged loss and the Mean Absolute Error while allowing control of the beta-smoothness of the loss. Experiments on standard noisy-label benchmarks show competitive performance compared with existing robust loss functions.

---

📖 [Read original article](https://arxiv.org/abs/2605.20347)