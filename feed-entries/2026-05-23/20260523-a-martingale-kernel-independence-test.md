---
title: "A Martingale Kernel Independence Test"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22549"
author: "Felix Laumann, Zhaolu Liu, Mauricio Barahona"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.22549v1 Announce Type: cross Abstract: The Hilbert-Schmidt Independence Criterion (HSIC) and its joint-independence extension $d\mathrm{HSIC}$ are degenerate $V$-statistics whose data-dependent weighted-$\chi^2$ null limits force a permutation calibration that multiplies the per-test cost by the number of permutations, in practice two orders of magnitude. Adapting the recent martingale MMD construction for two-sample testing to the (joint) independence problem, we introduce two studentised statistics whose null distributions are standard normal regardless of the data law, so that a single normal-quantile lookup replaces the permutation step entirely. The first, $m\mathrm{HSIC}$, is a self-normalised lower-triangular sum of the Hadamard product of two empirically centred Gram matrices. Under independence and bounded-fourth-moment kernels it converges to a standard normal. It is consistent against every fixed alternative, and runs at quadratic cost in the sample size without any sample split, matching the biased HSIC $V$-statistic. Our second statistic, $md\mathrm{HSIC}$, achieves finite-sample consistency with a single half-sample split: the centring is estimated on one half and the lower-triangular self-normalised martingale is run on the other, shrinking the conditional-mean residual to a quantity that is exponentially small in $d$, so the statistic is asymptotically standard normal at every fixed number of jointly tested variables, with a per-test cost that grows only linearly in $d$. On synthetic data with per-variable input dimension from $1$ to $500$ and between $2$ and $10$ jointly tested variables, both statistics match the empirical type-I error rate and test power of permutation-calibrated baselines while running $25$ to $60\times$ faster.

---

📖 [Read original article](https://arxiv.org/abs/2605.22549)