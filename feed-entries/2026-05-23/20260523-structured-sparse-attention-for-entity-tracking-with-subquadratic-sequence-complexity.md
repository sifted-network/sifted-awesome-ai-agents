---
title: "Structured-Sparse Attention for Entity Tracking with Subquadratic Sequence Complexity"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22476"
author: "Hangyue Zhao, Paul Caillon, Erwan Fagnou, Alexandre Allauzen"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.22476v1 Announce Type: new Abstract: Entity tracking requires maintaining and updating latent states for entities and attributes over long sequences. Recent task-specific attention operators can compress deep Transformer stacks into a few layers by performing multi-hop state propagation within a single layer, but their dense evaluation remains expensive. We show that in this setting, learned attention is strongly structured: most mass concentrates in local block-diagonal neighborhoods with a light cross-block residue. Exploiting this, we derive a blockwise evaluation of a resolvent-style operator that keeps within-block interactions exact and routes cross-block interactions through a reduced system. The resulting evaluation is subquadratic in sequence length $O(n^{4/3}d)$ (and $O(n^{7/3})$ when $d\approx n$). On controlled tracking benchmarks, our method matches the dense operator's accuracy while reducing wall-clock time by $12-29\%$ under a standardized measurement protocol, and is up to $2.4 \times$ faster than a compact dense Transformer at comparable exact-match accuracy. We further provide ablations over block size and model capacity, and identify a limitation: performance collapses when the number of simultaneously evolving properties exceeds the number of attention heads.

---

📖 [Read original article](https://arxiv.org/abs/2605.22476)