---
title: "Transporting Task Vectors across Different Architectures without Training"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.12952"
author: "Filippo Rinaldi, Aniello Panariello, Giacomo Salici, Angelo Porrello, Simone Calderara"
categories: ["cs.LG", "cs.AI", "cs.CV"]
---

arXiv:2602.12952v2 Announce Type: replace-cross Abstract: Adapting large pre-trained models to downstream tasks often produces task-specific parameter updates that are expensive to relearn for every model variant. While recent work has shown that such updates can be transferred between models with identical architectures, transferring them across models of different widths remains unexplored. In this work, we introduce Theseus, a training-free method for transporting task updates across heterogeneous-width models. Rather than matching parameters, we characterize a task update by the functional effect it induces on intermediate representations. We formalize task-vector transport as a functional matching problem on observed activations and show that, after aligning representation spaces via orthogonal Procrustes analysis, it admits a stable closed-form solution that preserves the geometry of the update. We evaluate Theseus on vision and language models across different widths, showing consistent improvements over baselines without additional training or backpropagation. Our results show that task updates can be meaningfully transferred across architectures when task identity is defined functionally rather than parametrically. Code is available at https://github.com/apanariello4/merge-and-rebase.

---

📖 [Read original article](https://arxiv.org/abs/2602.12952)