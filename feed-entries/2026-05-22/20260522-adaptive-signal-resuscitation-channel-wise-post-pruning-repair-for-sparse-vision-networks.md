---
title: "Adaptive Signal Resuscitation: Channel-wise Post-Pruning Repair for Sparse Vision Networks"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21426"
author: "Qishi Zhan, Ziheng Chen, Minxuan Hu"
categories: ["cs.LG"]
---

arXiv:2605.21426v1 Announce Type: new Abstract: One-shot magnitude pruning can cause severe accuracy collapse in the high-sparsity regime, even when the pruning mask preserves the largest weights. We argue that this failure reflects a granularity mismatch in post-pruning repair. Under global magnitude pruning, nearly collapsed channels can coexist with channels that retain informative activation variance within the same layer. Existing layer-wise activation repair methods apply a single correction to the whole layer, and can therefore over-amplify damaged channels while trying to restore the layer-level signal. We propose Adaptive Signal Resuscitation (ASR), a training-free channel-wise repair method that matches the granularity of repair to the granularity of damage. ASR estimates a variance-matching correction for each output channel and stabilizes it with a data-driven shrinkage rule, suppressing unreliable corrections for channels with weak post-pruning signal while preserving corrections for healthier channels. Applied before BatchNorm recalibration, ASR requires only forward passes on a small calibration set and no retraining. Across three datasets, four convolutional architectures, and both unstructured and structured sparsity settings, ASR generally improves over layer-wise repair, with the clearest gains in high-sparsity regimes. On ResNet-50 at 90% sparsity, ASR recovers 55.6% top-1 accuracy on CIFAR-10, compared with 41.0% for layer-wise repair and 28.0% for BatchNorm-only recalibration. Ablations show that naive channel-wise variance matching is insufficient, and that shrinkage stabilizes post-pruning repair.

---

📖 [Read original article](https://arxiv.org/abs/2605.21426)