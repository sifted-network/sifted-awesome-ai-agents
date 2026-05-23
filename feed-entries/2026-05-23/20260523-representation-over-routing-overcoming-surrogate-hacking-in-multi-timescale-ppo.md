---
title: "Representation over Routing: Overcoming Surrogate Hacking in Multi-Timescale PPO"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.13517"
author: "Jing Sun"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2604.13517v2 Announce Type: replace-cross Abstract: Temporal credit assignment in reinforcement learning has long been a central challenge. Inspired by the multi-timescale encoding of the dopamine system in neurobiology, recent research has sought to introduce multiple discount factors into Actor-Critic architectures, such as Proximal Policy Optimization (PPO), to balance short-term responses with long-term planning. However, this paper reveals that blindly fusing multi-timescale signals in complex delayed-reward tasks can lead to severe algorithmic pathologies. We systematically demonstrate that exposing a temporal attention routing mechanism to policy gradients results in surrogate objective hacking, while adopting gradient-free uncertainty weighting triggers irreversible myopic degeneration, a phenomenon we term the Paradox of Temporal Uncertainty. To address these issues, we propose a Target Decoupling architecture: on the Critic side, we retain multi-timescale predictions to enforce auxiliary representation learning, while on the Actor side, we strictly isolate short-term signals and update the policy based solely on long-term advantages. Rigorous empirical evaluations across multiple independent random seeds in the LunarLander-v2 environment demonstrate that our proposed architecture achieves statistically significant performance improvements. Without relying on hyperparameter hacking, it consistently surpasses the ''Environment Solved'' threshold with minimal variance, completely eliminates policy collapse, and escapes the hovering local optima that trap single-timescale baselines. The source code to reproduce our experiments is publicly available at https://github.com/ben-dlwlrma/Representation-Over-Routing.

---

📖 [Read original article](https://arxiv.org/abs/2604.13517)