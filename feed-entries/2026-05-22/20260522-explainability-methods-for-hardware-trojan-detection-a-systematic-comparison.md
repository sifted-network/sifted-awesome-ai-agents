---
title: "Explainability Methods for Hardware Trojan Detection: A Systematic Comparison"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.18696"
author: "Paul Whitten, Francis Wolff, Chris Papachristou"
categories: ["cs.LG"]
---

arXiv:2601.18696v4 Announce Type: replace Abstract: Hardware trojans are malicious circuits which compromise the functionality and security of an integrated circuit (IC). These circuits are manufactured directly into the silicon and cannot be fixed by security patches like software. The solution would require a costly product recall by replacing the IC and hence, early detection in the design process is essential. Hardware detection at best provides statistically based solutions with many false positives and false negatives. These detection methods require more thorough explainable analysis to filter out false indicators. Existing explainability methods developed for general domains like image classification may not provide the actionable insights that hardware engineers need. A question remains: How do domain-aware property analysis, model-agnostic case-based reasoning, and model-agnostic feature attribution techniques compare for hardware security applications? This work compares three categories of explainability for gate-level hardware trojan detection on the Trust-Hub benchmark dataset: (1) domain-aware property-based analysis of 31 circuit-specific features derived from gate fanin patterns, flip-flop distances, and primary Input/Output (I/O) connectivity; (2) model-agnostic case-based reasoning using k-nearest neighbors for precedent-based explanations; and (3) model-agnostic feature attribution methods (Local Interpretable Model-agnostic Explanations (LIME), SHapley Additive exPlanations (SHAP), gradient) that provide generic importance scores without circuit-level context.

---

📖 [Read original article](https://arxiv.org/abs/2601.18696)