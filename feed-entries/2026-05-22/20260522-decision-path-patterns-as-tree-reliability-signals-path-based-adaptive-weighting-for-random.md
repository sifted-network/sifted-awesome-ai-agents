---
title: "Decision-Path Patterns as Tree Reliability Signals: Path-based Adaptive Weighting for Random Forest Classification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20716"
author: "Youngjoon Park"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2605.20716v2 Announce Type: new Abstract: Random forests aggregate trees by averaging leaf class distributions with uniform per-tree weight, which flattens local tree expertise into a globally averaged boundary. To refine this boundary locally, we look for signals in how individual trees navigate the feature space around each sample. We observe that the structural pattern of each tree's root-to-leaf decision path -- where and how often the dominant class label flips along it -- carries such a signal, conditional on the tree's final decision and the regional context where the sample lies. We propose a class-conditional ratio weighting that exploits this signal while guaranteeing zero expected class bias by construction, refining the ensemble decision near the boundary without trading one class against another. On 30 binary classification benchmarks (30 repeats), the proposed method yields a statistically significant accuracy improvement over RF (Wilcoxon p = 0.007), while weighted RF and the KNORA family do not reach significance (all p > 0.5). The gain is small ({\Delta}acc = +0.0011) but consistent across forest sizes from 100 to 1,000 trees, and regresses neither class (majority 0/30, minority 2/30) -- unlike KNORA-Eliminate, which lifts minority recall at the cost of majority regressions on 8/30 datasets.

---

📖 [Read original article](https://arxiv.org/abs/2605.20716)