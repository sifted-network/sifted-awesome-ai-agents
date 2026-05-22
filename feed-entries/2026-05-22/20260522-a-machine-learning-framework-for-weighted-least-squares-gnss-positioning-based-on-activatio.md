---
title: "A Machine Learning Framework for Weighted Least Squares GNSS Positioning based on Activation Functions"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21461"
author: "Pin-Hsun Lee, Harry Leib"
categories: ["cs.LG"]
---

arXiv:2605.21461v1 Announce Type: new Abstract: Global Navigation Satellite Systems (GNSS) are widely used to provide position, velocity, and timing (PVT) information for various applications, including transportation, location-based communication services, and intelligent agriculture. In urban canyons, high-rise buildings and narrow streets can cause signal obstruction, non-line-of-sight (NLOS) reception, and multipath effects that introduce errors in GNSS pseudorange measurements. Although multi-constellations GNSS effectively increase the number of available satellites, the inclusion of degraded signals can lead to severe positioning errors. This study proposes a machine learning framework for the weighted least squares (WLS) algorithm incorporating activation functions to enhance positioning accuracy. Several signal quality indicators are employed as training features for ensemble learning algorithms to identify poor quality signals by providing quality scores. Then, activation functions are employed to transform the machine learning predicted scores to appropriate weights for WLS positioning. To evaluate the performance of our approach, experiments are conducted using real-world datasets from Hong Kong and Tokyo urban areas. Comparative analysis of activation functions reveals that sigmoid functions consistently yield the greatest improvements with different machine learning algorithms and GNSS constellation configurations. The proposed algorithm demonstrates substantial reductions in positioning errors for both single- and multiconstellation scenarios. Furthermore, our results indicate that the proposed algorithm exhibits strong geographical transferability. The proposed algorithm maintains comparable level of performance when trained on data from other regions with similar levels of urbanization.

---

📖 [Read original article](https://arxiv.org/abs/2605.21461)