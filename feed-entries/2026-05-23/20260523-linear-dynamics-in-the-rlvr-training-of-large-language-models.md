---
title: "Linear Dynamics in the RLVR Training of Large Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.04537"
author: "Tianle Wang, Jiayu Liu, Zhongyuan Wu, Shenghao Jin, Wei Chen, Hao Xu, Ning Miao"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2601.04537v3 Announce Type: replace Abstract: Reinforcement learning with verifiable rewards (RLVR) has driven significant performance gains in reasoning-oriented large language models (LLMs), yet its internal training dynamics remain largely a black box. In this work, we perform a comprehensive trajectory-level analysis of RLVR and uncover a striking regularity: across various model families, RL algorithms, and training configurations, RLVR consistently enters a robust linear regime, where both parameter weights and output log-probabilities, measured rigorously via teacher-forced evaluation, evolve in a highly linear manner ($R^2 > 0.7$). Through controlled experiments and theoretical analysis, we demonstrate that this linearity is not a coincidence, but stems from the high-variance, noisy nature of RLVR training signals, which act as a low-pass filter to concentrate optimization along a stable, low-dimensional drift. Moreover, we show that this linear structure is not merely descriptive but powerfully predictive and actionable. Specifically, weight-space extrapolation matches the performance of standard RL optimization while achieving a 6.1x training speedup through periodic re-grounding. Meanwhile, output-space extrapolation serves as a lightweight intervention that effectively bypasses late-stage model collapse, consistently outperforming standard RL across mathematical and coding benchmarks, with an average performance improvement of 4.2%. Our code is available at https://github.com/Miaow-Lab/RLVR-Linearity.

---

📖 [Read original article](https://arxiv.org/abs/2601.04537)