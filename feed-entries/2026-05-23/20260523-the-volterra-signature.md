---
title: "The Volterra signature"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.04525"
author: "Paul P. Hager, Fabian N. Harang, Luca Pelizzari, Samy Tindel"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2603.04525v2 Announce Type: replace-cross Abstract: Modern approaches for learning from non-Markovian time series, such as recurrent neural networks, neural controlled differential equations or transformers, typically rely on implicit memory mechanisms that can be difficult to interpret or to train over long horizons. We propose the \emph{Volterra signature} $\mathrm{VSig}(x;K)$ as a principled, explicit feature representation for history-dependent systems. By developing the input path $x$ weighted by a temporal kernel $K$ into the tensor algebra, we leverage the associated Volterra--Chen identity to derive rigorous learning-theoretic guarantees. Specifically, we prove an \emph{injectivity} statement (identifiability under augmentation) that leads to a \emph{universal approximation} theorem on the infinite dimensional path space, which in certain cases is achieved by \emph{linear functionals} of $\mathrm{VSig}(x;K)$. Moreover, we demonstrate applicability of the \emph{kernel trick} by showing that the inner product associated with Volterra signatures admits a closed characterization via a two-parameter integral equation, enabling numerical methods from PDEs for computation. For a large class of exponential-type kernels, $\mathrm{VSig}(x;K)$ solves a linear state-space ODE in the tensor algebra. Combined with inherent invariance to time reparameterization, these results position the Volterra signature as a robust, computationally tractable feature map for data science. We demonstrate its efficacy in dynamic learning tasks on real and synthetic data, where it consistently improves classical path signature baselines.

---

📖 [Read original article](https://arxiv.org/abs/2603.04525)