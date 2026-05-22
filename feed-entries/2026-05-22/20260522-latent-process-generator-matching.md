---
title: "Latent Process Generator Matching"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20547"
author: "Lukas Billera, Hedwig Nora Nordlinder, Ben Murrell"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.20547v1 Announce Type: cross Abstract: Many recent flow-matching and diffusion-style generative models rely on auxiliary stochastic dynamics during training: a richer process is simulated to define conditional targets, but the auxiliary state is either intractable to sample at generation time or simply not part of the desired output. Existing Generator Matching theory formalises conditioning on static latent random variables, and several recent papers prove special cases of projection results for particular augmented-state constructions. We introduce latent process generator matching, a general framework that treats the observed generative state as a deterministic image $X_t=\Phi(Y_t)$ of a tractable Markov process $Y_t$. We show that in this setting one may learn the generator of a stochastic process on the image space which has the same one-time marginal distributions as the projected process. This generalizes and subsumes the discrete latent process results from the literature, and extends Generator Matching from static latent variables to a rich family of time-dependent latent conditional processes.

---

📖 [Read original article](https://arxiv.org/abs/2605.20547)