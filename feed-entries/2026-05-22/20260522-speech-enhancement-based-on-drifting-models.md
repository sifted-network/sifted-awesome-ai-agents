---
title: "Speech Enhancement Based on Drifting Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.24199"
author: "Liang Xu, Diego Caviedes-Nozal, W. Bastiaan Kleijn, Longfei Felix Yan, Rasmus Kongsgaard Olsson"
categories: ["cs.SD", "cs.AI", "eess.AS", "eess.SP"]
---

arXiv:2604.24199v3 Announce Type: replace-cross Abstract: We propose Speech Enhancement based on Drifting Models (DriftSE), a novel generative framework that formulates denoising as an equilibrium problem. Rather than relying on iterative sampling, DriftSE natively achieves one-step inference by evolving the pushforward distribution of a mapping function to directly match the clean speech distribution. This evolution is driven by a Drifting Field, a learned correction vector that guides samples toward the high-density regions of the clean distribution, which naturally facilitates training on unpaired data by matching distributions rather than paired samples. We investigate the framework under two formulations: a direct mapping from the noisy observation, and a stochastic conditional generative model from a Gaussian prior. Experiments on the VoiceBank-DEMAND benchmark demonstrate that DriftSE achieves high-fidelity enhancement in a single step, outperforming multi-step diffusion baselines and establishing a new paradigm for speech enhancement.

---

📖 [Read original article](https://arxiv.org/abs/2604.24199)