---
title: "DC-LA: Difference-of-Convex Langevin Algorithm"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.22932"
author: "Hoang Phuc Hau Luu, Zhongjian Wang"
categories: ["cs.LG"]
---

arXiv:2601.22932v2 Announce Type: replace Abstract: We study a sampling problem whose target distribution is $\pi \propto \exp(-f-r)$ where the data fidelity term $f$ is Lipschitz smooth while the regularizer term $r=r_1-r_2$ is a non-smooth difference-of-convex (DC) function, i.e., $r_1,r_2$ are convex. By leveraging the DC structure of $r$, we can smooth out $r$ by applying Moreau envelopes to $r_1$ and $r_2$ separately. In line with DC programming, we then redistribute the concave part of the regularizer to the data fidelity and study its corresponding proximal Langevin algorithm (termed DC-LA). We establish convergence of DC-LA to the target distribution $\pi$, up to discretization and smoothing errors, in the $q$-Wasserstein distance for all $q \in \mathbb{N}^*$, under the assumption that $V$ is distant dissipative. Our results improve previous work on non-log-concave sampling in terms of a more general framework and assumptions. Numerical experiments show that DC-LA produces accurate distributions in synthetic settings and provides qualitatively reasonable uncertainty quantification in a real-world Computed Tomography application.

---

📖 [Read original article](https://arxiv.org/abs/2601.22932)