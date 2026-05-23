---
title: "SeqLoRA: Bilevel Orthogonal Adaptation for Continual Multi-Concept Generation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22743"
author: "Javad Parsa, Enis Simsar, Amir Joudaki, Thomas Hofmann, Andr\\'e M. H. Teixeira"
categories: ["cs.LG"]
---

arXiv:2605.22743v1 Announce Type: new Abstract: Parameter-efficient fine-tuning enables fast personalization of text-to-image diffusion models, but composing multiple custom concepts remains challenging due to representation interference. Existing modular methods either rely on expensive post-hoc fusion or freeze adaptation subspaces, which limit expressiveness and concept fidelity. To address this trade-off, we propose Sequential regularized LoRA (SeqLoRA), a constrained continual learning framework that jointly optimizes both LoRA factors via bilevel optimization. Theoretically, we establish strong convergence guarantees for our algorithm and model the residual layer activations as a matrix sub-Gaussian process to derive high-probability bounds on catastrophic forgetting. We further prove that learning the LoRA basis from data minimizes residual interference energy more effectively than frozen-basis methods. Experiments on multi-concept image generation demonstrate that SeqLoRA improves identity preservation and scalability across up to 101 concepts, while avoiding costly fusion and reducing attribute interference in composed generations.

---

📖 [Read original article](https://arxiv.org/abs/2605.22743)