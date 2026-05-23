---
title: "Position: Graph Condensation Needs a Reset -- Move Beyond Full-dataset Training and Model-Dependence"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.18893"
author: "Mridul Gupta, Samyak Jain, Vansh Ramani, Hariprasad Kodamana, Sayan Ranu"
categories: ["cs.LG"]
---

arXiv:2605.18893v2 Announce Type: replace Abstract: Graph Neural Networks (GNNs) are powerful tools for learning from graph-structured data, but their scalability is increasingly strained by the size of real-world graphs in domains like recommender systems, fraud detection, and molecular biology. Graph condensation -- the task of generating a smaller synthetic graph that retains the performance of models trained on the original -- has emerged as a promising solution. However, the dominant approach of gradient matching introduces a fundamental contradiction: it requires training on the full dataset to create the compressed version, thereby undermining the goal of efficiency. Worse still, these methods suffer from high computational overhead, poor generalization across GNN architectures, and brittle reliance on specific model configurations. Equally concerning is the community's reliance on misleading evaluation protocols such as node compression ratios, which fail to reflect true resource savings, condensation overhead, and illusory application to neural architecture search. These shortcomings are not incidental -- they are systemic, and they obstruct meaningful progress. In this position paper, we argue that graph condensation, in its current form, needs a reset. We call for moving beyond full-dataset training and model-dependent design, and instead advocate for methods that are lightweight, architecture-agnostic, and practically deployable. By identifying key methodological flaws and outlining concrete research directions, we aim to reorient the field toward approaches that deliver on the true promise of condensation: efficient, generalizable, and usable GNN training at scale.

---

📖 [Read original article](https://arxiv.org/abs/2605.18893)