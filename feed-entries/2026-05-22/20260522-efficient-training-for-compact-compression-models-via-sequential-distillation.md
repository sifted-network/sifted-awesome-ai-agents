---
title: "Efficient training for compact compression models via sequential distillation"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.05639"
author: "Caroline Mazini Rodrigues (COMPACT), Nicolas Keriven (COMPACT), Thomas Maugey (COMPACT)"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2601.05639v2 Announce Type: replace-cross Abstract: Deep learning models for image compression often face practical limitations in hardware-constrained applications. Although these models achieve high-quality reconstructions, they are typically complex, heavyweight, and require substantial training data and computational resources. We propose a methodology to significantly reduce autoencoder-based compression networks in a more stable Knowledge Distillation process. The intuition is that highly reduced architectures benefit from simplified optimization objectives in early training, with complexity gradually introduced later. Therefore, our approach begins with a sequential encoder--decoder distillation stage that provides a robust initialization for the lightweight model. This is followed by standard training that can be regularized with latent distillation. We evaluate the resulting lightweight autoencoders across two different architectures on the image compression task. Experiments show that our method preserves reconstruction quality and statistical fidelity in early epochs better than training lightweight autoencoders with the original loss, making it practical for resource-limited environments.

---

📖 [Read original article](https://arxiv.org/abs/2601.05639)