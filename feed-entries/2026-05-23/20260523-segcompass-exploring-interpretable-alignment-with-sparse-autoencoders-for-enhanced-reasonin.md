---
title: "SegCompass: Exploring Interpretable Alignment with Sparse Autoencoders for Enhanced Reasoning Segmentation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22658"
author: "Zhenyu Lu, Liupeng Li, Jinpeng Wang, Haoqian Kang, Yan Feng, Ke Chen, Yaowei Wang"
categories: ["cs.CV", "cs.LG", "cs.MM", "eess.IV"]
---

arXiv:2605.22658v1 Announce Type: cross Abstract: While large language models provide strong compositional reasoning, existing reasoning segmentation pipelines fail to transparently connect this reasoning to visual perception. Current methods, such as latent query alignment, are end-to-end yet opaque "black boxes". Conversely, textual localization readout is merely readable, not truly interpretable, often functioning as an unconstrained post-hoc step. To bridge this interpretability gap, we propose SegCompass, an end-to-end model that leverages a Sparse Autoencoder (SAE) to forge an explicit, interpretable, and differentiable alignment pathway. Given an image-instruction pair, SegCompass first generates a chain-of-thought (CoT) trace. The core of our method is an SAE that maps both the CoT and visual tokens into a shared, high-dimensional sparse concept space. A query codebook selects salient concepts from this space, which are then spatially grounded by a slot mapper into a multi-slot heatmap that guides the final mask decoder. The entire model is trained jointly, unifying reinforcement learning for the reasoning path with standard segmentation supervision. This SAE-driven interface provides a "white-box" connection that is significantly more traceable than latent queries and more coherent than textual readouts. Extensive experiments on five challenging benchmarks demonstrate that SegCompass matches or surpasses state-of-the-art performance. Crucially, our visual and quantitative analyses show a strong correlation between the quality of the learned sparse concepts and final mask accuracy, confirming that SegCompass achieves superior results through its enhanced and inspectable alignment. Code is available at https://github.com/ZhenyuLU-Heliodore/SegCompass.

---

📖 [Read original article](https://arxiv.org/abs/2605.22658)