---
title: "SDGBiasBench: Benchmarking and Mitigating Vision--Language Models' Biases in Sustainable Development Goals"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21919"
author: "Zihang Lin, Huaiyuan Qin, Muli Yang, Hongyuan Zhu"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21919v1 Announce Type: cross Abstract: Assessing progress toward the Sustainable Development Goals (SDGs) requires multi-step reasoning over visual cues, contextual knowledge, and development indicators, where incomplete evidence use and imperfect evidence integration can introduce hidden prediction biases. Real-world SDG monitoring further spans both qualitative judgments and quantitative estimation. However, existing benchmarks typically evaluate these aspects in isolation, obscuring systematic biases that emerge when models substitute priors for evidence. To address this gap, we propose SDGBiasBench, a large-scale benchmark suite for SDG-oriented vision-language reasoning. Spanning 500k expert-involved multiple-choice questions and 50k regression tasks, the benchmark enables comprehensive assessment of both decision-level and estimation-level bias in Vision--Language Models (VLMs). Evaluations on SDGBiasBench reveal an intrinsic SDG bias in current VLMs, where predictions are frequently driven by SDG specific priors rather than reliable multi-modal cues. To mitigate such bias, we propose CADE (Contrastive Adaptive Debias Ensemble), a training-free, plug-and-play method that leverages modality-specific answer priors. CADE yields significant gains on the proposed benchmark, improving multiple-choice accuracy by up to 25% and reducing regression MAE by up to 12 points across multiple VLMs. We hope our work can foster the development of more fair and reliable AI systems for sustainable development.

---

📖 [Read original article](https://arxiv.org/abs/2605.21919)