---
title: "I-SAFE: Wasserstein Coherence Metrics for Structural Auditing of Scientific AI Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21731"
author: "Barbara Tarantino, Gennaro Auricchio, Paolo Giudici"
categories: ["cs.LG"]
---

arXiv:2605.21731v1 Announce Type: new Abstract: Deep learning models are increasingly used in scientific prediction tasks where strong benchmark performance is often interpreted as evidence of scientifically meaningful behavior. This interpretation is fragile, as models may exploit shortcut features, dataset-specific regularities, or distributional biases that are predictive on held-out data but not aligned with domain-relevant structure. To address this limitation, we introduce the \textsc{I-SAFE} (Interventional Secure, Accurate, Fair and Explainable) framework, a post-hoc distributional auditing framework for scientific AI models centered on the Wasserstein Coherence Metric (WCM). Given a trained black-box predictor and an external structural prior encoding domain knowledge about task-relevant input structure, \textsc{I-SAFE} evaluates raw model outputs under structurally guided perturbations of the input. The proposed audit measures output-distribution coherence through three complementary metrics: a Quantile-Based Metric (QBM) for location-level coherence, the WCM for ordinal coherence, and a translation-invariant WCM variant for shape coherence. We instantiate \textsc{I-SAFE} on drug--target interaction (DTI) prediction using the Davis kinase benchmark, KLIFS (Kinase--Ligand Interaction Fingerprints and Structures) binding-pocket annotations, and three sequence-based DTI models: DeepConvDTI, DeepDTA, and TAPB. Although the models operate in a comparable predictive regime, \textsc{I-SAFE} reveals substantially different distributional response profiles, a distinction invisible to accuracy-based evaluation. The framework is model-agnostic and applicable to any domain where inputs admit a structured decomposition and an external prior is available.

---

📖 [Read original article](https://arxiv.org/abs/2605.21731)