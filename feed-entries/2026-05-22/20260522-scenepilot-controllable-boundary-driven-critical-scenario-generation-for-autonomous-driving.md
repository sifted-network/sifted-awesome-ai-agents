---
title: "ScenePilot: Controllable Boundary-Driven Critical Scenario Generation for Autonomous Driving"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21168"
author: "Qiyu Ruan, Yuxuan Wang, He Li, Zhenning Li, Cheng-zhong Xu"
categories: ["cs.AI"]
---

arXiv:2605.21168v1 Announce Type: new Abstract: Safety-critical scenarios are central to evaluating autonomous driving systems, yet their rarity in naturalistic logs makes simulation-based stress testing indispensable. Most scenario generation methods treat surrounding agents as adversaries, but they either (i) induce failures without explicitly modeling vehicle-road physical limits, yielding visually extreme yet physically unsolvable crashes, or (ii) enforce physical feasibility or policy feasibility in isolation, which can over-focus on aggressive maneuvers or remain tied to a controller-dependent capability boundary. We propose ScenePilot, a feasibility-guided, boundary-driven framework that targets the boundary band: scenarios that are physically solvable in principle yet still cause the deployed autonomy stack to fail. We formulate generation as constrained multi-objective reinforcement learning, combining an RSS-derived physical-feasibility score $\sigma$ with an online-learned AV-risk predictor $\Phi$, and introduce step-level feasibility-aware shielding to keep exploration near the feasibility boundary while avoiding infeasible artifacts. Experiments on SafeBench with multiple planners show that ScenePilot yields substantially higher collision rates (+6.2 percentage points) while preserving physical validity, and that adversarial fine-tuning on these boundary-band scenarios consistently reduces downstream crash rates. The code is available at https://github.com/QiyuRuan/ScenePilot.

---

📖 [Read original article](https://arxiv.org/abs/2605.21168)