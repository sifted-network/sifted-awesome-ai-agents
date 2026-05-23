---
title: "Optimal Guarantees for Auditing R\\'enyi Differentially Private Machine Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21938"
author: "Benjamin D. Kim, Lav R. Varshney, Daniel Alabi"
categories: ["cs.LG", "cs.CR", "cs.IT", "math.IT"]
---

arXiv:2605.21938v1 Announce Type: new Abstract: We study black-box auditing for machine learning algorithms that claim R \ 'enyi differential privacy (RDP) guarantees. We introduce an auditing framework, based on hypothesis testing, that directly estimates R\'enyi divergence between neighboring executions using the Donsker-Varadhan (DV) variational estimator. Our analysis yields explicit and non-asymptotic confidence intervals for RDP auditing via class-restricted DV estimators, separating statistical estimation error from algorithmic privacy leakage. We prove matching minimax lower bounds showing that, up to logarithmic factors, our sample-complexity guarantees are information-theoretically optimal, thereby establishing the first optimal guarantees for auditing RDP via DV estimators. Empirically, we instantiate our framework for auditing DP-SGD in a fully black-box setting. Across MNIST and CIFAR-10, and over a wide range of privacy regimes, our auditors produce a strong overall improvement on empirical RDP lower bounds compared to prior state-of-the-art black-box methods especially at small and moderate R\'enyi orders where accurate auditing is most challenging.

---

📖 [Read original article](https://arxiv.org/abs/2605.21938)