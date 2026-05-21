---
title: "Neural Estimation of Pairwise Mutual Information in Masked Discrete Sequence Models"
date: "2026-05-21"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20187"
author: "Jai Sharma, Yifan Wang, Bryan Li"
categories: ["cs.LG", "cs.AI", "cs.IT", "math.IT"]
---

arXiv:2605.20187v1 Announce Type: new Abstract: Understanding dependencies between variables is critical for interpretability and efficient generation in masked diffusion models (MDMs), yet these models primarily expose marginal conditional distributions and do not explicitly represent inter-variable dependence. We propose a neural framework for estimating pairwise conditional mutual information (MI) directly from the hidden states of a pretrained MDM, using ground-truth MI computed from the model's own conditional distributions for supervision. The resulting estimator captures the model's internal belief about dependency structure and predicts the full MI matrix in a single forward pass, enabling MI-guided parallel decoding by identifying conditionally independent subsets of variables. We evaluate our approach on Sudoku and protein sequence generation with ESM-C, where the MI maps recover known structural constraints and enable a 3-5x magnitude reduction in inference-time forward passes compared to sequential decoding, while preserving generative quality and outperforming entropy-based parallelization methods.

---

📖 [Read original article](https://arxiv.org/abs/2605.20187)