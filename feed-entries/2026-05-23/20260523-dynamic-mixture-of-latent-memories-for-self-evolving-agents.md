---
title: "Dynamic Mixture of Latent Memories for Self-Evolving Agents"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21951"
author: "Dianzhi Yu, Vireo Zhang, Hongru Wang, Yanyu Chen, Minda Hu, Wanghan Xu, Siki Chen, Philip Torr, Zhenfei Yin, Irwin King"
categories: ["cs.LG"]
---

arXiv:2605.21951v1 Announce Type: new Abstract: Achieving self-evolution in intelligent agents requires the continual accumulation of new knowledge across changing task sequences without forgetting previously acquired abilities. Existing approaches either internalize knowledge by updating model parameters, which induces catastrophic forgetting, or rely on external memory, which fails to genuinely enhance the model's intrinsic capabilities. We propose MoLEM, a generative mixture of latent memory framework based on a dynamic mixture-of-experts (MoE). We treat multiple experts as independent carriers to generate memory. A router selects and weights experts through key-query matching, and the aggregated latent memory is injected into the reasoning process. The base model for reasoning remains entirely frozen, with all experiential knowledge internalized into the additional modules, avoiding catastrophic forgetting. For continual learning, each training stage is paired with a lightweight autoencoder that selects the appropriate routing group at inference, and inputs that match no stage fall back to the pretrained model. Experiments train the framework on continual-learning sequences spanning math, science, and code domains. After training, we evaluate the framework on the corresponding test sets to measure task learning and competence preservation across continual adaptation stages. After the full continual-learning sequence, our method improves the average accuracy by 10.40% over the Vanilla pretrained baseline, while none of the competing methods consistently exceed this baseline across different training orders.

---

📖 [Read original article](https://arxiv.org/abs/2605.21951)