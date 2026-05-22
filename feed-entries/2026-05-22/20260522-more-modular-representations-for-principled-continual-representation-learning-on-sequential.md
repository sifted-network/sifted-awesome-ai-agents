---
title: "MoRe: Modular Representations for Principled Continual Representation Learning on Sequential Data"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.14364"
author: "Jiaqi Sun, Boyang Sun, Rasmy M. H., Xiangchen Song, Kun Zhang"
categories: ["cs.LG"]
---

arXiv:2605.14364v3 Announce Type: replace Abstract: Continual learning requires models to adapt to new data while preserving previously acquired knowledge. At its core, this challenge can be viewed as principled one-step adaptation: incorporating new information with minimal interference to existing representations. Most existing approaches address this challenge by modifying model parameters or architectures in a supervised, task-specific manner. However, the underlying issue is representational: tasks require distinct yet structured representations that can be selectively updated without disrupting representations, while structure should reflect intrinsic organization in the data rather than task boundaries. In sequential data, time-delayed dependencies provide a natural signal for uncovering this organization, revealing how fundamental representations give rise to more specific ones. Inspired by the modular organization of the human brain, we propose MoRe, a framework that identifies modularity in the representation itself rather than allocating it at the architectural level. MoRe decomposes knowledge into a hierarchy of fundamental and specific modules with identifiability guarantees, enabling principled module reuse, alignment, and expansion during adaptation while preserving old modules by construction. Experiments on synthetic benchmarks and real-world LLM activations demonstrate interpretable hierarchical structure, improved plasticity-stability trade-offs, suggesting MoRe as a principled foundation for continual adaptation

---

📖 [Read original article](https://arxiv.org/abs/2605.14364)