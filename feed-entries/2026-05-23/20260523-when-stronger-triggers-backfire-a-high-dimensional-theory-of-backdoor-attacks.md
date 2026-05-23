---
title: "When Stronger Triggers Backfire: A High-Dimensional Theory of Backdoor Attacks"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22481"
author: "Donald Flynn, Hadas Yaron Goldhirsh, Jonathan P. Keating, Inbar Seroussi"
categories: ["cs.LG", "math.ST", "stat.TH"]
---

arXiv:2605.22481v1 Announce Type: new Abstract: Backdoor poisoning attacks behave counter-intuitively in high dimensions: stronger training triggers can help the defender. We study regularised generalised linear models on Gaussian-mixture data in the proportional regime ($p/n \to \kappa$), varying the training trigger strength $\alpha$ against a fixed test trigger. Three phenomena emerge: (i) clean test accuracy increases with $\alpha$; (ii) attack success peaks at a finite $\alpha$ and then declines; and (iii) the most damaging trigger direction is the minimum eigenvector of the data covariance. We prove all three results in closed form for the squared loss, and extend (i) and (ii) to general convex GLM losses via a Gaussian-proxy fixed-point system. We identify a finite-sample noise floor proportional to $\kappa$ as the mechanism behind (i), invisible to classical $n \gg p$ analysis. Experiments on CIFAR-10 and Gaussian surrogates match the theory closely; ResNet-18 experiments show the same phenomena beyond the convex setting.

---

📖 [Read original article](https://arxiv.org/abs/2605.22481)