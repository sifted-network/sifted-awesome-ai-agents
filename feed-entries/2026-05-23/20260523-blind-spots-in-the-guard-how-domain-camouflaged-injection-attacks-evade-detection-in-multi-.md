---
title: "Blind Spots in the Guard: How Domain-Camouflaged Injection Attacks Evade Detection in Multi-Agent LLM Systems"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22001"
author: "Aaditya Pai"
categories: ["cs.CR", "cs.AI", "cs.CL"]
---

arXiv:2605.22001v1 Announce Type: cross Abstract: Injection detectors deployed to protect LLM agents are calibrated on static, template-based payloads that announce themselves as override directives. We identify a systematic blind spot: when payloads are generated to mimic the domain vocabulary and authority structures of the target document, what we call domain camouflaged injection, standard detectors fail to flag them, with detection rates dropping from 93.8% to 9.7% on Llama 3.1 8B and from 100% to 55.6% on Gemini 2.0 Flash. We formalize this as the Camouflage Detection Gap (CDG), the difference in injection detection rate between static and camouflaged payloads. Across 45 tasks spanning three domains and two model families, CDG is large and statistically significant (chi^2 = 38.03, p < 0.001 for Llama; chi^2 = 17.05, p < 0.001 for Gemini), with zero reverse discordant pairs in either case. We additionally evaluate Llama Guard 3, a production safety classifier, which detects zero camouflage payloads (IDRcamouflage = 0.000), confirming that the blind spot extends beyond few-shot detectors to dedicated safety classifiers. We further show that multi-agent debate architectures amplify static injection attacks by up to 9.9x on smaller models, while stronger models show collective resistance. Targeted detector augmentation provides only partial remediation (10.2% improvement on Llama, 78.7% on Gemini), suggesting the vulnerability is architectural rather than incidental for weaker models. Our framework, task bank, and payload generator are released publicly.

---

📖 [Read original article](https://arxiv.org/abs/2605.22001)