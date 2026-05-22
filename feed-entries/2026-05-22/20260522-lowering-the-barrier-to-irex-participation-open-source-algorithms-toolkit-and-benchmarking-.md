---
title: "Lowering the Barrier to IREX Participation: Open-Source Algorithms, Toolkit, and Benchmarking for Iris Recognition"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20735"
author: "Siamul Karim Khan, Patrick J. Flynn, Adam Czajka"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20735v1 Announce Type: cross Abstract: This paper proposes two new open-source iris recognition algorithms, providing both Python and IREX-compliant C++ implementations to be submitted to the official IREX X program. This work has two primary goals: (a) to conduct the first-ever assessment of open-source iris recognition solutions according to IREX testing protocols, and (b) to offer a model C++ submission that significantly facilitates the entry of other teams' open-source methods into the IREX evaluation. The new methods consist of two Neural Networks trained with: (i) Triplet loss with Batch-Hard Triplet mining (TripletIris), and (ii) ArcFace loss (ArcIris). The paper also provides open-source IREX-compliant C++ implementations of two existing methods: (a) an iris image filtering-based algorithm utilizing human saliency-driven kernels (HDBIF), and (b) a human-interpretable algorithm for detecting and comparing Fuchs' crypts (CRYPTS). Except for CRYPTS, which faced timing constraints during 1:N search, these methods have undergone the official IREX X evaluation and have also been assessed using several popular academic benchmarks: Quality-Face/Iris Research Ensemble, Warsaw-Biobase Post-Mortem Iris, CASIA-Iris-Thousand-V4, CASIA-Iris-Lamp-V4, IIT Delhi Iris Database, IIITD Contact Lens Iris Database, NDIris3D, and Notre Dame Variable Iris Image Quality Release 2. Finally, this paper also provides open-source models for iris segmentation and circle estimation that can be incorporated into any new iris recognition method.

---

📖 [Read original article](https://arxiv.org/abs/2605.20735)