---
title: "Spectral bandits for smooth graph functions with applications in recommender systems"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20552"
author: "Tom\\'a\\v{s} Koc\\'ak, Michal Valko, R\\'emi Munos, Branislav Kveton, Shipra Agrawal"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.20552v1 Announce Type: cross Abstract: Smooth functions on graphs have wide applications in manifold and semi-supervised learning. In this paper, we study a bandit problem where the payoffs of arms are smooth on a graph. This framework is suitable for solving online learning problems that involve graphs, such as content-based recommendation. In this problem, each recommended item is a node and its expected rating is similar to its neighbors. The goal is to recommend items that have high expected ratings. We aim for the algorithms where the cumulative regret would not scale poorly with the number of nodes. In particular, we introduce the notion of an effective dimension, which is small in real-world graphs, and propose two algorithms for solving our problem that scale linearly in this dimension. Our experiments on real-world content recommendation problem show that a good estimator of user preferences for thousands of items can be learned from just tens nodes evaluations.

---

📖 [Read original article](https://arxiv.org/abs/2605.20552)