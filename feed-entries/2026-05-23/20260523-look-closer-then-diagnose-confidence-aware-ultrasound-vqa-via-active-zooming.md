---
title: "Look-Closer-Then-Diagnose: Confidence-Aware Ultrasound VQA via Active Zooming"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21652"
author: "Yue Zhou, Erxuan Wu, Yikang Sun, Hongjoo Lee, Yuan Bi, Huixiong Xu, Zhongliang Jiang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21652v1 Announce Type: cross Abstract: Vision-Language Models (VLMs) have significantly advanced medical visual question answering, yet their performance in ultrasound remains suboptimal. In clinical practice, sonographers explicitly focus on lesion regions to formulate reports, though diagnostic interpretations sometimes vary due to inherent subjectivity. However, existing VLMs are not explicitly structured to interactively zoom into lesions prior to diagnosis; moreover, they typically treat annotations as unbiased ground truths, failing to account for their inherent subjectivity and ambiguity. In this paper, we propose a framework specifically designed to consider the sonographer's cognitive workflow. We first introduce a structured Zoom-then-Diagnose paradigm, which replicates the interactive search process to enable lesion-focused reasoning. Furthermore, within the Group Relative Policy Optimization (GRPO) framework, we introduce an uncertainty-aware reward derived from stochastic group-wise rollouts to estimate prediction consistency as a proxy for model confidence. Together, these two components encourage the model to reinforce accurate predictions on clear cases while remaining cautious under ambiguity. Experiments across liver, breast, and thyroid datasets show that our framework improves lesion localization by 39.3\%, demonstrating that our model has learned the ability to actively look closer and diagnose.

---

📖 [Read original article](https://arxiv.org/abs/2605.21652)