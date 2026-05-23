---
title: "Stabilising Explainability Fragility in Cybersecurity AI: The Impact and Mitigation of Multicollinearity in Public Benchmark Datasets"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22529"
author: "Ioannis J. Vourganas, Anna Lito Michala"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22529v1 Announce Type: cross Abstract: This paper investigates a unexplored yet impactful vulnerability in AI explainability used in intrusion detection (IDS): multicollinearity-induced instability. Despite extensive reliance on post-hoc explainability tools such as SHAP or LIME, the impact of correlated features on explanation robustness is not evaluated. We introduce a formal theorem stating that multicollinearity inflates attribution variance. This demonstrates that explanations and feature importances are non-identifiable under multicollinearity. A suite of comprehensive experiments validates the theorem on a representative benchmark dataset, UNSW-NB15. Four widely used families of models are evaluated, including linear, tree-based, kernel, and neural, across full and pruned feature sets based on VIF and correlation thresholding. We propose the novel metric of Explanability Fragility Score and two novel methods to mitigate it with variable integration complexity. CAA-Filtering focuses on stabilising explanations by grouping attributions of trained models. SHARP is a novel training-time regularisation framework that penalises attribution instability, enabling controllable and monotonic improvement of explainability stability. The findings support stable predictive performance, using Kendall's {\tau} to quantify instability across bootstrapped explanations. This work has direct implications for the trustworthiness and reproducibility of XAI in security-critical contexts, and motivates incorporating multicollinearity mitigations into the IDS pipelines, providing a set of guidelines for practitioners.

---

📖 [Read original article](https://arxiv.org/abs/2605.22529)