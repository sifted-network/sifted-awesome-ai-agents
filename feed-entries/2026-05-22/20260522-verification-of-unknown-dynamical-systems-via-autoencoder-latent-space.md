---
title: "Verification of Unknown Dynamical Systems via Autoencoder Latent Space"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.13593"
author: "Robert Reed, Luca Laurenti, Morteza Lahijanian"
categories: ["cs.LG"]
---

arXiv:2512.13593v4 Announce Type: replace Abstract: Formal verification provides a powerful framework for proving that dynamical systems satisfy their specifications. However, these techniques face scalability challenges in high-dimensional settings, as they often rely on state-space discretization which grows exponentially with dimension. Learning-based approaches to dimensionality reduction, utilizing neural networks and autoencoders, have shown great potential to alleviate this problem. However, ensuring correctness of latent space verification results remains an open question. In this work, we provide a formal approach to reduce the dimensionality of systems via convex autoencoders and learn the dynamics in the latent space through a kernel-based method. We then construct a finite abstraction from the learned model in the latent space and guarantee that the abstraction contains the true behaviors of the original system. We show that the verification results in the latent space can be mapped back to the original system. Finally, we demonstrate the approach on multiple systems, including a 26D system controlled by a neural network, showing significant scalability improvements.

---

📖 [Read original article](https://arxiv.org/abs/2512.13593)