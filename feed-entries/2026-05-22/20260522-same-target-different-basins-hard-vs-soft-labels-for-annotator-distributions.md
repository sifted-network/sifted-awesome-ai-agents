---
title: "Same Target, Different Basins: Hard vs. Soft Labels for Annotator Distributions"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20642"
author: "Mirerfan Gheibi, Gashin Ghazizadeh"
categories: ["cs.LG"]
---

arXiv:2605.20642v1 Announce Type: new Abstract: When annotators disagree, that disagreement can reflect epistemic uncertainty rather than simple label noise. We study hard-label delivery as an alternative to the usual choices of collapsing votes to a single label or training directly on the empirical soft-label distribution. We focus on two primary hard-label methods: multipass, which cycles through observed votes while keeping the dataset size fixed, and stochastic label sampling (SLS), which samples one label per example at the start of each epoch. On CIFAR-10H, we find that when only a small number of annotations per example is available, hard-label delivery improves over soft-label training, with larger improvements where the sparse empirical target is farther from the full annotator distribution. When full annotator distributions are available, both hard-label methods match soft-label training. We use deterministic control as an ablation of multipass and shuffled SLS as a control that breaks the example-to-distribution match. We also show that SLS and soft-label cross-entropy optimize the same expected objective. Hard-label delivery also converges to flatter basins, with supporting descriptive evidence from OOD detection on SVHN and CIFAR-100. Overall, these results suggest that multipass is a strong practical default when raw vote counts are available, while SLS offers a lightweight alternative that remains competitive when only a few votes per example are available and matches soft-label training when full annotator distributions are available.

---

📖 [Read original article](https://arxiv.org/abs/2605.20642)