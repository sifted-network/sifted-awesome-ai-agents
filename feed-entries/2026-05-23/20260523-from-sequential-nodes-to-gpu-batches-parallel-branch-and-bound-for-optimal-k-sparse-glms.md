---
title: "From Sequential Nodes to GPU Batches: Parallel Branch and Bound for Optimal $k$-Sparse GLMs"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22188"
author: "Jiachang Liu, Andrea Lodi"
categories: ["cs.LG", "math.OC", "stat.ML"]
---

arXiv:2605.22188v1 Announce Type: new Abstract: GPUs have significantly accelerated first-order methods for large-scale optimization, especially in continuous optimization. However, this success has not transferred cleanly to problems with discrete variables, combinatorial structure, and nonlinear objectives, such as certifying optimal solutions for cardinality-constrained generalized linear models. Major challenges include the sequential processing of heterogeneous nodes in branch and bound (BnB) and frequent data movement between the CPU and GPU. We propose a simple, generic, and modular CPU--GPU framework that processes multiple BnB nodes in batches on GPUs. The framework is built around a small set of GPU-efficient routines and uses padding together with lightweight custom kernels to handle irregular node data structures. Experiments show one to two orders of magnitude speedups and zero optimality gap on challenging instances. The framework can also be extended to collect the entire Rashomon set, enabling downstream statistical analysis such as variable-importance analysis and model selection under secondary user-specific measures (e.g., AUC in classification).

---

📖 [Read original article](https://arxiv.org/abs/2605.22188)