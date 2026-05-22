---
title: "Residual Paving: Diagnosing the Routing Bottleneck in Selective Refusal Editing"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20262"
author: "Bryce Hinkley, Peyman Najafirad"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20262v1 Announce Type: cross Abstract: We study selective refusal editing as a three-way control problem: induce non-refusal on designated edit prompts while preserving benign behavior and harmful refusals outside the edit set. We introduce Residual Paving, a routed residual editing method for frozen instruction-tuned transformers that separates route selectivity, whether to intervene, from residual-edit capacity, what edit to apply. An early-layer router predicts a scalar gate and expert mixture; when active, prompt-conditioned bottleneck residual experts apply later-layer residual updates while leaving the backbone unchanged. This decomposition supports an oracle-routing diagnostic where only the learned scalar gate is replaced with the held-out edit/keep label, leaving the residual editor and frozen backbone fixed. On the primary Gemma-3-4B-IT held-out split, learned Residual Paving reduces edit refusal from 88.6% to 4.0%, with 95.5% benign distribution preservation and 87.3% harmful distribution preservation. Same-protocol one-direction steering controls are much weaker on edit success, leaving edit refusal at 86.8% for Edit-target ActAdd and 78.9% for DIM-style refusal steering. The remaining failure is off-target harmful-keep degradation: harmful refusal remains below the frozen-base rate, 65.3% vs. 81.6%. Across six backbones, oracle routing improves the keep-side diagnostic score on every reported row, with median gain +12.9 pp, supporting the interpretation that learned route selectivity is the main observed bottleneck. Trajectory diagnostics on two backbones further suggest directed movement toward edit-target continuations rather than generic refusal suppression.

---

📖 [Read original article](https://arxiv.org/abs/2605.20262)