---
title: "Tiny-Engram: Trigger-Indexed Concept Tables for Generative Vision"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20309"
author: "Runyuan Cai, Yiming Wang, Yu Lin, Xiaodong Zeng"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20309v1 Announce Type: cross Abstract: Current personalization methods for generative vision models typically encode new concepts through continuous adapters or weight updates, yet provide limited control over whether and when a concept should be retrieved. In this work, we introduce Tiny-Engram, a compact trigger-indexed concept table that gives visual memories an explicit lexical address and activation boundary inside frozen image and video generators. Tiny-Engram parameterizes each concept as a small set of memory entries indexed by registered n-gram matches, which modulate text-encoder hidden states only within the matched trigger region. Outside this lexical support, the conditioning pathway is identical to that of the frozen base model. Across both single-encoder latent diffusion and multi-encoder diffusion-transformer backbones, this formulation binds a rare trigger phrase to a target identity while preserving compositional control from the surrounding prompt. We further evaluate the same table-based memory in a text-conditioned video generation setting, where the trigger path reliably alters the generated subject but fine-grained identity persistence across held-out video prompts remains limited. Taken together, these results suggest that small, explicitly addressed concept tables are a practical route to modular visual personalization, with strongest evidence in image generation. For video diffusion, the remaining gap points to a broader requirement: temporally stable identity likely depends on tighter coupling between text-side memory and the evolving visual state, motivating future work on memory injection beyond the text-conditioning interface.

---

📖 [Read original article](https://arxiv.org/abs/2605.20309)