---
title: "MAP-Law: Coverage-Driven Retrieval Control for Multi-Turn Legal Consultation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.01486"
author: "Qinchuan Cheng, Jiaqi Liu, Ruixuan Xie, Xiaoya Yuan, Yuxin Liu"
categories: ["cs.AI"]
---

arXiv:2605.01486v2 Announce Type: replace Abstract: Legal consultation is inherently iterative: before giving advice, a system must identify relevant legal elements, gather missing facts and authorities, and determine whether the current evidence is sufficient. Existing retrieval-augmented legal agents often use fixed retrieval budgets or single-shot search, making them insensitive to the evolving coverage state of a consultation. This paper introduces a coverage-driven retrieval-control framework for multi-turn legal consultation. The framework maintains a structured map over user facts, legal elements, retrieval goals, and retrieved evidence, and uses element coverage, evidence validity coverage, and marginal retrieval gain to decide whether to retrieve, clarify, reformulate, or stop. On a 50-case synthetic Chinese labor-law consultation pilot with fixed legal-element schemas, a DeepSeek V4-Pro action-selection variant achieves full measured element coverage under the pilot metric while requiring 3.4 retrieval rounds and 7.1 evidence snippets on average. Diagnostic analyses show that model-backed action selection recovers rule-policy failure cases with a small retrieval-budget increase, while forced continuation mainly increases token and latency costs. These results suggest that legal-element coverage is a useful control signal for adaptive legal retrieval, while remaining bounded to retrieval-control behavior under synthetic fixed-schema conditions rather than deployment-level legal correctness.

---

📖 [Read original article](https://arxiv.org/abs/2605.01486)