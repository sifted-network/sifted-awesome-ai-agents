---
title: "Jacobian-Guided Anisotropic Noise Reshaping for Enhancing Representation Utility under Local Differential Privacy"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.16812"
author: "Youngmok Ha, Viktor Schlegel, Yidan Sun, Anil Anthony Bharath"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.16812v2 Announce Type: replace Abstract: While Local Differential Privacy (LDP) serves as a foundational primitive for distributed data collection, its stringent noise injection requirement often leads to severe degradation in data utility. This degradation stems from the task-agnostic nature of conventional LDP mechanisms, which inject noise uniformly across all dimensions regardless of their relative importance to the downstream objective. To address this issue, we propose a novel approach that mitigates noise in task-relevant subspaces of the data representation. Our method identifies task-critical subspaces via the Jacobian matrix of the public downstream model, selectively attenuates noise along those dimensions, and reshapes the isotropic noise of standard LDP into an anisotropic distribution. This method preserves the uniform per-dimension privacy budget while heterogeneously modulating noise impact across dimensions, thereby substantially enhancing data utility. Furthermore, our approach generalizes to both linear and non-linear models and integrates seamlessly with existing mechanisms. Extensive experiments on CIFAR-10-C (Brightness corruption at the highest severity level 5) demonstrate that integrating our approach improves the utility of PrivUnit2 and PrivUnitG by approximately 20\% at $\epsilon=7.5$. The source code is available at https://github.com/ymha/jacobian-anr-ldp.

---

📖 [Read original article](https://arxiv.org/abs/2605.16812)