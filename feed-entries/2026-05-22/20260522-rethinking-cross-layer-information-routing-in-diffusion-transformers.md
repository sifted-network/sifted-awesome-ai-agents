---
title: "Rethinking Cross-Layer Information Routing in Diffusion Transformers"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20708"
author: "Chao Xu, Maohua Li, Qirui Li, Yixuan Xu, Yanke Zhou, Yunhe Li, Cuifeng Shen, Hanlin Tang, Kan Liu, Tao Lan, Lin Qu, Shao-Qun Zhang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20708v1 Announce Type: cross Abstract: Diffusion Transformers (DiTs) have become a de facto backbone of modern visual generation, and nearly every major axis of their design -- tokenization, attention, conditioning, objectives, and latent autoencoders -- has been extensively revisited. The residual stream that governs how information accumulates across layers, however, has been directly inherited from the original Transformer. In this paper, we present a systematic empirical analysis of cross-layer information flow in DiTs, jointly along depth and denoising timestep, and identify three concrete symptoms of traditional residual addition, namely monotonic forward magnitude inflation, sharp backward gradient decay, and pronounced block-wise redundancy. Motivated by this diagnosis, we propose Diffusion-Adaptive Routing (\textsc{DAR}), a drop-in residual replacement that performs \emph{learnable, timestep-adaptive, and non-incremental} aggregation over the history of sublayer outputs. Moreover, the proposed \textsc{DAR} is compatible with many modern Transformer enhancement methods, such as REPA. On ImageNet $256\times256$, \textsc{DAR} improves SiT-XL/2 by $2.11$ FID ($7.56$ vs.\ $9.67$) and matches the baseline's converged quality with $8.75\times$ fewer training iterations. Stacked on top of REPA, it yields a $2\times$ training acceleration in the early stage, suggesting cross-layer information routing as an underexplored design axis in diffusion modeling, one that operates orthogonally to existing representation-alignment objectives. Beyond pretraining, \textsc{DAR} can also be applied during the fine-tuning stage of large-scale T2I models and preserves high-frequency details during Distribution Matching Distillation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20708)