---
title: "Tutor-Student Reinforcement Learning: A Dynamic Curriculum for Robust Deepfake Detection"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.24139"
author: "Zhanhe Lei, Zhongyuan Wang, Jikang Cheng, Baojin Huang, Yuhong Yang, Zhen Han, Chao Liang, Dengpan Ye"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2603.24139v2 Announce Type: replace-cross Abstract: Standard supervised training for deepfake detection treats all samples with uniform importance, which can be suboptimal for learning robust and generalizable features. In this work, we propose a novel Tutor-Student Reinforcement Learning (TSRL) framework to dynamically optimize the training curriculum. Our method models the training process as a Markov Decision Process where a ``Tutor'' agent learns to guide a ``Student'' (the deepfake detector). The Tutor, implemented as a Proximal Policy Optimization (PPO) agent, observes a rich state representation for each training sample, encapsulating not only its visual features but also its historical learning dynamics, such as EMA loss and forgetting counts. Based on this state, the Tutor takes an action by assigning a continuous weight (0-1) to the sample's loss, thereby dynamically re-weighting the training batch. The Tutor is rewarded based on the Student's immediate performance change, specifically rewarding transitions from incorrect to correct predictions. This strategy encourages the Tutor to learn a curriculum that prioritizes high-value samples, such as hard-but-learnable examples, leading to a more efficient and effective training process. We demonstrate that this adaptive curriculum improves the Student's generalization capabilities against unseen manipulation techniques compared to traditional training methods. Code is available at https://github.com/wannac1/TSRL.

---

📖 [Read original article](https://arxiv.org/abs/2603.24139)