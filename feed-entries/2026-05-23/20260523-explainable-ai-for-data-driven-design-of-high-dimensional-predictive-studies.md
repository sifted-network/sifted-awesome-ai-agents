---
title: "Explainable AI for Data-Driven Design of High-Dimensional Predictive Studies"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22243"
author: "Junyu Yan, Damian Machlanski, Kurt Butler, Panagiotis Dimitrakopoulos, Ewen M Harrison, Bruce Guthrie, Sotirios A Tsaftaris"
categories: ["cs.LG", "cs.AI", "stat.AP"]
---

arXiv:2605.22243v1 Announce Type: cross Abstract: Predictive modelling is important for health data analysis and data-driven clinical decision-making. However, predictive studies are challenging to design optimally by hand when tens or even hundreds of features require selection, transformation, or interaction modelling. While complex machine learning models offer high performance, their "black-box" nature limits the clinical trust, transparency, and interpretability required for decision-making. We developed and evaluated an Exploratory AI Recommender that provides data-driven recommendations to improve predictive performance of existing interpretable statistical models. The developed framework uses flexible AI modelling to capture complex data patterns and explainable AI techniques to translate the patterns into three recommendation types: feature exclusion, non-linear terms, and feature interactions. We evaluated the framework by comparing predictive performance of a baseline (i.e., no interactions or non-linear terms) Cox Proportional Hazards (CPH) model against an augmented CPH incorporating recommendations suggested by our method. The primary analysis predicts the time to the first occurrence of a fall or related injury in 245,614 patients. Our method recommended excluding 23 features, including non-linear terms for two features, and including 221 suggested feature interactions. The C-index improved from 0.805 (95% CI 0.798-0.812) to 0.815 (95% CI 0.809-0.822), and so did calibration (intercept: -0.006 to 0.003; slope: 1.063 to 0.950). All recommendations were supported by existing literature. The method also proved effective on two additional public datasets, demonstrating wider applicability. The proposed Exploratory AI Recommender demonstrates the potential of explainable AI and data-driven study design to improve the process of developing, and the performance of high-dimensional transparent predictive models.

---

📖 [Read original article](https://arxiv.org/abs/2605.22243)