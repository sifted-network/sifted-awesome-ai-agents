---
title: "Algorithm Design and Stronger Guarantees for the Improving Multi-Armed Bandits Problem"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2511.10619"
author: "Avrim Blum, Marten Garicano, Kavya Ravichandran, Dravyansh Sharma"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2511.10619v2 Announce Type: replace Abstract: The improving multi-armed bandits problem is a formal model for allocating effort under uncertainty, motivated by scenarios such as investing research effort into new technologies, performing clinical trials, and hyperparameter selection from learning curves. Each pull of an arm provides reward that increases monotonically with diminishing returns. A growing line of work has designed algorithms for improving bandits, albeit with somewhat pessimistic worst-case guarantees. Indeed, strong lower bounds of $\Omega(k)$ and $\Omega(\sqrt{k})$ multiplicative approximation factors are known for both deterministic and randomized algorithms (respectively) relative to the optimal arm, where $k$ is the number of bandit arms. In this work, we propose two new parameterized families of bandit algorithms and bound the sample complexity of learning the near-optimal algorithm from each family using offline data. We also perform empirical evaluations on standard hyperparameter tuning benchmarks. The first family we define includes the optimal randomized algorithm from prior work. We show that an appropriately chosen algorithm from this family can achieve stronger guarantees, with optimal dependence on $k$, when the arm reward curves satisfy additional properties related to the strength of concavity. Our second family contains algorithms that both guarantee best-arm identification on well-behaved instances and revert to worst-case guarantees on poorly-behaved instances.

---

📖 [Read original article](https://arxiv.org/abs/2511.10619)