---
title: "Learning-to-Defer with Expert-Conditional Advice"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.14324"
author: "Yannis Montreuil, Le\\\"ina Montreuil, Axel Carlier, Lai Xing Ng, Wei Tsang Ooi"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2603.14324v3 Announce Type: replace-cross Abstract: Learning-to-Defer routes each input to the expert that minimizes expected cost, but it assumes that the information available to every expert is fixed at decision time. Many modern systems violate this assumption: after selecting an expert, one may also choose what additional information that expert should receive, such as retrieved documents, tool outputs, or escalation context. We study this problem and call it Learning-to-Defer with advice. We show that a broad family of natural separated surrogates, which learn routing and advice with distinct heads, is inconsistent even in the smallest non-trivial setting. We then introduce an augmented surrogate that operates on the composite expert--advice action space and prove an $\mathcal{H}$-consistency guarantee together with an excess-risk transfer bound, yielding recovery of the Bayes-optimal policy in the limit. Experiments on tabular, language, and multi-modal tasks show that the resulting method improves over standard Learning-to-Defer while adapting its advice-acquisition behavior to the cost regime; a synthetic benchmark confirms the failure mode predicted for separated surrogates.

---

📖 [Read original article](https://arxiv.org/abs/2603.14324)