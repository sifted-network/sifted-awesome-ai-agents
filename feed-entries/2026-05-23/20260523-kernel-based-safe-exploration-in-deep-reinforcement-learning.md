---
title: "Kernel-Based Safe Exploration in Deep Reinforcement Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22207"
author: "Rupak Majumdar, Nikhil Singh, Sadegh Soudjani"
categories: ["eess.SY", "cs.LG", "cs.SY"]
---

arXiv:2605.22207v1 Announce Type: cross Abstract: Safety has been a major concern when deploying deep reinforcement learning algorithms in the real world. A promising direction that ensures that the learned policy does not visit unsafe regions is to learn a \emph{barrier function} along with the policy. A barrier is a function from states to reals that assigns low values to the initial states, high values to the unsafe states, and decreases in expectation on each transition; such a function can be used to bound the probability of reaching unsafe states. Previous attempts learned a barrier function directly from exploration data, but this required either large amounts of data or restrictions on the system dynamics. In this paper, we show how kernel embeddings can be used to learn barrier functions during deep reinforcement learning for stochastic systems with unknown dynamics. Our algorithm, \emph{kernel-based safe exploration (KBSE)}, learns an optimal policy and a barrier simultaneously during exploration. The barriers are computed iteratively, represented as conditional mean embeddings, and provide better probabilistic safety guarantees with more exploration. The exploration algorithm uses the learned barrier functions to identify safety violations. In the case of violation, it intervenes to modify the unsafe action to a safe action, thereby ensuring that the exploration is restricted to actions that bound the probability of reaching unsafe states. We evaluate KBSE on several complex continuous control benchmarks. Experimental results establish our new algorithm to be suitable for synthesizing control policies that are probabilistically safe without degradation in reward accumulation.

---

📖 [Read original article](https://arxiv.org/abs/2605.22207)