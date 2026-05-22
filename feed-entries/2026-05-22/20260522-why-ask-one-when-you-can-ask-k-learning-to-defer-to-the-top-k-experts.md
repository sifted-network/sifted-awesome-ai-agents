---
title: "Why Ask One When You Can Ask $k$? Learning-to-Defer to the Top-$k$ Experts"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2504.12988"
author: "Yannis Montreuil, Axel Carlier, Lai Xing Ng, Wei Tsang Ooi"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2504.12988v5 Announce Type: replace Abstract: Existing Learning-to-Defer (L2D) frameworks are limited to single-expert deferral, forcing each query to rely on only one expert and preventing the use of collective expertise. We introduce the first framework for Top-$k$ Learning-to-Defer, which allocates queries to the $k$ most cost-effective entities. Our formulation unifies and strictly generalizes prior approaches, including the one-stage and two-stage regimes, selective prediction, and classical cascades. In particular, it recovers the usual Top-1 deferral rule as a special case while enabling principled collaboration with multiple experts when $k>1$. We further propose Top-$k(x)$ Learning-to-Defer, an adaptive variant that learns the optimal number of experts per query based on input difficulty, expert quality, and consultation cost. To enable practical learning, we develop a novel surrogate loss that is Bayes-consistent, $\mathcal{H}_h$-consistent in the one-stage setting, and $(\mathcal{H}_r,\mathcal{H}_g)$-consistent in the two-stage setting. Crucially, this surrogate is independent of $k$, allowing a single policy to be learned once and deployed flexibly across $k$. Experiments across both regimes show that Top-$k$ and Top-$k(x)$ deliver superior accuracy-cost trade-offs, opening a new direction for multi-expert deferral in L2D.

---

📖 [Read original article](https://arxiv.org/abs/2504.12988)