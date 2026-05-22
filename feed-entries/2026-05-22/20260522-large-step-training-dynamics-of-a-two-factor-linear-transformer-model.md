---
title: "Large-Step Training Dynamics of a Two-Factor Linear Transformer Model"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21292"
author: "Krishnakumar Balasubramanian"
categories: ["stat.ML", "cs.AI", "cs.LG", "math.DS"]
---

arXiv:2605.21292v1 Announce Type: cross Abstract: Gradient-flow analyses show that simplified linear transformers can learn the in-context linear-regression algorithm, but they do not explain the finite-step behavior of gradient descent at large learning rates. Motivated by empirical work on high-learning-rate transformer instabilities and by the cubic-map phase diagram for quadratic regression, we study an exactly reducible one-prompt linear-transformer training problem. After normalization, the dynamics reduce to a two-factor product map with an effective step-size parameter \(\mu\). On the balanced slice, this map recovers the known scalar cubic transition from monotone convergence to catapult convergence, periodic and chaotic bounded nonconvergence, and divergence. We then analyze the full two-dimensional system and show that, for \(0<\mu<2\), it has an explicit invariant Chebyshev ellipse separating forward-invariant regions; this ellipse carries off-balanced chaotic dynamics but is transversely repelling, while balanced scalar attractors can be transversely attracting. These results show that large constant learning rates can change the training attractor of the learned transformer rather than merely accelerating convergence: beyond sharp stability thresholds, finite-step training may settle into cycles, bounded chaos, or divergence instead of a single in-context linear-regression solution. We also discuss the consequences for mini-batch gradient descent based training methods.

---

📖 [Read original article](https://arxiv.org/abs/2605.21292)