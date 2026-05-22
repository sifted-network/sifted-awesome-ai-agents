---
title: "Sliced-Regularized Optimal Transport"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.23944"
author: "Khai Nguyen"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2604.23944v3 Announce Type: replace-cross Abstract: We propose a new regularized optimal transport (OT) formulation, termed sliced-regularized optimal transport (SROT). Unlike entropic OT (EOT), which regularizes the transport plan toward an independent coupling, SROT regularizes it toward a smoothened sliced OT (SOT) plan. To the best of our knowledge, SROT is the first approach to leverage a version of SOT plan as a reference to improve classical OT. We provide a formal definition of SROT, derive its dual formulation, and provide a post-Bayesian interpretation of SROT. We then develop a Sinkhorn-style algorithm for efficient computation, retaining the same scalability advantages as EOT. By incorporating a scalable SOT plan as a prior, SROT yields more accurate approximations of the exact OT plan than EOT under the same level of regularization. Moreover, the resulting transport plan improves upon the reference SOT plan itself. We further introduce the corresponding OT divergence induced by SROT, named SROT divergence, and analyze its topological and computational properties. Finally, we validate our approach through experiments on synthetic datasets and color transfer tasks, demonstrating that SROT is better than both EOT and SOT in approximating exact OT. Additional experiments on gradient flows further highlight the advantages of SROT divergence.

---

📖 [Read original article](https://arxiv.org/abs/2604.23944)