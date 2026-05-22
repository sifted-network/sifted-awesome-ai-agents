---
title: "Unlocking the Potential of Continual Model Merging: An ODE Perspective"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19409"
author: "Lihong Lin, Haidong Kang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.19409v2 Announce Type: replace-cross Abstract: Continual Model Merging (CMM) enables rapid customization of foundation models across sequentially arriving tasks, offering a scalable alternative to repeated retraining. However, existing merging rules lack explicit controllability over the allocation of learning capacity between previously learned capabilities and newly merged models. Consequently, as tasks are merged sequentially, this deficiency accumulates into severe forgetting, particularly in scenarios with heterogeneous task importance, where performance allocation becomes highly inconsistent. The key reason can be attributed to the fact that previous methods treat each task model as an isolated parameter point and apply fixed algebraic combinations, rather than explicitly constructing a transition that respects how independently trained models can be connected in parameter space. Motivated by mode connectivity, we assume that desirable merged models lie on low loss connecting paths, and that continual merging should follow such paths without crossing loss barriers that induce forgetting. Grounded in these insights, we propose a novel ODE-driven Merging (ODE-M) tailored for CMM that traces such a path by integrating a time-dependent velocity field and enforcing barrier constraints to prevent loss-increasing steps. Extensive experiments demonstrate that ODE-M achieves state-of-the-art performance compared to its competitors across mainstream CMM benchmarks.

---

📖 [Read original article](https://arxiv.org/abs/2605.19409)