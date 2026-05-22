---
title: "WaveGraphNet: Physics-Consistent Guided-Wave Damage Localization through Coupled Inverse-Forward Graph Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20311"
author: "Vinay Sharma, Aditya Bharade, Olga Fink"
categories: ["cs.LG"]
---

arXiv:2605.20311v1 Announce Type: new Abstract: Guided-wave structural health monitoring enables damage localization in composite plates using sparse networks of bonded piezoelectric transducers. However, inferring the spatial location of defects from pitch-catch measurements remains weakly constrained when only a limited set of damage locations is available for training. As a result, models trained to predict defect locations may perform well on seen cases but generalize poorly to unseen regions of the structure. This paper proposes WaveGraphNet, a coupled inverse--forward graph learning framework for guided-wave damage localization in Carbon Fiber Reinforced Polymer (CFRP) plates. The sensing layout is explicitly modeled as a graph, where transducers are represented as nodes and measured propagation paths define the graph connectivity. An inverse branch maps graph-structured spectral descriptors of differential guided-wave responses to a damage location, while a forward branch predicts the path-wise energy-deviation patterns of measured wave responses associated with a candidate location. During training, the forward branch serves as a physics-consistent regularizer, discouraging location estimates that are numerically plausible but inconsistent with the measured redistribution of wave-response energy. This coupling encourages agreement between inferred damage coordinates and the underlying wave propagation behavior. Within this benchmark, the proposed graph-based formulation provides a strong localization model for sparse guided-wave sensing and demonstrates improved robustness in extrapolation to held-out regions compared to both non-graph and graph baselines. These results highlight the potential of coupled inverse-forward graph learning as an effective strategy for guided-wave localization under limited spatial coverage.

---

📖 [Read original article](https://arxiv.org/abs/2605.20311)