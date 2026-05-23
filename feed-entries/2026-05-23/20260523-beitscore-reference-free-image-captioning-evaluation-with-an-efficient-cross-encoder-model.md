---
title: "BEiTScore: Reference-free Image Captioning Evaluation with an Efficient Cross-Encoder Model"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21728"
author: "Gon\\c{c}alo Gomes, Bruno Martins, Chrysoula Zerva"
categories: ["cs.CV", "cs.CL", "cs.LG"]
---

arXiv:2605.21728v1 Announce Type: cross Abstract: Image captioning evaluation remains a significant challenge, as vision-language models evolve toward more challenging capabilities such as generating long-form and context-rich descriptions. State-of-the-art evaluation metrics involve extensive computational costs associated with the use of Large Language Models (LLMs) as judges, or instead suffer from the limitations of standard CLIP-based encoders, such as strict token limits, lack of fine-grained sensitivity, or lack of compositional generalization by treating captions as ``bags-of-words.'' We propose a new learned metric that tackles the aforementioned challenges, based on a lightweight cross-encoder that is initialized from a visual question-answering model checkpoint, balancing a strong weight initialization with computational efficiency. Our training scheme uses a carefully assembled data mixture for supervised learning, featuring adversarial LLM-based data augmentations to enhance model sensitivity to fine-grained visual-linguistic errors. We also introduce a new benchmark designed to assess detailed captioning evaluation across diverse scenarios. Experimental results demonstrate that the proposed metric achieves state-of-the-art performance while maintaining the efficiency required for large-scale benchmarking, quality-aware decoding, or reward guidance.

---

📖 [Read original article](https://arxiv.org/abs/2605.21728)