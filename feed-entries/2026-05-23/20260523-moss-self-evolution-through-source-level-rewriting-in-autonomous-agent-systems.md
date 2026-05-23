---
title: "MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22794"
author: "Qianshu Cai, Yonggang Zhang, Xianzhang Jia, Wei Xue, Jun Song, Xinmei Tian, Yike Guo"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.22794v1 Announce Type: new Abstract: Autonomous agentic systems are largely static after deployment: they do not learn from user interactions, and recurring failures persist until the next human-driven update ships a fix. Self-evolving agents have emerged in response, but all confine evolution to text-mutable artifacts -- skill files, prompt configurations, memory schemas, workflow graphs -- and leave the agent harness untouched. Since routing, hook ordering, state invariants, and dispatch live in code rather than in any text artifact, an entire class of structural failure is physically unreachable from the text layer. We argue that source-level adaptation is a fundamentally more general medium: it is Turing-complete, a strict superset of every text-mutable scope, takes effect deterministically rather than through base-model compliance, and does not erode under long-context drift. We present MOSS, a system that performs self-rewriting at the source level on production agentic substrates. Each evolution is anchored to an automatically curated batch of production-failure evidence and proceeds through a deterministic multi-stage pipeline; code modification is delegated to a pluggable external coding-agent CLI while MOSS retains stage ordering and verdicts. Candidates are verified by replaying the batch against the candidate image in ephemeral trial workers, then promoted via user-consent-gated, in-place container swap with health-probe-gated rollback. On OpenClaw, MOSS lifts a four-task mean grader score from 0.25 to 0.61 in a single cycle without human intervention.

---

📖 [Read original article](https://arxiv.org/abs/2605.22794)