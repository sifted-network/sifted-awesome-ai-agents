---
title: "TreeDQN: Sample-Efficient Off-Policy Reinforcement Learning for Combinatorial Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2306.05905"
author: "D. Sorokin, A. Kostin, L. Savchenko, G. Gusev, A. V. Savchenko"
categories: ["cs.LG", "math.OC"]
---

arXiv:2306.05905v2 Announce Type: replace Abstract: A convenient approach to optimally solving combinatorial optimization tasks is the Branch-and-Bound method. Its branching heuristic can be learned to solve a large set of similar tasks. The promising results here are achieved by the recently appeared on-policy reinforcement learning method based on the tree Markov Decision Process. To overcome its main disadvantages, namely, very large training time and unstable training, we propose TreeDQN (Tree Deep Q-Network), a sample-efficient off-policy RL method trained by optimizing the geometric mean of expected return. To theoretically support the training procedure for our method, we prove the contraction property of the Bellman operator for the tree MDP. As a result, our method requires up to 10 times less training data and performs faster than known on-policy methods on synthetic tasks. Moreover, TreeDQN significantly outperforms the state-of-the-art techniques on a challenging practical task from the ML4CO competition.

---

📖 [Read original article](https://arxiv.org/abs/2306.05905)