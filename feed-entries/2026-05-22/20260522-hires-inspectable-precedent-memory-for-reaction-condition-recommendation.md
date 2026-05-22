---
title: "HiRes: Inspectable Precedent Memory for Reaction Condition Recommendation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21420"
author: "Shreyas Vinaya Sathyanarayana, Raja Sekhar Pappala, Deepak Warrier"
categories: ["cs.LG", "cs.AI", "q-bio.MN"]
---

arXiv:2605.21420v1 Announce Type: cross Abstract: Reaction condition recommendation sits immediately after retrosynthetic disconnection selection, and in practice, chemists require both accurate predictions and the precedents that justify them. We present HiRes (Hierarchical Reaction Representations), a retrieval-augmented condition recommendation system whose learned reaction space serves as both a classifier feature and an inspectable precedent memory. The model combines a graph encoder, transformation-aware cross-attention, multi-stream reaction fusion, and a k-NN retrieval layer. HiRes achieves state-of-the-art performance among primary-slot USPTO-Condition models, reaching Catalyst, Solvent, and Reagent top-1 accuracies (Acc@1) of 0.929, 0.534, and 0.530 respectively. It ties the best reported baseline on Catalyst while outperforming models such as REACON on Solvent and Reagent. Furthermore, paired bootstrap analysis demonstrates that integrating retrieval with learned condition heads provides statistically significant gains for solvent and reagent selection over purely parametric approaches. Ultimately, HiRes bridges the gap between predictive accuracy and chemical interpretability, offering a single representation that supplies both competitive recommendations and the concrete chemical precedents necessary for practical synthesis planning.

---

📖 [Read original article](https://arxiv.org/abs/2605.21420)