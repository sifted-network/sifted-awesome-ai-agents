---
title: "OPPO: Bayesian Value Recursion for Token-Level Credit Assignment in LLM Reasoning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21851"
author: "Yu Li, Rui Miao, Tian Lan, Zhengling Qi"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21851v1 Announce Type: cross Abstract: Reinforcement learning with verifiable rewards has become the standard recipe for improving LLM reasoning, but the dominant algorithm GRPO assigns a single trajectory-level advantage to every token, diluting the signal at pivotal reasoning steps and injecting noise at uninformative ones. Critic-free alternatives derived from on-policy distillation supply per-token signals through oracle-conditioned likelihood ratios, yet apply each signal in isolation from the trajectory-level evidence accumulated up to that position. We propose Oracle-Prompted Policy Optimization (OPPO), which rests on a single observation: the oracle signal used by prior distillation-style methods for local discrimination is also the natural Bayesian update of the model's belief about eventual success. Accumulating the signal along a trajectory yields, in closed form and at the cost of one extra forward pass, a running estimate of the success probability at every position, together with a token-level advantage that requires no learned value network and no additional rollouts. A first-order analysis factorizes the advantage into the per-token discrimination signal used by distillation methods modulated by a state weight that concentrates credit on genuinely pivotal tokens, with a directional variance-reduction guarantee. The framework admits two estimators differing only in which model scores the evidence: a \textit{self-oracle} that reuses the student and recovers the on-policy distillation reward as a strict special case, and a \textit{teacher-oracle} that delegates scoring to a stronger frozen model. On two base LLMs across seven mathematics, science, and code reasoning benchmarks, OPPO improves over GRPO, DAPO, and SDPO by up to $+6.0$ points on AMC'23 and $+5.2$ points on AIME'24, with gains that widen monotonically with response length.

---

📖 [Read original article](https://arxiv.org/abs/2605.21851)