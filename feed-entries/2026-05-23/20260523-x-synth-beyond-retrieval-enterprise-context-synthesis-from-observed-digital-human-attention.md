---
title: "X-SYNTH: Beyond Retrieval -- Enterprise Context Synthesis from Observed Digital Human Attention"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.15505"
author: "Guruprasad Raghavan, George Nychis, Rohan Narayana Murthy"
categories: ["cs.AI", "cs.IR", "cs.LG"]
---

arXiv:2605.15505v2 Announce Type: replace Abstract: In enterprise operations, the context required for an AI agent task is scattered across systems of record, static information stores, and communication channels. What is stored is system state, a lossy representation of the work that actually happened. The prevailing approach retrieves by matching request content to what is stored; for narrow requests this works well. But synthesis quality depends on knowing what to surface and how to interpret it: knowledge specific to each organization, team, and individual, present in behavioral patterns, absent from any retrieval index. For the agentic task of proposing enterprise-valuable leads to sellers, this approach breaks down: True Lead Rate is low, False Lead Rate is high, and the model has no mechanism to improve. We present X-SYNTH, a framework for enterprise context synthesis grounded in digital human attention, the digitally observable interaction signatures of each worker, encoding what they did, the sequence in which they did it, and implicit reward signals. Behavioral traces preceding positive outcomes are distinguishable from those that did not, without external labeling. X-SYNTH models each individual's behavioral baseline as a Digital Twin Signature (DTS) and selects among seven attention filters, Proportional, Inverse, Differential, Recurrent, Comparative, Sequential, and Collective, per individual and per query, to identify causally relevant activity signatures. A four-stage pipeline assembles ranked context grounded in behavioral patterns rather than query embeddings. A frontier model unaided achieves 9.5% True Lead Rate (TLR) with 90.5% False Lead Rate (FLR). Augmented with X-SYNTH, TLR rises to 61.9% (6.5x) while FLR falls to 18.8%. Enterprise context synthesis is not a retrieval problem. It is a relevance problem, and digital human attention is its most reliable ground truth.

---

📖 [Read original article](https://arxiv.org/abs/2605.15505)