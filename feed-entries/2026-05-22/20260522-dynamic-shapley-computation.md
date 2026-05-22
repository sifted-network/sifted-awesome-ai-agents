---
title: "Dynamic Shapley Computation"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20620"
author: "Xuan Yang, Hsi-Wen Chen, Ming-Syan Chen, Jian Pei"
categories: ["cs.LG", "cs.DB", "cs.GT"]
---

arXiv:2605.20620v1 Announce Type: new Abstract: Shapley-based data valuation provides a principled way to quantify the contribution of training data, but its high computational cost makes it impractical in dynamic settings where tasks and training players evolve. Existing methods treat Shapley computation as a one-shot process and collapse contributions into aggregated scores, preventing reuse and requiring recomputation under any change. We introduce a new perspective that represents Shapley values as a player-by-task matrix and formulates dynamic valuation as a structured matrix maintenance problem. We exploit the fact that each task depends on a small subset of training players and that similar tasks yield similar valuations, leading to utility locality and coalition locality. Based on these insights, we propose D-Shap, a dynamic valuation framework that enables efficient updates by modifying only a small portion of the matrix: new task valuations are inferred via structure-aware interpolation, while updates induced by new players are confined to affected local matrix blocks. To eliminate the need for pre-specified evaluation tasks, we introduce self-valuation, which constructs the initial matrix directly from training data, supported by scalable subset reuse and coverage-aware anchor selection. Experiments across diverse models show that D-Shap performs task updates in milliseconds and reduces the cost of player updates by up to three orders of magnitude, while achieving valuation quality competitive with full recomputation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20620)