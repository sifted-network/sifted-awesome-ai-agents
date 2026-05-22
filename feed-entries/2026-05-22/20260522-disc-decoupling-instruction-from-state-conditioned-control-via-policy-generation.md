---
title: "DISC: Decoupling Instruction from State-Conditioned Control via Policy Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20856"
author: "Hanxiang Ren, Pei Zhou, Xunzhe Zhou, Yanchao Yang"
categories: ["cs.RO", "cs.AI", "cs.LG"]
---

arXiv:2605.20856v1 Announce Type: cross Abstract: Language-conditioned manipulation policies typically process instructions and observations through shared network parameters. This task-state entanglement provides a pathway for observation leakage -- networks learn scene-to-action shortcuts that bypass language grounding entirely. DISC eliminates this failure structurally. Rather than conditioning a universal policy on language, DISC uses a hypernetwork to generate the entire parameter set of a task-specific visuomotor policy from the instruction alone. The generated policy never directly accesses language; therefore, its task-awareness must come from the language. Consequently, observation leakage has no pathway to emerge. On the other hand, generating coherent high-dimensional policy weights is itself a challenging problem. We address it with a two-stage hypernetwork whose refinement stage embeds the structure of gradient-based optimization as a feed-forward inductive bias, producing globally consistent parameters without actual gradient computation. Trained entirely from scratch on standard data budgets, DISC outperforms all entangled baselines on LIBERO-90 and Meta-World, with advantages that widen on complex, long-horizon tasks -- and surpasses the large-scale pretrained $\pi_0$ despite using no external pretraining data. On a real-world benchmark where all tasks share identical visual context, DISC substantially outperforms entangled alternatives, directly confirming that language-generated policy parameters, not visual shortcuts, drive behavior. The hypernetwork further learns a semantically structured parameter manifold that enables few-shot adaptation from minimal demonstrations and robust generalization across paraphrased instructions. Our code is available at: {https://github.com/ReNginx/DISC}.

---

📖 [Read original article](https://arxiv.org/abs/2605.20856)