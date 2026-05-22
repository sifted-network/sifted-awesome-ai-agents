---
title: "Conditional Equivalence of DPO and RLHF: Implicit Assumption, Failure Modes, and Provable Alignment"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20834"
author: "Zhiqin Yang, Yonggang Zhang, Wei Xue, Dong Fang, Bo Han, Yike Guo"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.20834v1 Announce Type: new Abstract: Direct Preference Optimization (DPO) has emerged as a popular alternative to Reinforcement Learning from Human Feedback (RLHF), offering theoretical equivalence with simpler implementation. We prove this equivalence is conditional rather than universal, depending on an implicit assumption frequently violated in practice: the RLHF-optimal policy must prefer human-preferred responses. When this assumption fails, DPO optimizes relative advantage over the reference policy rather than absolute alignment with human preferences, leading to pathological convergence where policies decrease DPO loss while preferring dispreferred responses. We characterize when this assumption is violated, show the existence of an undesirable solution space, and prove that DPO and RLHF optimize fundamentally different objectives in such cases. To address this, we introduce Constrained Preference Optimization (CPO), augmenting RLHF with constraints for provable alignment. We further provide a geometric interpretation through soft margin ranking, revealing that DPO implements margin ranking with potentially negative targets. Our theoretical analysis establishes when DPOs' guarantees hold and provides solutions preserving simplicity with provable alignment. Comprehensive experiments on standard benchmarks demonstrate that CPO achieves state-of-the-art performance. Code is available at: https://github.com/visitworld123/CPO.

---

📖 [Read original article](https://arxiv.org/abs/2605.20834)