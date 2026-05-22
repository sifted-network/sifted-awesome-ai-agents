---
title: "Causal Unlearning in Collaborative Optimization: Exact and Approximate Influence Reversal under Adversarial Contributions"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20341"
author: "Ali Mahdavi, Azadeh Zamanifar, Amirfarhad Farhadi, Omid Kashefi"
categories: ["cs.LG", "cs.AI", "cs.CR", "cs.PF"]
---

arXiv:2605.20341v1 Announce Type: cross Abstract: Federated learning systems must support data deletion requests to comply with privacy regulations, yet retraining from scratch after each deletion is computationally prohibitive. We present HF-KCU, a method that removes a client's contribution by approximating the influence function through conjugate gradient iterations in Krylov subspaces, reducing complexity from O(d^3) to O(kd) where k<<d.A causal weighting mechanism ensures that only clients holding the deleted data receive parameter updates, preventing spurious changes to unaffected clients. Our method is designed to handle bounded adversarial perturbations to the Hessian and gradient, providing graceful degradation under realistic threat models. We validate HF-KCU across convolutional (ResNet-18, SimpleCNN) and transformer (ViT-Lite) architectures on CIFAR-10, MNIST, and Fashion-MNIST. On CIFAR-10 under Dirichlet (alpha=0.5) partitioning, HF-KCU achieves 47.75 times speedup over retraining while maintaining test accuracy within 0.60% of the rational baseline(71.16 vs 71.76 %). Membership inference attacks on the forget set yield success rates of 0.499 matching the retrained model and confirming effective privacy restoration. We provide convergence guarantees showing that the Krylov approximation error decreases as O((k ^1/2-1)/(k^1/2+1)) where k is the Hessian condition number. The causal weighting mechanism ensures surgical updates, where only clients holding deleted data are modified, preserving model quality for unaffected participants and avoiding the instability of gradient-based approaches in asynchronous federated settings. This design provides interpretability as each update is directly traceable to the influence of the deleted data. The method's efficiency and precision make it suitable for production federated systems where deletion requests arrive asynchronously and computational budgets are constrained.

---

📖 [Read original article](https://arxiv.org/abs/2605.20341)