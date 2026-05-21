---
title: "DecisionBench: A Benchmark for Emergent Delegation in Long-Horizon Agentic Workflows"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19099"
author: "Yuxuan Gao, Megan Wang, Yi Ling Yu, Zijian Carl Ma, Ao Qu"
categories: ["cs.AI", "cs.CL", "cs.MA"]
---

arXiv:2605.19099v1 Announce Type: new Abstract: We introduce DecisionBench, a benchmark substrate for emergent delegation in long-horizon agentic workflows. The substrate fixes a task suite (GAIA, tau-bench, BFCL multi-turn), a peer-model pool (11 models, 7 vendor families), a delegation interface (call_model plus an optional read_profile channel), a deterministic skill-annotation layer, and a multi-axis metric suite covering quality, cost, latency, delegation rate, routing fidelity-at-k, vendor self-preference, and a counterfactual-delegation ceiling. The substrate is agnostic to how peer information is generated or delivered, so learned routers, richer peer memories, adaptive profile construction, and multi-step delegation can all be evaluated against it. We characterize the substrate with a five-condition reference sweep on the full pool (n=23,375 task instances). Three benchmark-level findings emerge: (i) mean end-task quality is statistically indistinguishable across the four awareness conditions (|beta| <= 0.010, p >= 0.21), so quality-only evaluation would miss the orchestration signal; (ii) routing fidelity-at-1 ranges from 7.5% to 29.5% across conditions at near-equal mean quality, with delivery channel (on-demand tool vs. preloaded description) dominating description content; (iii) a counterfactual ceiling places perfect delegation 15-31 percentage points above measured performance on every suite, locating large unrealized headroom for future orchestration methods. We release the substrate, annotation layer, reference intervention suite, analysis pipeline, and 220 per-condition run archives.

---

📖 [Read original article](https://arxiv.org/abs/2605.19099)