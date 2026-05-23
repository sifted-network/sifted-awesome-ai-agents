---
title: "UniSD: Towards a Unified Self-Distillation Framework for Large Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.06597"
author: "Yiqiao Jin, Yiyang Wang, Lucheng Fu, Yijia Xiao, Yinyi Luo, Haoxin Liu, B. Aditya Prakash, Josiah Hester, Jindong Wang, Srijan Kumar"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.06597v2 Announce Type: replace-cross Abstract: Self-distillation (SD) offers a promising path for adapting large language models (LLMs) without relying on stronger external teachers. However, SD in autoregressive LLMs remains challenging because self-generated trajectories are free-form, correctness is task-dependent, and plausible rationales can still provide unstable or unreliable supervision. Existing methods mainly examine isolated design choices, leaving their effectiveness, roles, and interactions unclear. In this paper, we propose UniSD, a unified framework to systematically study self-distillation. UniSD integrates complementary mechanisms that address supervision reliability, representation alignment, and training stability, including multi-teacher agreement, EMA teacher stabilization, token-level contrastive learning, feature matching, and divergence clipping. Across six benchmarks and six models from three model families, UniSD reveals when self-distillation improves over static imitation, which components drive the gains, and how these components interact across tasks. Guided by these insights, we construct UniSDfull, an integrated pipeline that combines complementary components and achieves the strongest overall performance, improving over the base model by +5.4 points and the strongest baseline by +2.8 points. Extensive evaluation highlights self-distillation as a practical and steerable approach for efficient LLM adaptation without stronger external teachers.

---

📖 [Read original article](https://arxiv.org/abs/2605.06597)