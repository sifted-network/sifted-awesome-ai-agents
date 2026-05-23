---
title: "Detecting Atypical Clients in Federated Learning via Representation-Level Divergence"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22266"
author: "Cristian P\\'erez-Corral, Jose I. Mestre, Alberto Fern\\'andez-Hern\\'andez, Manuel F. Dolz, Enrique S. Quitana-Ort\\'i"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22266v1 Announce Type: cross Abstract: Federated learning enables collaborative training across distributed clients with heterogeneous data, but such heterogeneity often leads to unstable updates and degraded global performance. Moreover, in practical deployments, client updates may deviate from the expected behavior not only due to benign not i.i.d. distributions, but also due to distributional shifts or anomalous inputs, raising concerns about the reliability of the aggregation process. In this work, we propose a lightweight geometric signal to quantify the functional deviation of a client with respect to the global model. Instead of comparing model parameters or gradients, our approach measures how the local training of each client alters the activation-induced partition of the input space, evaluated on a shared probe set. This yields a permutation-invariant, interpretable metric of client--global divergence that captures differences in how data is processed by the model. We show that this signal effectively identifies clients that induce atypical functional changes, distinguishing stable yet heterogeneous clients from those whose updates significantly diverge from the global regime. As a result, the proposed metric provides a simple tool for monitoring client behavior and enabling risk-aware aggregation strategies in federated learning systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.22266)