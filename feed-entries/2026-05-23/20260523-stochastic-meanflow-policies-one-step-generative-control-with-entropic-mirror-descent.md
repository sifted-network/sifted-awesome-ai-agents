---
title: "Stochastic MeanFlow Policies: One-Step Generative Control with Entropic Mirror Descent"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21282"
author: "Zeyuan Wang, Da Li, Yulin Chen, Yuehu Gong, Yanming Guo, Ye Shi, Liang Bai, Tianyuan Yu, Yanwei Fu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21282v2 Announce Type: replace-cross Abstract: Online off-policy reinforcement learning (RL) is shaped by two coupled choices: the policy class and the update rule. Gaussian policies are fast and have tractable entropy, but struggle with multimodal action distributions. Generative policies are more expressive, but often require iterative sampling or lack tractable entropy estimates. On the optimisation side, SAC-style soft policy improvement and mirror descent (MD) can be viewed as minimising different KL divergences: the former moves the policy towards a value-induced Boltzmann distribution, while the latter regularises each update against the previous policy. Combining entropy regularisation with an MD constraint is therefore attractive, as it supports exploration while stabilising policy improvement; however, the resulting target can be multimodal and is poorly matched by unimodal Gaussian policies. We propose Stochastic MeanFlow Policies (SMFP), a one-step generative policy class that maps Gaussian noise to actions through a MeanFlow transformation. This stochastic reparameterisation yields a tractable entropy surrogate and allows MeanFlow policies to be trained within off-policy mirror descent under a unified objective for exploratory yet stable improvement. Across seven MuJoCo benchmarks, SMFP improves over Gaussian and generative baselines while retaining single-step inference efficiency.

---

📖 [Read original article](https://arxiv.org/abs/2605.21282)