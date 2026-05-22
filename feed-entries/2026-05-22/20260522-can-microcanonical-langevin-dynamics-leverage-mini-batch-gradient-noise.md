---
title: "Can Microcanonical Langevin Dynamics Leverage Mini-Batch Gradient Noise?"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.06500"
author: "Emanuel Sommer, Kangning Diao, Jakob Robnik, Uros Seljak, David R\\\"ugamer"
categories: ["cs.LG"]
---

arXiv:2602.06500v2 Announce Type: replace Abstract: Scaling inference methods such as Markov chain Monte Carlo to high-dimensional models remains a central challenge in Bayesian deep learning. A promising recent proposal, microcanonical Langevin Monte Carlo, has shown state-of-the-art performance across a wide range of problems. However, its reliance on full-dataset gradients makes it prohibitively expensive for large-scale problems. This paper addresses a fundamental question: Can microcanonical dynamics effectively leverage mini-batch gradient noise? We provide the first systematic study of this problem, establishing a novel continuous-time theoretical analysis of stochastic-gradient microcanonical dynamics. We reveal two critical failure modes: a theoretically derived bias due to anisotropic gradient noise and numerical instabilities in complex high-dimensional posteriors. To tackle these issues, we propose a principled gradient noise preconditioning scheme shown to significantly reduce this bias and develop a novel, energy-variance-based adaptive tuner that automates step size selection and dynamically informs numerical guardrails. The resulting algorithm is a robust and scalable microcanonical Monte Carlo sampler that achieves state-of-the-art performance on challenging high-dimensional inference tasks like Bayesian neural networks. Combined with recent ensemble techniques, our work unlocks a new class of stochastic microcanonical Langevin ensemble (SMILE) samplers for large-scale Bayesian inference.

---

📖 [Read original article](https://arxiv.org/abs/2602.06500)