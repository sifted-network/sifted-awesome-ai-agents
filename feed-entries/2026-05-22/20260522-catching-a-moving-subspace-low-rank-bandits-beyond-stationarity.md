---
title: "Catching a Moving Subspace: Low-Rank Bandits Beyond Stationarity"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20269"
author: "Hamed Khosravi, Xiaoming Huo"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.20269v1 Announce Type: cross Abstract: Many bandit deployments (recommendation, clinical dosing, ad targeting) share two facts prior work handles only in isolation: rewards live on a low-dimensional latent subspace, and that subspace drifts. Stationary low-rank bandits exploit rank but break under subspace change; non-stationary linear bandits adapt to drift but pay ambient rate $\widetilde{O}(d\sqrt{T})$. We study piecewise-stationary low-rank linear contextual bandits with scalar feedback: $\theta_t = B_k^\star w_t$ with rank-$r$ factor $B_k^\star\in\mathbb{R}^{d\times r}$ constant within each of $K$ unknown segments and able to shift at boundaries. Our results are tight along three axes. (i) Identification boundary. With single-play scalar rewards, the moving subspace is recoverable through quadratic functionals of rewards iff three probe-side conditions hold: known noise variance, bounded state-noise coupling, and full-dimensional probe support. Each is necessary in the unrestricted-second-moment problem, and jointly they are sufficient, characterizing the boundary of the solvable region. (ii) Algorithm and dynamic regret. SPSC interleaves isotropic probes with windowed projected ridge-UCB exploitation inside the learned $r$-dimensional subspace; a CUSUM-style variant discovers segment boundaries online. The costed dynamic regret is $\widetilde{O}(r\sqrt{T})+\widetilde{O}(T^{2/3})+O(W\,V_{\mathrm{in}})$, replacing the ambient $d\sqrt{T}$ rate with the intrinsic rank. (iii) Empirics. On eleven benchmarks spanning synthetic, UCI/MovieLens, semi-synthetic clinical, and ZOZOTOWN production-log data, SPSC outperforms non-stationary and low-rank baselines whenever $d-r\gtrsim T^{1/6}$, matching the analytical crossover. To our knowledge, this is the first work to characterize the identification boundary and attain the intrinsic-rank dynamic-regret rate in this setting.

---

📖 [Read original article](https://arxiv.org/abs/2605.20269)