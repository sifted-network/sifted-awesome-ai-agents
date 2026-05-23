---
title: "[Re] FairDICE: A Fair Tradeoff in Multi-objective Offline RL"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.03454"
author: "Peter Adema, Karim Galliamov, Aleksey Evstratovskiy, Ross Geurts"
categories: ["cs.LG"]
---

arXiv:2603.03454v2 Announce Type: replace Abstract: Offline Reinforcement Learning (RL) is an emerging field of RL in which policies are learned solely from demonstrations. Within offline RL, some environments involve balancing multiple objectives, but existing multi-objective offline RL algorithms do not provide an efficient way to find a fair compromise. FairDICE (see arXiv:2506.08062v2) seeks to fill this gap by adapting OptiDICE (an offline RL algorithm) to automatically learn weights for multiple objectives to e.g. incentivise fairness among objectives. As this would be a valuable contribution, this replication study examines the replicability of claims made regarding FairDICE. We find that many theoretical claims hold, but an error in the code reduces FairDICE to standard behaviour cloning in continuous environments, and many important hyperparameters were originally underspecified. After rectifying this, we show in experiments extending the original paper that FairDICE can scale to complex environments and high-dimensional rewards, though it can be reliant on (online) hyperparameter tuning. We conclude that FairDICE is a theoretically interesting method, but the experimental justification requires significant revision.

---

📖 [Read original article](https://arxiv.org/abs/2603.03454)