---
title: "Three Costs of Amortizing Gaussian Process Inference with Neural Processes"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21798"
author: "Robin Young"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2605.21798v1 Announce Type: new Abstract: Neural processes amortize Gaussian process inference, replacing the exact $O(n^3)$ posterior with a learned $O(n)$ map from context sets to predictive distributions. For a class of latent neural processes, we bound the Kullback--Leibler (KL) divergence between the GP and LNP predictives, decomposing it into three interpretable sources, namely label contamination as the neural process uses label values to estimate a quantity that is label-independent in the exact GP, an information bottleneck because the finite-dimensional representation cannot resolve the full context geometry, and amortization error from a single encoder network shared across all contexts. The bottleneck truncation term decays in the representation dimension $d$ as $O(e^{-cd^{2/d_x}})$ for squared-exponential kernels on $\mathbb{R}^{d_x}$ where $c > 0$ is a kernel-dependent constant and as $O(d^{-2\nu/d_x})$ for Mat\'ern-$\nu$ kernels, directly linking architecture sizing to kernel smoothness and input dimension. The label contamination term is $O(1)$ in general, with only the observation-noise component decaying as $O(1/n)$, identifying a persistent cost of routing uncertainty estimation through a label-dependent representation. These results characterize the costs of amortization within the analyzed class and yield architectural recommendations to predict variance from context locations alone in the GP-amortization regime, and replace mean aggregation with second-order pooling to close the dominant amortization gap.

---

📖 [Read original article](https://arxiv.org/abs/2605.21798)