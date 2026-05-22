---
title: "You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank-1 Trajectories"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21468"
author: "Zhepei Wei, Xinyu Zhu, Wei-Lin Chen, Chengsong Huang, Jiaxin Huang, Yu Meng"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.21468v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) has become a dominant paradigm for improving reasoning in large language models (LLMs), yet the underlying geometry of the resulting parameter trajectories remains underexplored. In this work, we demonstrate that RLVR weight trajectories are extremely low-rank and highly predictable. Specifically, we find that the majority of downstream performance gains are captured by a rank-1 approximation of the parameter deltas, where the magnitude of this projection evolves near-linearly with training steps. Motivated by this, we propose a simple and compute-efficient method RELEX (REinforcement Learning EXtrapolation), which estimates the rank-1 subspace from a short observation window and extrapolates future checkpoints via linear regression, with no learned model required. Across three models (i.e., Qwen2.5-Math-1.5B, Qwen3-4B-Base, and Qwen3-8B-Base), RELEX produces checkpoints that match or exceed RLVR performance on both in-domain and out-of-domain benchmarks, requiring as few as 15% steps of full RLVR training. Remarkably, RELEX is able to extrapolate far beyond the observation window at no training cost, predicting checkpoints up to 10-20$\times$ beyond the observed prefix with continued improvement (e.g., observe only the first 50 steps and extrapolate to 1000 steps). Our ablation analysis confirms the minimalist sufficiency of RELEX: neither increasing the subspace rank nor employing non-linear modeling yields further gains in extrapolation. Finally, we show that RELEX's success stems from a "denoising" effect: by projecting updates onto the rank-1 subspace, the model discards stochastic optimization noise that would otherwise degrade performance during extrapolation. Our code is available at https://github.com/weizhepei/RELEX.

---

📖 [Read original article](https://arxiv.org/abs/2605.21468)