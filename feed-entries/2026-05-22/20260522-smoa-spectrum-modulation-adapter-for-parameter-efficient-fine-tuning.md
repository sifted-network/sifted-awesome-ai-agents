---
title: "SMoA: Spectrum Modulation Adapter for Parameter-Efficient Fine-Tuning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21147"
author: "Yongkang Liu, Xing Li, Mengjie Zhao, Shanru Zhang, Zijing Wang, Qian Li, Shi Feng, Feiliang Ren, Daling Wang, Hinrich Sch\\\"utze"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.21147v1 Announce Type: new Abstract: As the number of model parameters increases, parameter-efficient fine-tuning (PEFT) has become the go-to choice for tailoring pre-trained large language models. Low-rank Adaptation (LoRA) uses a low-rank update method to simulate full parameter fine-tuning, which is widely used to reduce resource requirements. However, decreasing the rank encounters challenges with limited representational capacity. Theory suggests that LoRA fine-tuning with rank r converges toward the top r singular values of the pre-trained weight matrix. As the rank increases, more principal singular directions are preserved, which generally improves the model's performance. However, a larger rank also introduces more trainable parameters, leading to higher computational cost. To overcome this dilemma, we propose SMoA, a \textbf{S}pectrum \textbf{Mo}dulation \textbf{A}dapter that enlarges the accessible family of spectrum-aware updates under a smaller parameter budget. SMoA partitions the layer into multiple aligned spectral blocks and applies one in-block Hadamard-modulated low-rank branch to each diagonal block, yielding broader coverage of pretrained spectral directions. We provide theoretical analysis and empirical results on multiple tasks. In our experiments, SMoA improves average performance in the current lower-budget setting over LoRA and competitive LoRA-style baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.21147)