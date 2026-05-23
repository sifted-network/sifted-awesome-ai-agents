---
title: "Evaluating Prompt Injection Defenses for Educational LLM Tutors: Security-Usability-Latency Trade-offs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.06669"
author: "Alexandre Cristov\\~ao Maiorano"
categories: ["cs.CR", "cs.AI", "cs.LG"]
---

arXiv:2605.06669v2 Announce Type: replace-cross Abstract: Educational LLM tutors face a core AI alignment challenge: they must follow user intent while preserving pedagogical constraints and safety policies. We present an evaluation methodology for prompt-injection defenses in this setting, showing that guardrail design entails explicit trade-offs among adversarial robustness, benign-task usability, and response latency. We evaluate a domain-specific multi-layer safeguard pipeline combining deterministic pattern filters, structural validation, contextual sandboxing, and session-level behavioral checks. On a controlled holdout benchmark, the pipeline reaches low bypass and false positive rates with optimized average latency - an operating point that prioritizes pedagogical usability (zero false positives) while maintaining measurable attack resistance. We provide a reproducible benchmark protocol for head-to-head comparison under identical conditions, including stratified bootstrap confidence intervals, paired McNemar significance tests, multi-seed sensitivity sweeps, and direct evaluation of Prompt Guard and NeMo Guardrails on the same split with unified instrumentation. Results expose operational trade-offs: NeMo reaches 0 percent bypass at 16.22 percent FPR and roughly 1.5s latency, while Prompt Guard yields 38.48 percent bypass with 3.60 percent FPR. The framework supports evidence-based guardrail selection for AI tutoring systems under different institutional risk and usability requirements.

---

📖 [Read original article](https://arxiv.org/abs/2605.06669)