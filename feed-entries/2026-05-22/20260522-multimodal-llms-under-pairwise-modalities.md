---
title: "Multimodal LLMs under Pairwise Modalities"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21059"
author: "Yan Li, Yunlong Deng, Yuewen Sun, Gongxu Luo, Kun Zhang, Guangyi Chen"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21059v1 Announce Type: cross Abstract: Despite the impressive results achieved by multimodal large language models (MLLMs), their training typically relies on jointly curated multimodal data, requiring substantial human effort to construct multi-way aligned datasets and thereby limiting scalability across domains. In this work, we explore training MLLMs by only leveraging multiple paired modalities as a surrogate for the full joint multimodal distribution. Specifically, we first provide a theoretical analysis of the conditions under which the representations are identifiable with only observing pairwise modalities. Building on this analysis, we propose a representation learning framework for aligning latent representations across modalities using only pairwise data. The framework consists of two stages: latent representation alignment and cross-modal recomposition. Specifically, in the first stage, we learn the shared latent space across modalities by both self-modal reconstruction and pair-wise contrastive learning. We also incorporate an inductive bias in the contrastive learning process by partially aligning and minimal latent specification. In stage two, we integrate the encoder of newly introduced modalities with the decoders of the pre-trained modalities to facilitate cross-modal transfer and generation. We evaluate our method by newly adding 3D point clouds and tactile modalities into pre-trained MLLMs with three modality pairs and show that, by learning an aligned latent representation space, our model achieves strong cross-modal performance.

---

📖 [Read original article](https://arxiv.org/abs/2605.21059)