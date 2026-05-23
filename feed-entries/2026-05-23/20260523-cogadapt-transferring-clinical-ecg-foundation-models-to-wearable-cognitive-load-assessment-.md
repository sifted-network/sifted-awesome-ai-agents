---
title: "CogAdapt: Transferring Clinical ECG Foundation Models to Wearable Cognitive Load Assessment via Lead Adaptation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22774"
author: "Amir Mousavi, Mohammad Sadegh Sirjani, Erfan Nourbakhsh, Mimi Xie, Rocky Slavin, Leslie Neely, John Davis, John Quarles"
categories: ["cs.LG", "cs.AI", "cs.HC"]
---

arXiv:2605.22774v1 Announce Type: cross Abstract: Real-time cognitive load assessment is essential for adaptive human-computer interaction but remains challenging due to limited labeled data and poor cross-subject generalization. Recent ECG foundation models pre-trained on millions of clinical recordings offer rich representations, but cannot be directly applied to wearable devices due to sensor configuration mismatch and task differences. In this paper, we propose CogAdapt, a framework that adapts clinical ECG foundation models to wearable cognitive load assessment. CogAdapt introduces LeadBridge, a learnable adapter that transforms 3-lead wearable signals into anatomically consistent 12-lead representations, and ProFine, a progressive fine-tuning strategy that gradually unfreezes encoder layers while preventing catastrophic forgetting. Evaluations on two public datasets (CLARE and CL-Drive) under leave-one-subject-out cross-validation show that CogAdapt substantially outperforms baselines trained from scratch, achieving macro-F1 scores of 0.626 and 0.768. These results demonstrate the promise of foundation model adaptation for subject-independent cognitive load assessment from wearable sensors.

---

📖 [Read original article](https://arxiv.org/abs/2605.22774)