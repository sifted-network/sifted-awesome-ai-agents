---
title: "Preference-aware Influence-function-based Data Selection Method for Efficient Fine-Tuning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21422"
author: "Qihao Lin, Guanxu Chen, Dongrui Liu, Jing Shao"
categories: ["cs.LG"]
---

arXiv:2605.21422v1 Announce Type: new Abstract: As LLMs continue to scale, improving training efficiency increasingly depends on using data more effectively. Data selection addresses this problem by allocating a limited training budget to samples that best promote a target behavior. Existing methods usually represent the target behavior with a set of target examples, but often treat these examples as equally important. This can be inefficient because target examples may differ in their relevance to the current model: examples closer to the model's current behavior provide more actionable guidance than those farther away. We propose PRISM (PReference-aware Influence-function-based Data Selection Method for Efficient Fine-Tuning), which uses the current model's preference to weight target examples and construct a preference-aware target representation. PRISM then scores candidate training samples by their alignment with this representation, concentrating the data budget on samples more likely to move the model toward the target behavior. Theoretical analysis shows that this preference weighting yields a more effective first-order direction for increasing target-behavior preference. Experiments across model families and scales show that PRISM improves both efficient fine-tuning and safety-oriented SFT repair, demonstrating that precise target-behavior characterization is key to budget-efficient data selection.

---

📖 [Read original article](https://arxiv.org/abs/2605.21422)