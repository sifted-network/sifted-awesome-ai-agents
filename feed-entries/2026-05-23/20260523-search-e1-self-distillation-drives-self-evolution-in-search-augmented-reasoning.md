---
title: "Search-E1: Self-Distillation Drives Self-Evolution in Search-Augmented Reasoning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22511"
author: "Zihan Liang, Yufei Ma, Ben Chen, Zhipeng Qian, Xuxin Zhang, Huangyu Dai, Lingtao Mao"
categories: ["cs.AI", "cs.CL", "cs.IR"]
---

arXiv:2605.22511v1 Announce Type: new Abstract: Post-training has become the dominant recipe for turning a language model into a competent search-augmented reasoning agent. A line of recent work pushes its performance further by adding elaborate machinery on top of this standard pipeline. These augmentations import external supervision from stronger external systems, attach auxiliary modules such as process reward models or retrospective critics, restructure the rollout itself with tree search or multi-stage curricula, or shape the reward with hand-crafted bonuses and penalties. Each addition delivers a measurable gain, but each also inflates the training pipeline and ties the recipe to resources or designs that may not always be available. We take a step back and ask whether any of this machinery is actually necessary, and propose Search-E1, a self-evolution method that lets a search-augmented agent improve through only vanilla GRPO interleaved with offline self-distillation (OFSD). After each GRPO round, the policy rolls out on its own training questions. A token-level forward KL objective then aligns the policy's inference-time distribution to its own distribution under a privileged context that exposes a more efficient sibling trajectory. Despite this simplicity, the procedure naturally provides dense per-step supervision. On seven QA benchmarks, Search-E1 reaches $0.440$ average EM with Qwen2.5-3B, surpassing all open-source baselines at both scales. Code and complete version will be made public soon.

---

📖 [Read original article](https://arxiv.org/abs/2605.22511)