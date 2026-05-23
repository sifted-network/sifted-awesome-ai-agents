---
title: "Richer Bayesian Last Layers with Subsampled NTK Features"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.01279"
author: "Sergio Calvo-Ordo\\~nez, Jonathan Plenk, Richard Bergna, \\'Alvaro Cartea, Yarin Gal, Jose Miguel Hern\\'andez-Lobato, Kamil Ciosek"
categories: ["cs.LG"]
---

arXiv:2602.01279v2 Announce Type: replace Abstract: Bayesian Last Layers (BLLs) provide a convenient and computationally efficient way to estimate uncertainty in neural networks. However, they underestimate epistemic uncertainty because they apply a Bayesian treatment only to the final layer, ignoring uncertainty induced by earlier layers. We propose a method that improves BLLs by leveraging a projection of Neural Tangent Kernel (NTK) features onto the space spanned by the last-layer features. This enables posterior inference that accounts for variability of the full network while retaining the low computational cost of inference of a standard BLL. We show that our method yields posterior variances that are provably greater or equal to those of a standard BLL, correcting its tendency to underestimate epistemic uncertainty. To further reduce computational cost, we introduce a uniform subsampling scheme for estimating the projection matrix and for posterior inference. We derive approximation bounds for both types of subsampling. Empirical evaluations on UCI regression, contextual bandits, image classification, and out-of-distribution detection tasks in image and tabular datasets, demonstrate improved calibration and uncertainty estimates compared to standard BLLs and competitive baselines, while reducing computational cost.

---

📖 [Read original article](https://arxiv.org/abs/2602.01279)