---
title: "ChronoVAE-HOPE: Beyond Attention -- A Next-Generation VAE Foundation Model for Specialized Time Series Classification"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22684"
author: "Jos\\'e Alberto Rodr\\'iguez, Luis Balderas, Miguel Lastra, Antonio Arauzo-Azofra, Jos\\'e M. Ben\\'itez"
categories: ["cs.LG"]
---

arXiv:2605.22684v1 Announce Type: new Abstract: Time Series Foundation Models (TSFMs) have become a new component of the state-of-the-art in general time series forecasting. However, adapting them to specialized classification tasks remains constrained by two interconnected challenges: the quadratic cost of standard attention mechanisms and the inability to disentangle the structural components underlying time series variability. This technical report introduces ChronoVAE-HOPE, a next-generation TSFM that reconciles massive generalization with structured latent representation for time series classification. The core of the proposal is a Variational Autoencoder (VAE) framework built upon the HOPE Block, which replaces quadratic attention with a dual-memory system: Titans modules for dynamic short-term retention and a Continuum Memory System (CMS) for the abstraction of long-term historical context. A key architectural novelty is the disentangled latent space, which factorizes representations into independent trend and seasonal components via dedicated encoder heads and separate decoder pathways. ChronoVAE-HOPE undergoes self-supervised pre-training on the Monash archive, combining a Masked Time Series Modeling (MTSM) auxiliary objective with a disentangled VAE reconstruction loss. The pre-trained encoder is subsequently frozen and used to generate fixed-length embeddings for downstream classification on the UCR benchmark datasets. Empirical results demonstrate strong performance across diverse temporal domains, particularly in settings characterized by strict causal structure. ChronoVAE-HOPE establishes a robust and interpretable framework for the adaptation of foundation models to time series classification through structured generative representations.

---

📖 [Read original article](https://arxiv.org/abs/2605.22684)