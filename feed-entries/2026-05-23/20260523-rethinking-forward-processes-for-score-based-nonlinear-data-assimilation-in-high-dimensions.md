---
title: "Rethinking Forward Processes for Score-Based Nonlinear Data Assimilation in High Dimensions"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.02889"
author: "Eunbi Yoon, Won Chang, Donghan Kim, Dae Wook Kim"
categories: ["stat.ML", "cs.AI", "cs.LG"]
---

arXiv:2604.02889v2 Announce Type: replace-cross Abstract: Data assimilation is the process of estimating the state of a dynamical system over time by combining model predictions with measurements. This task becomes challenging when the system is nonlinear and high-dimensional. To address this, score-based Bayesian filters have recently emerged. However, these methods still show unsatisfactory performance in certain cases, particularly under spatially sparse measurements. Such degradation stems from heuristic approximations of the likelihood score, whose errors can accumulate over time. This limitation arises because the methods simply adopt a classical forward process for generative modeling that transforms a data distribution toward a Gaussian distribution, which is independent of the measurement equation. Here, we propose a forward process tailored for filtering that transforms the system state toward the measurement space, enabling a theoretically sound formulation of the likelihood score. Based on this, we develop the Measurement-Aware Score-based Filter (MASF). We evaluate MASF on Kolmogorov flow, a high-dimensional fluid benchmark with up to $\mathcal{O}(10^5)$ dimensions, under diverse measurement operators, including nonlinear cases with a dimensional mismatch between the state and the measurements. MASF shows improved performance over existing score-based filters and ensemble-type Kalman filters. Notably, MASF achieves up to a $28.2\times$ wall-clock speedup compared with the baselines when using amortized pretraining. Our implementation is available at \texttt{https://github.com/tcnllab-oss/masf}.

---

📖 [Read original article](https://arxiv.org/abs/2604.02889)