---
title: "Mechanistic Interpretability for Learning Assurance of a Vision-Based Landing System"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20607"
author: "Romeo Valentin, Olivia Beyer Bruvik, Marc R. Schlichting, Mykel J. Kochenderfer"
categories: ["cs.LG", "cs.CV", "cs.RO"]
---

arXiv:2605.20607v1 Announce Type: new Abstract: EASA's learning-assurance guidance requires data-driven aviation systems to build and monitor their own situation representation, yet for neural networks the technical means to provide such evidence remain an open problem. We address this gap for a vision-based aircraft landing system: we propose that a minimally assurable model must at least be shown to separate content from style in its own situation representation. Showing that the model's predictions then rely largely on the contentful representation components leads to a concrete assurance path. To demonstrate this assurance path on a concrete model we train a vision transformer model for runway keypoint regression on the LARDv2 dataset. The model, which acts as the subject for our assurance demonstration, produces per-patch embeddings that we decompose into interpretable atoms via K-SVD sparse dictionary learning. A qualitative visualization confirms that contentful atoms track task-relevant runway structure and stylistic atoms track domain-specific appearance, and the regression head is shown to place almost all of its linear weight on contentful atoms. We further build on the content/style separation and define out-of-model-scope (OOMS) detection, a novel runtime assurance approach directly monitoring the model's situation representation. OOMS monitoring is complementary to operational design domain and output-space out-of-distribution monitoring and addresses concrete requirements of the recent EASA guidance. By directly analyzing a model's situation representation both at test time and runtime, this work delivers the first concrete piece of the representation-level evidence that EASA learning-assurance guidance demands, and points to mechanistic interpretability as a practical building block of future aviation safety cases.

---

📖 [Read original article](https://arxiv.org/abs/2605.20607)