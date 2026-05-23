---
title: "Discrete Stochastic Localization for Non-autoregressive Generation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.16169"
author: "Yunshu Wu, Jiayi Cheng, Longxuan Yu, Partha Thakuria, Rob Brekelmans, Evangelos E. Papalexakis, Greg Ver Steeg"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2602.16169v2 Announce Type: replace Abstract: Continuous diffusion is a natural framework for non-autoregressive generation but has generally lagged behind masked discrete diffusion models (MDMs) on discrete sequence generation. We argue that the bottleneck is not continuity itself, but a representation in which denoising depends on timestep-indexed noise regimes. We introduce \emph{Discrete Stochastic Localization} (DSL), a continuous-state framework with unit-sphere token embeddings whose Bayes-optimal denoiser is invariant to the nominal signal-to-noise ratio (SNR) under the localization channel. One trained network then supports an entire family of per-token SNR paths, with endpoint masked-diffusion paths as a special case. Fine-tuning a pretrained MDLM checkpoint with DSL substantially improves distributional faithfulness (MAUVE) on OpenWebText across all step budgets from $T{=}128$ to $T{=}1024$, and the same checkpoint supports random-order autoregressive sampling, as well as a hybrid continuous-then-discrete sampler using as few as T=48 total steps -- without distillation or retraining.

---

📖 [Read original article](https://arxiv.org/abs/2602.16169)