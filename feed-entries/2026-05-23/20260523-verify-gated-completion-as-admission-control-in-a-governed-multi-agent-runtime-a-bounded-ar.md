---
title: "Verify-Gated Completion as Admission Control in a Governed Multi-Agent Runtime: A Bounded Architecture Case Study"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.17998"
author: "Hai-Duong Nguyen, Xuan-The Tran"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2605.17998v2 Announce Type: replace-cross Abstract: As multi-agent systems move from short interactions to tool-using workflows with specialized roles and persistent state, completion becomes a runtime-control problem rather than a purely generative one. This preprint studies verify-gated completion as an admission-control pattern for governed multi-agent runtimes: agents may propose completion, but a read-only verifier decides whether the claim is admitted. Ambiguous or weakly evidenced cases resolve fail-closed, while packetized state and event traces preserve an audit path. We examine one bounded reference implementation and ask what the released evidence can support about auditable, verify-gated completion. In the released verify-completed slice, the known-outcome invoked-event verify success share was 1,791/1,800 = 99.5%. This is an accounting measure over invoked verification events, not a task-completion, production-reliability, or benchmark-success rate. Task-level verify coverage is not computable; 1,762/1,801 rows came from one high-volume reporting cluster; and only 17 events were production-classified. A shadow Policy/Governance Verifier evaluation showed 1,526/1,548 = 98.58% rule agreement, 0/1,526 false-success among safe-to-proceed predictions, and blocked precision of 2/518 = 0.39%, so it remains advisory. The evidence supports a narrow conclusion: under observed conditions, a read-only verify gate plus packetized admission records made completion decisions inspectable and fail-closed. Claims about deployed operation, safety guarantees, outcome gains, task-level coverage, recovery effectiveness, or external validity remain outside scope.

---

📖 [Read original article](https://arxiv.org/abs/2605.17998)