---
title: "Graph Autoencoder for Process Monitoring"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.03004"
author: "Xiangrui Zhang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2602.03004v2 Announce Type: replace-cross Abstract: To improve the reliability and interpretability of industrial process monitoring, this article proposes a Causal Graph Spatial-Temporal Autoencoder (CGSTAE). The network architecture of CGSTAE combines two components: a correlation graph structure learning module based on spatial self-attention mechanism (SSAM) and a spatial-temporal encoder-decoder module utilizing graph convolutional long-short term memory (GCLSTM). The SSAM learns correlation graphs by capturing dynamic relationships between variables, while a novel three-step causal graph structure learning algorithm is introduced to derive a causal graph from these correlation graphs. The algorithm leverages a reverse perspective of causal invariance principle to uncover the invariant causal graph from varying correlations. The spatial-temporal encoder-decoder, built with GCLSTM units, reconstructs time-series process data within a sequence-to-sequence framework. The proposed CGSTAE enables effective process monitoring and fault detection through two statistics in the feature space and residual space. Finally, we validate the effectiveness of CGSTAE in process monitoring through the Tennessee Eastman process and a real-world air separation process.

---

📖 [Read original article](https://arxiv.org/abs/2602.03004)