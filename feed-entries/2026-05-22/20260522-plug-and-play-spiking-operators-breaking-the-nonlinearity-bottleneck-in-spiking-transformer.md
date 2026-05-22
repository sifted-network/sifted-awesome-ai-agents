---
title: "Plug-and-Play Spiking Operators: Breaking the Nonlinearity Bottleneck in Spiking Transformers"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20289"
author: "Xinzhe Yuan (IASM, Harbin Institute of Technology), Xiang Peng (IASM, Harbin Institute of Technology), Bin Gu (School of Artificial Intelligence, Jilin University), Huan Xiong (IASM, Harbin Institute of Technology)"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20289v1 Announce Type: cross Abstract: ANN-to-SNN conversion offers a practical, training-free route to spiking large language models. However, current pipelines primarily focus on spike-driven realizations for Transformer linear-algebra operations, while providing limited support for key nonlinear operators. This gap limits compatibility with neuromorphic-style execution constraints, where such nonlinearities typically require division, exponentiation, or norm computations that are not naturally supported by standard leaky integrate-and-fire dynamics. To solve this problem, we propose a plug-and-play framework that implements spike-friendly approximations for Transformer nonlinearities and integrates into existing ANN-to-SNN pipelines. Our method decomposes these nonlinear computations into three recurring primitives -- division, exponentiation, and $\ell_2$ norms -- and realizes them via population computation using LIF neuron groups, combined with lightweight bit-shift scaling to avoid floating-point arithmetic. By composing these primitives as modular operator blocks, our framework supports common Transformer nonlinearities (e.g., Softmax, SiLU, and normalization) without any fine-tuning. Experiments on a range of LLMs Transformers show that selectively replacing the targeted nonlinear operators incurs less than a $1\%$ accuracy drop across all evaluated tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.20289)