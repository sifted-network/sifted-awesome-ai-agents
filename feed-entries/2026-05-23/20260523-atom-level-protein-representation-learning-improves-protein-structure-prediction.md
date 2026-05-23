---
title: "Atom-level Protein Representation Learning Improves Protein Structure Prediction"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22133"
author: "Taewon Kim, Hyosoon Jang, Hyunjin Seo, Seonghwan Seo, Hyeongwoo Kim, Wonho Zhung, Mingyeong Shin, Wooyoun Kim, Sungsoo Ahn"
categories: ["q-bio.BM", "cs.AI"]
---

arXiv:2605.22133v1 Announce Type: cross Abstract: Recent advances in generative modeling show that pretrained representations can improve generation as conditioning features or alignment targets. Motivated by this, we study protein representations for predicting structures beyond conventional function annotation. We propose TriProRep, a structure-aware pretraining method that jointly models three aligned residue-level views: amino-acid identity, backbone geometry, and local full-atom geometry, discretely encoded via VQ-VAE tokenizers. By pretraining to recover original tokens from generator-corrupted views, TriProRep learns to distinguish plausible but incorrect cross-view augmentations from the original protein. We further introduce RepSP, a benchmark for evaluating protein representations in structure-predictive settings. RepSP tests three uses of representations: homodimer co-folding from apo-chain representations, residue-level prediction of homodimer-derived interaction properties, and representation-aligned monomer structure prediction. Across these tasks, TriProRep improves over sequence-only and prior structure-aware representation models, while maintaining competitive performance on conventional benchmarks.

---

📖 [Read original article](https://arxiv.org/abs/2605.22133)