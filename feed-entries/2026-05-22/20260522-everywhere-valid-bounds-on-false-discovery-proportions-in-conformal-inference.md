---
title: "Everywhere Valid Bounds on False Discovery Proportions in Conformal Inference"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20726"
author: "Ziang Song, Ying Jin, Emmanuel J. Cand\\`es"
categories: ["stat.ME", "cs.LG", "stat.ML"]
---

arXiv:2605.20726v1 Announce Type: cross Abstract: Modern applications of conformal inference to multiple testing problems, such as outlier detection and candidate selection, often involve selecting test samples whose conformal p-values fall below a threshold. The quality of such methods is often measured by the false discovery proportion (FDP), defined as the fraction of incorrect selections. Existing approaches typically control the expected value of the FDP, using methods such as the Benjamini-Hochberg procedure. This approach fails to provide high-probability bounds on the realized false discovery proportion and invalidates statistical guarantees if the rejection threshold is selected after inspecting the data. This paper establishes finite-sample, distribution-free upper bounds on the FDP that hold simultaneously over all possible rejection thresholds, enabling arbitrary post hoc selection of the threshold. Simultaneous validity is achieved by constructing a high-probability envelope for the empirical distribution function of null conformal p-values by sampling from their joint distribution. Furthermore, our framework allows practitioners to modulate the envelope's shape, thereby producing tight bounds in rejection regions of primary interest. We use this flexible approach to derive simultaneous FDP upper bounds for both outlier detection and conformal selection. We demonstrate through synthetic and real-data experiments that the resulting bounds are both valid and substantially less conservative than those derived from existing approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.20726)