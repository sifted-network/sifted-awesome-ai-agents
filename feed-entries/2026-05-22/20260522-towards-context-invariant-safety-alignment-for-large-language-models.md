---
title: "Towards Context-Invariant Safety Alignment for Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20994"
author: "Yixu Wang, Yang Yao, Xin Wang, Yifeng Gao, Yan Teng, Xingjun Ma, Yingchun Wang"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20994v1 Announce Type: cross Abstract: Preference-based post-training aligns LLMs with human intent, yet safety behavior often remains brittle. A model may refuse a harmful request in a standard prompt but comply when the same intent is wrapped in adversarial wording. We suggest that robust safety requires context-invariant alignment, where behavior depends on the underlying intent rather than surface form. Enforcing invariance is difficult in alignment because not all training signals are equally trustworthy; for some prompt variants we can obtain verifiable feedback (e.g., multiple-choice), while for open-ended variants we typically rely on noisy, gameable reward proxies (e.g., learned judges). As a result, standard symmetric invariance regularizers can reduce cross-context discrepancies by lowering performance on reliable variants instead of improving open-ended robustness. To address this, we introduce Anchor Invariance Regularization (AIR), which treats verifiable prompts as anchors and uses a stop-gradient target to regularize only the open-ended variants toward the anchor performance. AIR is implemented as a plug-in auxiliary loss and combined with group-based preference optimization (e.g., GRPO) via heterogeneous prompt grouping. Across Safety, Moral Reasoning, and Math, AIR improves context invariance, boosting in-distribution group accuracy by 12.71% and out-of-distribution consistency by 33.49%, making safety constraints robust to adversarial framings.

---

📖 [Read original article](https://arxiv.org/abs/2605.20994)