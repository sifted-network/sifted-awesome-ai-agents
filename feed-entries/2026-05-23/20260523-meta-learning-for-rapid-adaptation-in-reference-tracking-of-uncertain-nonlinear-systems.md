---
title: "Meta-Learning for Rapid Adaptation in Reference Tracking of Uncertain Nonlinear Systems"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22513"
author: "Jiaqi Yan, Ankush Chakrabarty, Niklas Schmid, John Lygeros, Alisa Rupenyan"
categories: ["cs.AI"]
---

arXiv:2605.22513v1 Announce Type: new Abstract: In this paper, we address the problem of reference tracking for uncertain nonlinear systems. Since collecting data from the target system (i.e., the system of interest) is often challenging, our objective is to design optimal controllers using limited target system data. Meta-learning provides a promising paradigm by leveraging offline data from source systems (systems sharing structural similarities with the target system) to accelerate training and enhance control performance. Motivated by this idea, we propose a meta-learning-based control framework that tailors the implicit model-agnostic meta-learning (iMAML) algorithm to the control setting. The framework operates in two phases: an (offline) meta-training phase, where an aggregated representation is learned from source data to capture the shared system dynamics among similar systems, and an (online) meta-adaptation phase, where this representation is fine-tuned on the target system using only a few data samples and limited adaptation steps. We formulate this framework as a bi-level optimization problem and provide an efficient solution with reduced storage complexity and few approximations. The proposed framework is general, allowing various learning algorithms to be integrated. To demonstrate this flexibility, we propose two specific learning algorithms that can be incorporated into our framework based on a neural state-space model and a deep Q-network, respectively. The primary distinction between these approaches is whether explicit system identification is required. Numerical simulations and hardware experiments demonstrate that the proposed methods enhance control performance and consistently outperform baseline approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.22513)