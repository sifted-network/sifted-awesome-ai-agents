---
title: "PhylaFlow: Hybrid Flow Matching in Billera-Holmes-Vogtmann Tree Space for Phylogenetic Inference"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21859"
author: "Yasha Ektefaie, Leo Cui, Shrey Jain, Marinka Zitnik, Pardis Sabeti"
categories: ["q-bio.PE", "cs.LG", "q-bio.QM"]
---

arXiv:2605.21859v1 Announce Type: cross Abstract: Phylogenetic trees are hybrid objects: branch lengths vary continuously, while topologies change discretely through edge contractions and expansions. Billera-Holmes-Vogtmann (BHV) tree space provides a canonical geometry for this structure, representing each resolved topology as a Euclidean orthant and topological changes as motion across shared lower-dimensional boundaries. We introduce PhylaFlow, a hybrid flow-matching model that learns posterior-basin transport in BHV tree space. PhylaFlow is trained on BHV geodesic paths from random starting trees to short-run posterior samples, coupling continuous branch-length motion within orthants with learned boundary events and discrete topology transitions. We evaluate the learned geometry operationally: if the flow reaches posterior-relevant regions, finite-budget Bayesian refinement initialized from, or guided by, its terminal trees should recover posterior-supported topologies more efficiently. Across DS1-DS8 phylogenetic posterior benchmarks, PhylaFlow substantially reduces initial Tree-KL relative to classical initializers. After finite-budget MrBayes refinement, direct PhylaFlow improves early and intermediate topology-recovery trajectories on most datasets, while split-guided PhylaFlow-MCMC obtains the strongest hard-case results. The best PhylaFlow variant outperforms short-warmup on seven of eight datasets and PhyloGFN on five of eight under the same refinement budget. In a joint sequence-conditioned experiment, sequence embeddings steer posterior split recovery, although exact posterior topology recovery remains preliminary. These results show that hybrid flow matching can learn actionable transport in BHV tree space and provide a geometry-aware proposal mechanism for Bayesian phylogenetic inference.

---

📖 [Read original article](https://arxiv.org/abs/2605.21859)