---
title: "Why SGD is not Brownian Motion: A New Perspective on Stochastic Dynamics"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22644"
author: "Igor Ignashin, Anna Radovskaya, Andrew Semenov, Egor Lopatin, Stanislav Potapov, Aleksandr Kovalenko, Andrey Veprikov, Aleksandr Shestakov, Andrey Leonidov, Aleksandr Beznosikov"
categories: ["cs.LG"]
---

arXiv:2605.22644v1 Announce Type: new Abstract: Stochastic Gradient Descent (SGD) is commonly modeled as a Langevin process, assuming that minibatch noise acts as Brownian motion. However, this approximation relies on a continuous-time limit and a sqrt(eta) noise scaling that does not match the discrete SGD update at finite learning rate. In this work, we propose an alternative formulation of SGD as deterministic dynamics in a fluctuating loss landscape induced by minibatch sampling. Starting directly from the discrete update, we derive a master equation for the parameter distribution and obtain a discrete Fokker--Planck equation that differs from the standard Langevin form at order eta^2. Using this framework, we analyze SGD dynamics near critical points of the loss. We show that the behavior decomposes along the eigenbasis of the mean Hessian into qualitatively distinct regimes. In particular, nearly-flat directions do not admit a stationary distribution: the variance grows over time, corresponding to effective diffusion along valleys with a coefficient proportional to the learning rate. We provide empirical evidence supporting these predictions on neural network models in computer vision and natural language processing, observing a clear qualitative separation between confined and diffusive modes.

---

📖 [Read original article](https://arxiv.org/abs/2605.22644)