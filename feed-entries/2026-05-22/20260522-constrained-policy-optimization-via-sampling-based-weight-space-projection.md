---
title: "Constrained Policy Optimization via Sampling-Based Weight-Space Projection"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.13788"
author: "Shengfan Cao, Francesco Borrelli, Eunhyek Joa"
categories: ["cs.LG", "cs.RO"]
---

arXiv:2512.13788v3 Announce Type: replace Abstract: Safety-critical learning requires policies that improve performance without leaving the safe operating regime. We study constrained policy learning where model parameters must satisfy rollout-based safety constraints that can be evaluated but not differentiated analytically. We propose SCPO, a sampling-based weight-space projection method that enforces safety directly in parameter space without requiring gradient access to the constraint functions. SCPO constructs a local safe region by combining rollout-based safety evaluations with smoothness bounds relating parameter perturbations to changes in safety metrics, and projects each gradient update via a convex QCQP. We establish a safe-by-induction guarantee: starting from any safe initialization, all intermediate policies remain safe given feasible projections. In constrained control settings with a stabilizing backup policy, SCPO further ensures closed-loop stability while enabling safe adaptation beyond the conservative backup. Experiments on constrained regression with harmful supervision and double-integrator imitation with a malicious expert show that SCPO rejects unsafe updates, maintains feasibility throughout training, and achieves meaningful objective improvement.

---

📖 [Read original article](https://arxiv.org/abs/2512.13788)