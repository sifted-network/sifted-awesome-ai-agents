---
title: "CASCADE Conformal Prediction: Uncertainty-Adaptive Prediction Intervals for Two-Stage Clinical Decision Support"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20468"
author: "Ricardo Diaz-Rincon, Muxuan Liang, Adolfo Ramirez-Zamora, Benjamin Shickel"
categories: ["cs.LG", "stat.ME", "stat.ML"]
---

arXiv:2605.20468v1 Announce Type: new Abstract: Effective medication management in Parkinson's Disease (PD) is challenging due to heterogeneous disease progression, variable patient response, and medication side effects. While AI models can forecast levodopa equivalent daily dose (LEDD) as a measure of medication needs, standard uncertainty quantification often fails to communicate the reliability of these predictions, treating high and low confidence clinical decisions identically. We introduce CASCADE (Calibrated Adaptive Scaling via Conformal And Distributional Estimation), a novel conformal prediction framework that propagates epistemic uncertainty from a screening classifier to adapt downstream predictions. Unlike standard conformal methods that rely on auxiliary residual regression, we leverage epistemic uncertainty from a primary classification task (identifying whether a medication change is needed) to dynamically scale the prediction intervals of a secondary regression task (predicting how much change). By mapping Venn-Abers multi-probabilistic uncertainty directly to non-conformity scores, our framework achieves continuous risk adaptation. We demonstrate that this ``cascade effect'' produces highly efficient intervals for confident patients (38.9% narrower than standard conformal baselines) while automatically expanding intervals to ensure robust coverage for uncertain cases, bridging the gap between discrete clinical decision-making and continuous dose forecasting in PD.

---

📖 [Read original article](https://arxiv.org/abs/2605.20468)