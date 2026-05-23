---
title: "How does Chain of Thought decompose complex tasks?"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.08872"
author: "Amrut Nadgir, Vijay Balasubramanian, Pratik Chaudhari"
categories: ["cs.LG", "cond-mat.dis-nn", "cond-mat.stat-mech"]
---

arXiv:2604.08872v2 Announce Type: replace Abstract: Many language tasks can be modeled as classification problems where a large language model (LLM) is given a prompt and selects one among many possible answers. We show that the classification error in such problems scales as a power law in the number of classes. This has a dramatic consequence: the prediction error can be reduced substantially by splitting the overall task into a sequence of smaller classification problems, each with the same number of classes ("degree"). This tree-structured decomposition models chain-of-thought (CoT). It has been observed that CoT-based predictors perform better when they "think", i.e., when they develop a deeper tree, thus decomposing the problem into a larger number of steps. We identify a critical threshold for the degree, below which thinking is detrimental, and above which there exists an optimal depth that minimizes the error. It is impossible to surpass this minimal error by increasing the depth of thinking.

---

📖 [Read original article](https://arxiv.org/abs/2604.08872)