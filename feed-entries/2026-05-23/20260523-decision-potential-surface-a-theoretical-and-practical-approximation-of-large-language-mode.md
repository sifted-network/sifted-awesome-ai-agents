---
title: "Decision Potential Surface: A Theoretical and Practical Approximation of Large Language Model Decision Boundary"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.03271"
author: "Zi Liang, Zhiyao Wu, Haoyang Shang, Yulin Jin, Qingqing Ye, Huadi Zheng, Peizhao Hu, Haibo Hu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2510.03271v2 Announce Type: replace-cross Abstract: Decision boundary, the subspace of inputs where a machine learning model assigns equal classification probabilities to two classes, is pivotal in revealing core model properties and interpreting behaviors. While analyzing the decision boundary of large language models (LLMs) has attracted increasing attention recently, constructing it for mainstream LLMs remains computationally infeasible due to the enormous sequence-level output spaces and the autoregressive nature of LLMs. To address this issue, in this paper we propose Decision Potential Surface (DPS), a new notion for analyzing the properties of LLM decisions. DPS is derived from the confidence in distinguishing different classes for each input, which naturally captures the potential of the decision boundary. We prove that the zero-height isohypse in DPS is equivalent to the decision boundary of an LLM, with enclosed regions representing decision regions. By leveraging DPS, for the first time in the literature, we propose a practical decision boundary approximation algorithm, namely K-DPS, which only requires only K finite sequence samples to approximate an LLM's decision boundary with negligible error. We theoretically derive the upper bounds for the absolute error, expected error, and the error concentration between K-DPS and the ideal DPS, demonstrating that such errors can be traded off against sampling times.

---

📖 [Read original article](https://arxiv.org/abs/2510.03271)