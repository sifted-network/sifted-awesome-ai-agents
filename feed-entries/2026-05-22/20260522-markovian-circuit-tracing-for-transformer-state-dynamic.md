---
title: "Markovian Circuit Tracing for Transformer State Dynamic"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20824"
author: "Abdullah X"
categories: ["cs.LG"]
---

arXiv:2605.20824v1 Announce Type: new Abstract: Many sequence computations are easier to study as movement through internal states than as isolated local circuits. We introduce Markovian Circuit Tracing (MCT), a diagnostic pipeline for testing whether transformer activations contain coarse state-transition structure. The benchmark uses synthetic Hidden Markov Model (HMM) tasks where latent states, transition matrices, Bayesian belief vectors, Bayes-optimal predictions, and forced-state counterfactual targets are known exactly. Across six HMM families and three seeds per family, tiny causal transformers learn near-Bayes next-token predictors, with mean excess loss over Bayes of 0.0138. Residual activations contain partial Bayesian belief information in this controlled synthetic benchmark. State abstractions extracted from these activations recover coarse transition signal, strongest in persistent and lower-state regimes, and weaker in ambiguous-emission and six-state regimes. The clearest result comes from state forcing. Patching a recovered-state centroid reduces KL to the exact HMM counterfactual target from 0.1957 in the unpatched model to 0.0532 on average, beating wrong-state, mean-activation, random-activation, and shuffled-label controls. The contribution is a controlled benchmark and evaluation framework for transformer state-dynamics interpretability, with MCT as a simple reference pipeline

---

📖 [Read original article](https://arxiv.org/abs/2605.20824)