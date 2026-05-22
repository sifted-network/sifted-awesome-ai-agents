---
title: "AMAR: Lightweight Attention-Based Multi-User Activity Recognition from Wi-Fi CSI"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20649"
author: "Amirhossein Mohammadi, Hina Tabassum"
categories: ["eess.SP", "cs.AI", "cs.LG"]
---

arXiv:2605.20649v1 Announce Type: cross Abstract: Wi-Fi-based human activity recognition (HAR) has emerged as a promising approach for contactless sensing, leveraging channel state information (CSI) collected from wireless transceivers. While existing studies have primarily concentrated on single-user scenarios, real-world deployments often involve multi-user settings where concurrent users' movements induce overlapping CSI patterns that challenge conventional classification methods. To address this limitation, this paper introduces an attention-based multi-user activity recognition (AMAR) framework that formulates HAR as a set prediction problem. The transformer-based architecture in AMAR leverages learnable query embeddings acting as specialized activity detectors, enabling the simultaneous identification of multiple activities from composite CSI representations. Moreover, to address deployment constraints, AMAR is designed in an edge-cloud split architecture form where lightweight convolutional networks on edge devices perform initial feature extraction, followed by residual vector quantization that achieves substantial bandwidth reduction while preserving activity-discriminative information. The cloud component performs final activity prediction through attention-based set matching, enabling the system to handle varying occupancy levels. Across classroom, meeting-room, and empty-room environments, on average AMAR nearly doubles the rate of perfectly predicting all concurrent activities compared to the best baseline. Moreover, it achieves an $F_1$-score of 53.4% compared to 45.6% for the best benchmark, and reduces occupancy estimation error by 74%, while minimizing bandwidth substantially.

---

📖 [Read original article](https://arxiv.org/abs/2605.20649)