---
title: "torchtune: PyTorch native post-training library"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21442"
author: "Mark Obozov, Maxime Griot, Joseph Cummings, Evan Smothers, Felipe Mello, Rafi Ayub, Philip John Bontrager, Salman Mohammadi, Ariel Kwiatkowski, Nathan Azrak, Mircea Mironenco"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21442v1 Announce Type: cross Abstract: Modern LLMs typically require multistage training pipelines to achieve strong downstream performance, with post-training serving as the main interface for adapting open-weight models. We introduce torchtune, a PyTorch-native library designed to streamline the post-training lifecycle of LLMs, enabling efficient fine-tuning, experimentation, and deployment-oriented workflows. Unlike many existing fine-tuning frameworks, which often optimize for ease of use, specialized recipes, or hardware efficiency at the cost of transparency and extensibility, torchtune emphasizes modularity, hackability, and direct access to the underlying PyTorch components. In this paper, we present the design principles behind torchtune, describe how they are reflected in its model builders, training recipes, and distributed training stack, and evaluate the library across representative post-training settings. We compare against popular fine-tuning frameworks, including Axolotl and Unsloth, and show that torchtune provides strong performance and memory efficiency across many settings while remaining flexible enough for rapid research iteration. These results position torchtune as a practical foundation for reproducible LLMs post-training research.

---

📖 [Read original article](https://arxiv.org/abs/2605.21442)