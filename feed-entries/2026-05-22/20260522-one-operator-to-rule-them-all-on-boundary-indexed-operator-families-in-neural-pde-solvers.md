---
title: "One Operator to Rule Them All? On Boundary-Indexed Operator Families in Neural PDE Solvers"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.01406"
author: "Lennon J. Shikhman"
categories: ["cs.LG", "cs.AI", "cs.NA", "math.NA"]
---

arXiv:2603.01406v2 Announce Type: replace-cross Abstract: Neural PDE solvers are often described as learning solution operators that map problem data to PDE solutions. In this work, we argue that this interpretation is generally incorrect when boundary conditions vary. We show that standard neural operator training implicitly learns a boundary-indexed family of operators, rather than a single boundary-agnostic operator, with the learned mapping fundamentally conditioned on the boundary-condition distribution seen during training. We formalize this perspective by framing operator learning as conditional risk minimization over boundary conditions, which leads to a non-identifiability result outside the support of the training boundary distribution. As a consequence, generalization in forcing terms or resolution does not imply generalization across boundary conditions. We support our theoretical analysis with controlled experiments on the Poisson equation, demonstrating sharp degradation under boundary-condition shifts, cross-distribution failures between distinct boundary ensembles, and convergence to conditional expectations when boundary information is removed. Our results clarify a core limitation of current neural PDE solvers and highlight the need for explicit boundary-aware modeling in the pursuit of foundation models for PDEs.

---

📖 [Read original article](https://arxiv.org/abs/2603.01406)