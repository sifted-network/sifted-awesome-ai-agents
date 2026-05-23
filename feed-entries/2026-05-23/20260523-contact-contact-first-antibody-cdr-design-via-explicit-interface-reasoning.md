---
title: "ConTact: Contact-First Antibody CDR Design via Explicit Interface Reasoning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21600"
author: "Mansoor Ahmed, Spencer VonBank, Nadeem Taj, Sujin Lee, Naila Jan, Murray Patterson"
categories: ["cs.LG"]
---

arXiv:2605.21600v1 Announce Type: new Abstract: Computational antibody CDR design methods condition on antigen structure to generate binding loops, yet existing architectures conflate two fundamentally distinct sub-problems: identifying which CDR positions will contact the antigen, and selecting amino acids at those positions. This conflation forces models to learn contact reasoning implicitly through uniform message passing, diluting antigen signal across all positions equally. We introduce ConTact, a contact-then-act architecture that explicitly decomposes CDR design into three cascaded stages: learning surface complementarity fingerprints, predicting CDR-antigen contacts, and injecting contact-gated antigen features into the sequence head. A distance-biased cross-attention module encodes geometric priors favoring spatial neighbors, while a contact-weighted cross-entropy loss concentrates gradient signal on binding-critical positions. On CHIMERA-Bench dataset, ConTact achieves the best structural quality (7% RMSD improvement over the next-best baseline), best epitope awareness (10% F1 score over GNN baselines), and competitive sequence recovery (AAR 0.38) among several CDR-H3 design baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.21600)