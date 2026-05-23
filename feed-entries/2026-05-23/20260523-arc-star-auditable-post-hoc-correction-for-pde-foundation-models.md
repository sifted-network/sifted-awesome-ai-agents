---
title: "ARC-STAR: Auditable Post-Hoc Correction for PDE Foundation Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22222"
author: "Chengze Li, Lingwei Wei, Li Sun, Hongbo Lv, Jie Yang, Hongrong Zhang, Kening Zheng, Wei-Chieh Huang, Enze Ma, Philip S. Yu"
categories: ["cs.LG"]
---

arXiv:2605.22222v1 Announce Type: new Abstract: Partial differential equation (PDE) foundation models are pretrained networks that forecast how physical fields like velocity and pressure evolve from a single reusable solver. On unfamiliar flows their predictions drift step by step, errors concentrate in a few regions, yet retraining destabilizes the network and uniform post-hoc correction overlooks this spatial concentration. To address this, we propose a frozen-solver post-hoc correction framework, Adaptive Risk-Calibrated Spatial Triage for Auditable Refinement (ARC-STAR). ARC-STAR organizes correction into three stages: a global corrector removes broad solver bias, a blockwise local refiner cleans the post-global residual, and, at deployment, a label-free score routes refinement to high-risk blocks under a compute budget. The framework is designed to be (i) frozen-host, preserving the pretrained solver without fine-tuning; (ii) auditable, with global and local stages trained and evaluated separately for measurable contributions; and (iii) budget-aware, using a blockwise interface that either refines the full field or routes limited compute to high-risk regions. Across five flow benchmarks spanning ten regime cells, ARC-STAR is the only method that cuts velocity rollout error by at least 36x over raw Poseidon on every cell. The global stage reduces raw host error by 91-99%, and the local stage further reduces the remaining post-global residual by up to 94.4%. Our code implementation is available at https://anonymous.4open.science/r/arc_star.

---

📖 [Read original article](https://arxiv.org/abs/2605.22222)