---
title: "Training distribution determines the ceiling of drug-blind cancer sensitivity prediction"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20885"
author: "Taekyung Heo"
categories: ["cs.LG", "q-bio.QM"]
---

arXiv:2605.20885v1 Announce Type: new Abstract: Precision oncology requires predicting which drugs will suppress a specific tumor from its molecular profile, but drug-blind sensitivity prediction has plateaued despite increasingly complex drug representations. Here we show that this stagnation reflects a metric artifact rather than a representational bottleneck. The standard benchmark, global Pearson r, is dominated by between-drug potency differences that a trivial drug-mean predictor captures without any cell-specific learning. Per-drug Pearson r, which isolates within-drug cell ranking, reveals that no drug encoding improves over cell-only features across four independent datasets. A controlled experiment channeling mechanism-of-action identity as either a drug feature or a training-distribution constraint identifies the cause. Supplying MoA as a feature yields negligible benefit, whereas using it to stratify training raises per-drug r substantially for targeted kinase inhibitors, because pan-cancer co-training suppresses pathway-specific sensitivity signals. Mechanism-stratified training and response matching from pilot observations provide two deployable strategies that together recover the principal sources of predictive gain in drug-blind sensitivity prediction.

---

📖 [Read original article](https://arxiv.org/abs/2605.20885)