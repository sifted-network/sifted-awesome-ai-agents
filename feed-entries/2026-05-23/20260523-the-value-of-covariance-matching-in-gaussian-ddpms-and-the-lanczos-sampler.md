---
title: "The Value of Covariance Matching in Gaussian DDPMs and the Lanczos Sampler"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22723"
author: "Md Sahil Akhtar, Aymane El Gadarri, Vivek F. Farias, Adam D. Jozefiak"
categories: ["cs.LG", "cs.AI", "cs.IT", "math.IT"]
---

arXiv:2605.22723v1 Announce Type: cross Abstract: A central error measure in Gaussian DDPMs is the path-space KL divergence between the exact reverse chain and the learned Gaussian reverse process. This quantity is especially relevant for procedures such as classifier guidance, which perturb the entire reverse trajectory rather than only the terminal sample. Prior analyses show that standard isotropic reverse covariances suffer an unavoidable $\Omega(1/T)$ path-KL error as the number of denoising steps $T$ grows. We show that matching the full posterior covariance breaks this barrier, yielding an order-wise improvement that reduces the path KL to $O(1/T^2)$. To make full covariance matching practical, we introduce the Lanczos Gaussian sampler (LGS), a training-free, matrix-free method for sampling from the optimal reverse covariance using only covariance-vector products, which are available through Jacobian-vector products of the posterior mean. LGS avoids dense covariance storage and auxiliary covariance models. We prove that LGS approximation error decays exponentially in the number of Lanczos steps, where each Lanczos step requires a single Jacobian-vector product. Empirically, using only just three such steps improves sample quality over strong diagonal-covariance baselines, including OCM-DDPM, across standard image benchmarks. This identifies full covariance matching as both theoretically valuable and practically accessible for fast DDPM sampling.

---

📖 [Read original article](https://arxiv.org/abs/2605.22723)