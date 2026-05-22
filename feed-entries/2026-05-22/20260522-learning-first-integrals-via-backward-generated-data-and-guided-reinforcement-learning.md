---
title: "Learning First Integrals via Backward-Generated Data and Guided Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21160"
author: "Jingfeng Zhong, Zhengxiang Liu, Zhijie Wang, Shuai Li"
categories: ["cs.LG"]
---

arXiv:2605.21160v1 Announce Type: new Abstract: The discovery of first integrals is of fundamental scientific importance for understanding conservation laws in dynamical systems. However, existing symbolic computation tools and Large Language Models (LLMs) remain limited on this task because high-quality training data are scarce and successful solutions often depend on mathematical intuition. This paper presents FISolver, an LLM-based solver developed to address this challenge. First, we introduce a "Backward Generation" algorithm that systematically builds large-scale datasets of (differential equation, first integral) pairs by deriving differential equations from sampled integrals, thereby alleviating the data scarcity bottleneck. Second, we apply supervised fine-tuning to a compact mathematical model and further improve its performance through reinforcement learning with a Levenshtein Distance-based shaped reward. In addition, we design data synthesis and blending strategies that support effective adaptation to difficult problem families from sparse examples. Experiments show that FISolver, while requiring substantially lower computational cost, significantly outperforms larger mathematical LLMs and commercial solvers such as Mathematica on challenging benchmarks, indicating a new data-driven route for automated discovery of first integrals.

---

📖 [Read original article](https://arxiv.org/abs/2605.21160)