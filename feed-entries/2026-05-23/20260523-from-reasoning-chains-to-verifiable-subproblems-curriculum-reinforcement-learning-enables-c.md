---
title: "From Reasoning Chains to Verifiable Subproblems: Curriculum Reinforcement Learning Enables Credit Assignment for LLM Reasoning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22074"
author: "Xitai Jiang, Zihan Tang, Wenze Lin, Yang Yue, Shenzhi Wang, Gao Huang"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.22074v1 Announce Type: cross Abstract: Reinforcement learning from verifiable rewards (RLVR) has shown strong promise for LLM reasoning, but outcome-based RLVR remains inefficient on hard problems because correct final-answer rollouts are rare and sample-level credit assignment cannot use partial progress in failed attempts. We introduce SCRL (Subproblem Curriculum Reinforcement Learning), a curriculum RL framework that derives verifiable subproblems from reference reasoning chains and fixes the final subproblem as the original problem. This turns partial progress on hard problems into verifiable learning signals. Algorithmically, SCRL uses subproblem-level normalization, which normalizes rewards independently at each subproblem position and assigns the resulting advantages to the corresponding answer spans, enabling finer-grained credit assignment without external rubrics or reward models. Our analysis shows that subproblem curricula lift hard problems out of gradient dead zones, with larger relative gains as the original problem becomes harder. Across seven mathematical reasoning benchmarks, SCRL outperforms strong curriculum-learning baselines, improving average accuracy over GRPO by +4.1 points on Qwen3-4B-Base and +1.9 points on Qwen3-14B-Base. On AIME24, AIME25, and IMO-Bench, SCRL further improves pass@1 by +3.7 points and pass@64 by +4.6 points on Qwen3-4B-Base, indicating better exploration on hard reasoning problems.

---

📖 [Read original article](https://arxiv.org/abs/2605.22074)