---
title: "Prism: Structural Symmetry Scanning via Duality-Constrained Laplacian Projection"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20245"
author: "Jiatong Xie"
categories: ["cs.SI", "cs.LG"]
---

arXiv:2605.20245v1 Announce Type: cross Abstract: We introduce \textbf{Prism}, a framework for structural symmetry diagnosis in complex networks. Given a graph Laplacian $L$ and a duality operator $P$ (a symmetric involution), Prism computes the \emph{duality defect} $\delta(L,P) = \|LP - PL\|_F / \|L\|_F$ -- a scalar measuring how far the network deviates from structural self-consistency. When $P$ encodes the network's true symmetry, $\delta$ starts near zero and rises monotonically as structure degrades; an arbitrary $P$ gives noise. We prove that the optimal $L'$ satisfying $[L', P] = 0$ is given by a closed-form block-diagonal projection, and provide an unsupervised alternating optimization that learns $P$ from the graph's own Fiedler vector. Experiments on synthetic networks show the true-$P$ defect is $3.38\times$ more sensitive to structural degradation than an index-reversal baseline and more sensitive than modularity. On Zachary's Karate Club with edge noise, Prism achieves $94.5\%$ community detection accuracy at $5\%$ noise versus $76.6\%$ for the raw Laplacian baseline. Applied to live S\&P~500 data (2026-05-17), Prism detects rising structural stress (defect $0.43 \to 0.73$ over 90 days) while surface correlations remain low -- a signal invisible to correlation-based methods. In a historical backtest spanning five major stress events (2011--2020), the duality defect exhibits a consistent pattern: it reaches elevated levels \emph{before} the correlation spike that accompanies each crisis, and sustains high readings during periods of structural fragility that conventional metrics classify as calm. The duality defect is a first-principles structural admissibility condition, requiring no training data and computable in milliseconds.

---

📖 [Read original article](https://arxiv.org/abs/2605.20245)