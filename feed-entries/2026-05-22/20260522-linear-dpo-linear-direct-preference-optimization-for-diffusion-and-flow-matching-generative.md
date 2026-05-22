---
title: "Linear-DPO: Linear Direct Preference Optimization for Diffusion and Flow-Matching Generative Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21123"
author: "Kesong Li, Yixuan Xu, Kuo-kun Tseng, Weiyi Lu, Kan Liu, Tao Lan"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21123v1 Announce Type: cross Abstract: Direct Preference Optimization (DPO) is successful for alignment in LLMs but still faces challenges in text-to-image generation. Existing studies are confined to denoising diffusion models while overlooking flow-matching, and suffer from an objective mismatch when applying discrete NLP-based DPO to regression-based generative tasks.\ In this paper, we derive a generalized DPO objective that covers both diffusion and flow-matching via a unified reverse-time SDE framework, and point out from a gradient perspective that the standard DPO objective is suboptimal for text-to-image generation. Consequently, we propose Linear-DPO, which replaces the aggressive sigmoid-based utility function with a sustained linear utility and incorporates an EMA-updated reference model. Qualitative and quantitative experiments on diffusion models (SD1.5, SDXL) and flow-matching model (SD3-Medium) demonstrate the superiority of our approach over existing baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.21123)