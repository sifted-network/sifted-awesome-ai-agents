---
title: "Memorisation, convergence and generalisation in generative models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21402"
author: "Antoine Maillard, Sebastian Goldt"
categories: ["stat.ML", "cond-mat.dis-nn", "cond-mat.stat-mech", "cs.LG"]
---

arXiv:2605.21402v1 Announce Type: cross Abstract: Generative neural networks learn how to produce highly realistic images from a large, but finite number of examples - or do they simply memorise their training set? To settle this question, Kadkhodaie, Guth, Simoncelli and Mallat (ICLR '24) trained diffusion models independently on disjoint subsets of a dataset and showed that they converge to nearly the same density when the number of training images is large enough. This result raises two basic questions: how much data do you need for convergence, and what does convergence capture about learning the data distribution? Here, we address these questions by providing an exact analytical characterisation of the transition from memorisation to generalisation in linear generative models. We find that these models memorise at small load, while convergence emerges continuously when the number of samples is linear in the input dimension. Strikingly, we find that convergence is insensitive to recovery of the principal latent factors of the data, which are recovered in a sharp transition. After extending our approach to data with power-law spectra, we find the same distinction between convergence and latent recovery in our experiments with convolutional denoisers and in the data of Kadkhodaie et al. We thus show that generalisation in generative models decomposes into at least two distinct objectives: matching the bulk of the data distribution and recovering the principal latent factors. These objectives correspond to two different distances between true and learnt data distribution, and only the first one is captured by convergence.

---

📖 [Read original article](https://arxiv.org/abs/2605.21402)