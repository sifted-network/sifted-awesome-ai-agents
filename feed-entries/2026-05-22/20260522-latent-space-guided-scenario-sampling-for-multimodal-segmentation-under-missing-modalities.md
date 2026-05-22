---
title: "Latent Space Guided Scenario Sampling for Multimodal Segmentation Under Missing Modalities"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20372"
author: "Irem Ulku, \\\"O. \\\"Ozg\\\"ur Tanr{\\i}\\\"over, Erdem Akag\\\"und\\\"uz"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20372v1 Announce Type: cross Abstract: Multimodal semantic segmentation benefits remote sensing analysis by combining complementary information from different sensor modalities. In real-world remote sensing applications, one or more modalities may be unavailable due to sensor failures, adverse atmospheric conditions, or data acquisition problems. Even with pretrained multimodal representations and existing fine-tuning or adaptation strategies, performance may remain limited because all modality availability scenarios are typically treated as equally informative during training. In this paper, we propose a novel training strategy that learns a scenario sampling distribution directly from the pretrained latent space. Instead of relying on uniform random modality dropout, the proposed method guides fine-tuning toward more informative modality availability scenarios. More specifically, we quantify the effect of each scenario independently based on the distortion it induces in the shared latent representation. We then capture scenario relations using a radial basis function kernel and derive refined scenario scores through a regularized kernel smoothing. These scores are then converted into a probability distribution during scenario sampling for fine-tuning. We evaluate this strategy on three remote sensing image sets, namely DSTL, Potsdam, and Hunan, using CBC-SLP, CBC, and CMX backbones. The experimental results with different image sets and backbones show that our method outperforms standard fine-tuning and LoRA-based adaptation. These findings suggest that the pretrained latent representation can serve as an effective basis for sampling during missing modality fine-tuning. Code is available at https://github.com/iremulku/Latent-Space-Guided-Scenario-Sampling

---

📖 [Read original article](https://arxiv.org/abs/2605.20372)