---
title: "How to Guide Your Flow: Few-Step Alignment via Flow Map Reward Guidance"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.27147"
author: "Jerry Y. Huang, Justin Lin, Sheel Shah, Kartik Nair, Nicholas M. Boffi"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2604.27147v2 Announce Type: replace-cross Abstract: In generative modeling, we often wish to produce samples that maximize a user-specified reward such as aesthetic quality or alignment with human preferences, a problem known as \textit{guidance}. Despite their widespread use, existing guidance methods either require expensive multi-particle, many-step schemes or rely on poorly understood approximations. We reformulate guidance as a \textit{deterministic optimal control problem}, yielding a hierarchy of algorithms that subsumes existing approaches at the coarsest level. We show that the \textit{flow map}, an object of significant recent interest for its role in fast inference, arises naturally in the optimal solution. Based on this observation, we propose \textbf{Flow Map Reward Guidance (FMRG)}: a training-free, \textit{single-trajectory} framework that uses the flow map to both integrate and guide the flow. At text-to-image scale, FMRG matches or surpasses baselines across inverse problems and reward-guided generation with \textbf{as few as 3 NFEs}, giving at least an order-of-magnitude speedup in comparison to prior state of the art.

---

📖 [Read original article](https://arxiv.org/abs/2604.27147)