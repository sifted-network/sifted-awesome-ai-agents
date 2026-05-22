---
title: "Pareto-Enhanced Portrait Generation: Vision-Aligned Text Supervision for Alignment, Realism, and Aesthetics"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20640"
author: "Yunlong Wang, Jinjin Shi, Wenbin Gao, Xuran Xu, Runyu Shi, Ying Huang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20640v1 Announce Type: cross Abstract: Text-to-image diffusion models often face a severe trilemma in human portrait generation: text-image alignment, photorealism, and human-perceived aesthetics inherently inhibit one another. Supervised Fine-Tuning (SFT) is an effective method for enhancing the photorealism of image generation. However, it often leads to overfitting to the training dataset, corrupts pre-trained image priors, and degrades alignment or aesthetics. To break this bottleneck, we propose a feature supervision paradigm for Multimodal Diffusion Transformers (MM-DiT). Specifically, we introduce a lightweight cross-modal alignment mechanism that implicitly extracts multi-granularity vision-aligned text representations from SigLIP 2 and applies supervision to the image branch of MM-DiT during the training stage, with zero extra inference overhead. Our method injects vision-aligned text guidance while preserving the base model's original generalization, avoiding degradation caused by SFT. Furthermore, our method directly mines implicit multi-granularity aesthetic signals from pre-trained vision foundation models to optimize human-perceived aesthetics. Extensive experiments on MM-DiTs show that our method pushes the Pareto frontier and achieves synergistic improvements across text-image alignment, photorealism, and human-perceived aesthetics.

---

📖 [Read original article](https://arxiv.org/abs/2605.20640)