---
title: "Toward Understanding Adversarial Distillation: Why Robust Teachers Fail"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21999"
author: "Hongsin Lee, Hye Won Chung"
categories: ["cs.LG"]
---

arXiv:2605.21999v1 Announce Type: new Abstract: Adversarial Distillation aims to enhance student robustness by guiding the student with a robust teacher's soft labels within the min-max adversarial training framework, yet its success is notoriously inconsistent: a more robust teacher often fails to improve, or even harms, the student's robust generalization. In this paper, we identify a key mechanism of this teacher dependency: the misalignment between the teacher's supervisory confidence and the student's representational limitations on a consistent subset of training data -- the Robustly Unlearnable Set. We present a theoretical framework analyzing the feature learning dynamics of a two-layer neural network, demonstrating that this mismatch creates a dichotomy in distillation outcomes. We prove that when a teacher provides confident supervision on unlearnable samples, it compels the student to memorize spurious noise patterns that eventually overpower the learned robust signal, thereby driving robust overfitting. Conversely, a teacher that exhibits high uncertainty on these samples effectively suppresses noise memorization, allowing the student to rely solely on the learnable signal for robust generalization. We empirically validate our theory across both synthetic simulations and real-image classification datasets, confirming that robust overfitting is driven by the teacher's interaction with unlearnable samples. Finally, we demonstrate that a teacher's predictive entropy on unlearnable samples serves as a strong indicator of student robustness, validating our theoretical framework and offering a principled guideline for robust teacher selection.

---

📖 [Read original article](https://arxiv.org/abs/2605.21999)