---
title: "A Posterior-Predictive Variance Decomposition for Epistemic and Aleatoric Uncertainty in Wind Power Forecasting"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22390"
author: "Yinsong Chen, Samson S. Yu, Kashem M. Muttaqi"
categories: ["cs.LG"]
---

arXiv:2605.22390v1 Announce Type: new Abstract: Accurate wind power forecasting requires reliable uncertainty quantification, yet most existing methods report a single predictive uncertainty that conflates epistemic and aleatoric sources. This paper applies the law of total variance to the joint setting of heteroscedastic neural network regression and Bayesian posterior approximation, deriving an explicit decomposition of total uncertainty (TU) into aleatoric (AU) and epistemic (EU) components. The resulting estimators are compatible with standard posterior-approximation methods and with $\beta$-NLL training to regulate the mean--variance learning trade-off. A wind power--specific evaluation framework is proposed to validate disentanglement without access to ground-truth uncertainty labels, comprising three modules: controlled synthetic experiments to verify responses to heteroscedastic noise and distribution shift; data-property--driven validation on a real-world wind turbine SCADA dataset; and dataset-size scaling experiments to examine the predicted asymptotic behavior of EU. Across synthetic and real-world experiments, the decomposed AU and EU components respond in theoretically consistent directions to noise structure, distributional shift, and training-scale variation, supporting the theoretical consistency and operational utility of the proposed decomposition and evaluation protocol.

---

📖 [Read original article](https://arxiv.org/abs/2605.22390)