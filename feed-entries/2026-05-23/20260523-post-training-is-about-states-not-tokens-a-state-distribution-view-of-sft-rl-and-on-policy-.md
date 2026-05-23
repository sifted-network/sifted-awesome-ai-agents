---
title: "Post-Training is About States, Not Tokens: A State Distribution View of SFT, RL, and On-Policy Distillation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22731"
author: "Dong Nie"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22731v1 Announce Type: cross Abstract: Large language model post-training methods such as supervised fine-tuning (SFT), reinforcement learning (RL), and distillation are often analyzed through their loss functions: maximum likelihood, policy gradients, forward KL, reverse KL, or related objective-level variants. We study a complementary factor: the state distribution on which supervision is applied. For an autoregressive policy, a state is a prompt plus generated prefix. SFT trains on fixed dataset states, while RL and on-policy distillation (OPD) train on states induced by the current learner. We formalize post-training as state-distribution shaping and run a controlled smallscale study using Qwen3-0.6B-Base on GSM8K, with TruthfulQA and MMLU as retention evaluations. Our results show three phenomena. First, a mild SFT run improves GSM8K with little forgetting, while a stress SFT run causes substantial retention loss. Second, OPD from a degraded SFT teacher surpasses that teacher on GSM8K, TruthfulQA, and MMLU, despite using the teacher as its only supervision source. Third, a lightweight on-policy RL run improves GSM8K while preserving retention. These results support a state-centric view of post-training: the source and locality of training states can be as important as the form of the supervision signal.

---

📖 [Read original article](https://arxiv.org/abs/2605.22731)