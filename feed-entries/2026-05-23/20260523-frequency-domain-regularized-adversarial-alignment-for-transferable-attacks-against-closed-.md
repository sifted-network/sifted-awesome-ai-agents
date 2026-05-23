---
title: "Frequency-Domain Regularized Adversarial Alignment for Transferable Attacks against Closed-Source MLLMs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21541"
author: "Leitao Yuan, Qinghua Mao, Daizong Liu, Kun Wang, Wenjie Wang, Yan Teng, Jing Shao, Dongrui Liu"
categories: ["cs.CR", "cs.AI", "cs.LG", "stat.ML"]
---

arXiv:2605.21541v1 Announce Type: cross Abstract: Multimodal large language models (MLLMs) remain vulnerable to transfer-based targeted attacks, where perturbations optimized on open-source surrogate encoders can generalize to closed-source MLLMs. A key challenge for improving adversarial transferability is to effectively capture the intrinsic visual focus shared across different models, such that perturbations align with transferable semantic cues rather than surrogate-specific behaviors. However, existing methods suffer from spatial-domain feature redundancy and surrogate-specific gradient signals, thereby hindering cross-model transferability. In this paper, we propose FRA-Attack, which addresses both challenges from a unified frequency-domain regularization perspective. For feature alignment, a high-pass DCT objective on patch features suppresses redundant global structures and concentrates the loss on the high-frequency band that carries the MLLMs' intrinsic visual focus. For gradient optimization, we introduce Frequency-domain Gradient Regularization (FGR), a \textit{model-agnostic} low-pass regularizer that modulates the surrogate gradient using only the geometric frequency coordinate, \textit{i.e.}, no surrogate-derived statistic is involved, so that FGR is model-agnostic by construction, removing surrogate-specific high-frequency artifacts while preserving transferable low-frequency directions. Together, the two components form a unified frequency-domain treatment of transferability. Extensive experiments on $15$ flagship MLLMs across $7$ vendors show that FRA-Attack achieves superior cross-model transferability, particularly with state-of-the-art performance on GPT-5.4, Claude-Opus-4.6 and Gemini-3-flash.

---

📖 [Read original article](https://arxiv.org/abs/2605.21541)