---
title: "GROW: Aligning GRPO with State-Action Modeling for Open-World VLM Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20246"
author: "Xiongbin Wu, Zhihao Luo, Shanzhe Lei, Lechao Zhang, Xuhong Wang, Jie Yang, Zhonglong Zheng, Yuanjie Zheng, Xin Tan, Wei Liu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20246v2 Announce Type: replace-cross Abstract: Recently, vision-language model (VLM) agents have shown promising progress in open-world tasks, where successful task completion often requires multiple turns of visual perception and action execution. However, existing methods still rely primarily on Supervised Fine-Tuning (SFT) with expert demonstrations, while the advanced reinforcement learning (RL) algorithm, specifically Group Relative Policy Optimization (GRPO), has not been effectively employed for multi-turn RL in these tasks because standard GRPO requires full trajectories as training samples which leads to excessively long context and noise. To address this issue, we propose GROW, a RL framework for open-world VLM agents that decomposes collected trajectories into state-action samples, and computes advantages between these samples rather than treating a full trajectory as a single entity. We further provide a surrogate analysis indicating that, even though the grouped samples are conditioned on different local states rather than an identical prompt context, the objective can preserve the core relative policy optimization signal of GRPO under simplifying assumptions. Experiments on more than 800 Minecraft tasks show that our method achieves state-of-the-art (SOTA) performance, demonstrating the effectiveness of our proposed RL framework for open-world VLM agents.

---

📖 [Read original article](https://arxiv.org/abs/2605.20246)