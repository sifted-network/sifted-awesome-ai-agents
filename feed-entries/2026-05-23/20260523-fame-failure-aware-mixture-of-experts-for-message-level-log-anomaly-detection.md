---
title: "FAME: Failure-Aware Mixture-of-Experts for Message-Level Log Anomaly Detection"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22779"
author: "Huanchi Wang, Zihang Huang, Yifang Tian, Kristina Dzeparoska, Hans-Arno Jacobsen, Alberto Leon-Garcia"
categories: ["cs.SE", "cs.LG"]
---

arXiv:2605.22779v1 Announce Type: cross Abstract: Production systems generate millions of log lines daily, yet most anomaly detectors operate at the session or window-level, flagging groups of lines rather than identifying the specific message responsible. This coarse granularity forces operators to inspect many routine lines per alert. Message-level detection offers finer granularity, but remains challenging. A single event template may correspond to both normal and anomalous messages, failures arise from heterogeneous subsystems, and line-level labeling at scale is impractical. Although large language models (LLMs) can reason over log semantics, applying them to every line is too costly for continuous monitoring. We present FAME (Failure-Aware Mixture-of-Experts), a label-efficient message-level mixture-of-experts framework that uses an LLM only once offline. We annotate at most K labeled lines per template to derive binary normal/anomaly indicators and representative examples. The LLM proposes a partition of templates into failure domains, and a certification step validates the proposal before training. FAME trains a lightweight router and domain experts that run on-premise and output anomaly predictions and failure-domain labels. On BGL, FAME achieves F1 = 98.16 at K = 100 reducing annotation effort by 76x and detects 86.3% of anomalies from unseen EventIDs. On Thunderbird, FAME reaches F1 = 99.95 with perfect recall.

---

📖 [Read original article](https://arxiv.org/abs/2605.22779)