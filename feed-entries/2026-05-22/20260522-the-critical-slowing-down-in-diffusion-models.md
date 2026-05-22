---
title: "The critical slowing down in diffusion models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12597"
author: "Luca Maria Del Bono, Giulio Biroli, Patrick Charbonneau, Marylou Gabri\\'e"
categories: ["cond-mat.dis-nn", "cond-mat.stat-mech", "cs.AI", "cs.LG", "physics.comp-ph"]
---

arXiv:2605.12597v2 Announce Type: replace-cross Abstract: Computational sampling has been central to the sciences since the mid-20th century. While machine-learning-based approaches have recently enabled major advances, their behavior remains poorly understood, with limited theoretical control over when and why they succeed. Here we provide such insight for diffusion models-a class of generative schemes highly effective in practice-by analyzing their application to the $O(n)$ model of statistical field theory in the Gaussian limit $n \to \infty$. In this analytically tractable setting, we show that training a score model with a one-layer network architecture matching the exact solution exhibits a form of critical slowing down in parameter learning. This slowing down also impacts the generation process, indicating that the well-known difficulties of sampling near criticality persist even for learned generative models. To overcome this bottleneck, we demonstrate the power of combining architectural depth with physical locality. We find that using a two-layer architecture drastically reduces the critical slowing down, with the training time scaling logarithmically rather than quadratically with system size. By introducing a local score approximation we show that this acceleration in training time can be achieved without increasing the number of neural network parameters. Taken together, these results demonstrate that diffusion models can overcome the critical slowing down through appropriate architectural design, and establish a controlled framework for understanding and improving learned sampling methods in statistical physics and beyond.

---

📖 [Read original article](https://arxiv.org/abs/2605.12597)