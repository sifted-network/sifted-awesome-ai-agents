---
title: "How Sparsity Allocation Shapes Label-Free Post-Pruning Recoverability"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21972"
author: "Qishi Zhan, Minxuan Hu, Liang He"
categories: ["cs.LG"]
---

arXiv:2605.21972v1 Announce Type: new Abstract: Unstructured magnitude pruning at high sparsity can reduce neural network accuracy to near-random performance, while labeled retraining may be unavailable in practical deployment settings. Label-free post-pruning repair methods can partially recover collapsed sparse models, but their effectiveness depends on the sparse model left by the upstream pruning allocation. This paper studies how sparsity allocation shapes post-repair recoverability under a fixed activation-statistic repair backend. We compare ERK and LAMP allocations under the same label-free repair protocol across CIFAR-10, CIFAR-100, and Imagenette with ResNet-18, ResNet-34, and ResNet-50 at sparsities from 90% to 95.5%. The results show that allocation choice can substantially change post-repair accuracy at the same global sparsity, and that the preferred allocation varies with architecture, dataset difficulty, and sparsity level. We identify a repair-sensitive transition regime in which BatchNorm recalibration begins to fail, while activation-statistic repair still recovers nontrivial accuracy. Additional validation on ImageNet-100 and DenseNet-121 shows that the location and width of this recoverable regime depend on data scale and connectivity structure. These findings suggest that pruning allocation and post-pruning repair should be studied jointly, since the allocation determines how much activation signal remains available for label-free recovery.

---

📖 [Read original article](https://arxiv.org/abs/2605.21972)