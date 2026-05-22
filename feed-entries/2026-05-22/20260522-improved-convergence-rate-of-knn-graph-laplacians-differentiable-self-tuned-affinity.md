---
title: "Improved convergence rate of kNN graph Laplacians: differentiable self-tuned affinity"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2410.23212"
author: "Xiuyuan Cheng, Yixuan Tan, Nan Wu"
categories: ["stat.ML", "cs.LG", "math.ST", "stat.TH"]
---

arXiv:2410.23212v2 Announce Type: replace-cross Abstract: In graph-based data analysis, $k$-nearest neighbor ($k$NN) graphs are widely used due to their adaptivity to local data densities. Allowing weighted edges in the graph, the kernelized graph affinity provides a more general type of $k$NN graph where the $k$NN distance is used to set the kernel bandwidth adaptively. In this work, we consider a general class of $k$NN graph where the graph affinity is $W_{ij} = \epsilon^{-d/2} k_0 ( \| x_i - x_j \|^2 / \epsilon \phi( \hat \rho(x_i), \hat \rho(x_j) )^2 ) $, with $\hat{\rho}(x)$ being the (rescaled) $k$NN distance at the point $x$, $\phi$ a symmetric bi-variate function, and $k_0$ a non-negative function on $[0,\infty)$. Under the manifold data setting, where $N$ i.i.d. samples $x_i$ are drawn from a density $p$ on a $d$-dimensional unknown manifold embedded in a high dimensional Euclidean space, we prove the operator pointwise convergence of the $k$NN graph Laplacian to the limiting manifold operator (depending on $p$) at the rate of $O(N^{-2/(d+6)})$, up to a log factor, when $k_0$ and $\phi$ have $C^3$ regularity and satisfy other technical conditions. This is obtained when $\epsilon \sim N^{-2/(d+6)}$ and $k \sim N^{6/(d+6)}$, both at the optimal order to balance the theoretical bias and variance errors. Our improved convergence rate is based on a refined analysis of the $k$NN estimator, which can be of independent interest. We validate our theory by numerical experiments on simulated data.

---

📖 [Read original article](https://arxiv.org/abs/2410.23212)