---
title: "Provably Learning Diffusion Models under the Manifold Hypothesis: Collapse and Refine"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20235"
author: "Wei Huang, Andi Han, Mingyuan Bai, Huanjian Zhou, Qixin Zhang, Taiji Suzuki, Kenji Fukumizu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20235v1 Announce Type: new Abstract: Diffusion models generate high-dimensional data with remarkable quality, yet how their training efficiently learns the score function, bypassing the curse of dimensionality when data is supported on low-dimensional manifolds, remains theoretically unexplained. We identify a collapse-and-refine mechanism driven by the geometry of the score function itself: at small noise scales, the diverging singularity of the score drives a rapid dimensional collapse of the induced denoising map onto the data manifold projection; at moderate noise scales, training refines the intrinsic density on the learned manifold. We instantiate this principle as Score-induced Latent Diffusion (SiLD), a two-stage framework in which both manifold learning and density estimation emerge from a single denoising score matching objective, replacing the heuristic KL regularization of VAE-based latent diffusion models. We prove that the resulting sample complexity depends on the intrinsic dimension rather than the ambient dimension. Experiments on Stacked MNIST, CelebA variants, and molecular generation benchmarks show that SiLD matches or outperforms VAE-based LDMs in generation quality and consistently improves reconstruction, validating our theoretical predictions.

---

📖 [Read original article](https://arxiv.org/abs/2605.20235)