---
title: "Smooth Partial Lotteries for Stable Randomized Selection"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20069"
author: "Alexander Goldberg, Giulia Fanti, Nihar B. Shah"
categories: ["cs.LG", "cs.GT"]
---

arXiv:2605.20069v2 Announce Type: replace Abstract: Competitive selection processes, from scientific funding to admissions and hiring, use evaluations to score candidates, and eventually choose a subset of them based on those scores. Recently, many organizations have adopted partial lotteries, which randomize selection based on evaluation scores. However, existing lottery designs are inherently unstable, as a small change to a single candidate's score can cause large shifts in their selection probabilities. This instability undermines a key goal of lotteries: reducing the influence of fine-grained score distinctions near the decision boundary. We propose smoothness as a design principle for partial lotteries, formalizing it as a Lipschitz condition on the mapping from review scores over candidates to selection probabilities. We introduce the Clipped Linear Lottery, a simple mechanism in which selection probabilities scale linearly with estimated quality between an upper threshold, above which we always accept, and a lower threshold, below which we always reject. We prove that the Clipped Linear Lottery's worst-case regret matches a lower bound for any smooth selection rule up to a factor of $(1 - k/n)$, where $k/n$ is the acceptance rate. We compare smooth selection to other stability notions like Individual Fairness and Differential Privacy, showing that the Clipped Linear Lottery achieves a better smoothness-regret tradeoff than alternatives. Experiments on real peer review data from ICLR 2025, NeurIPS 2024, and the Swiss National Science Foundation demonstrate that existing lottery designs are highly unstable in practice even under perturbations to a single score. Our experiments also confirm the tightness of our theoretical analysis and show that our proposed Clipped Linear Lottery achieves a better smoothness-utility tradeoff than alternatives in practice.

---

📖 [Read original article](https://arxiv.org/abs/2605.20069)