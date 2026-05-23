---
title: "Do Not Trust The Auctioneer: Learning to Bid in Feedback-Manipulated Auctions"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22438"
author: "Luigi Foscari, Matilde Tullii, Vianney Perchet"
categories: ["stat.ML", "cs.GT", "cs.LG"]
---

arXiv:2605.22438v1 Announce Type: cross Abstract: Shilling is the use of artificial bids to make competition appear stronger and push prices upward. We study repeated first-price auctions in which shilling affects feedback but not allocation: the learner wins or loses against the real competing bid, but after a loss observes the maximum of the real bid and an independent shill bid. Thus the manipulation changes what the learner observes and hence how it learns to bid, without changing the outcome of the current auction. We analyze regret with respect to the best bid benchmark, assuming that the shill-bid distribution is known. Even then, shilling can mask the real bid, while useful side information appears only through intermittent low-shill events. Our algorithm combines a robust interval-elimination branch, which ignores the shilled report and achieves the dynamic-pricing rate $\tilde{\mathcal{O}}(T^{2/3})$, with an optimistic branch that debiases losing-side reports and exploits the resulting suffix information when it is reliable and achieves the first-price auctions rate $\tilde{\mathcal{O}}(\sqrt{T})$. A validation and racing procedure lets the algorithm use these optimistic updates without knowing the right scale or feedback geometry in advance. We complement the upper bounds with a matching lower bound, up to logarithmic factors, in the single-active-region case. Overall, the results show that even feedback-only shilling can sharply alter the statistical difficulty of repeated bidding.

---

📖 [Read original article](https://arxiv.org/abs/2605.22438)