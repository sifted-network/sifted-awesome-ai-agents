---
title: "Distill to Think, Foresee to Act: Cognitive-Physical Reinforcement Learning for Autonomous Driving"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21139"
author: "Yang Wu, Qiang Meng, Zhaojiang Liu, Youquan Liu, Jian Yang, Jin Xie"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21139v1 Announce Type: cross Abstract: Current end-to-end autonomous driving models are fundamentally constrained by the behavioral cloning ceiling of imitation learning. While reinforcement learning offers a path to smarter autonomy, it demands two missing pieces of infrastructure: (1) a cognitive foundation that understands traffic semantics and driving intent, and (2) a foresighted physical environment that can anticipate the consequences of candidate actions. To this end, we propose CoPhy, a CognitivePhysical reinforcement learning framework for autonomous driving. To distill to think, we distill VLM knowledge into the BEV encoder and then discard the VLM entirely, retaining cognitive ability at zero inference cost while releasing the cognitive channel as a pluggable interface for optional human language commands. To foresee to act, we build an auto-regressive BEV world model that explicitly predicts future semantic maps conditioned on candidate actions, serving as an interpretable physical sandbox from which safety metrics are directly derived. Built upon this dual infrastructure, we optimize the driving policy via GRPO with a novel dual-reward mechanism: a physical reward derived from BEV rollouts enforces hard safety constraints, while a cognitive reward from a language-aligned scorer ensures intent compliance. Extensive experiments demonstrate that CoPhy not only achieves state-of-the-art results on NAVSIM v1 and v2 benchmarks, but also enables safer driving via cognitively informed scene compliance and flexible intent control through user-defined language instructions.

---

📖 [Read original article](https://arxiv.org/abs/2605.21139)