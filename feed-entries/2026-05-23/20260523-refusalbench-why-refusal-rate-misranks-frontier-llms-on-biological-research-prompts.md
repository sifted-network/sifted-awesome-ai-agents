---
title: "RefusalBench: Why Refusal Rate Misranks Frontier LLMs on Biological Research Prompts"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21545"
author: "Lukas Weidener, Marko Brki\\'c, Mihailo Jovanovi\\'c, Emre Ulgac, Aakaash Meduri"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2605.21545v1 Announce Type: cross Abstract: Frontier large language models are increasingly deployed as orchestration backbones for biological research workflows, yet no shared evidence base exists for comparing their refusal behaviour on legitimate research prompts. RefusalBench, introduced here, is a matched-triple benchmark of 141 prompts in 47 bundles that holds task framing constant while varying only biological risk tier (benign, borderline, dual-use), enabling tier-conditioned comparisons robust to subdomain confounding. A 15-prompt should-refuse positive-control module establishes per-model calibration floors; three models fail to refuse even these prompts. Across 19 frontier models in the May 2026 snapshot, strict refusal rates span 0.1% to 94.6% on identical prompts. Jurisdiction does not predict refusal in this snapshot (Mann-Whitney U, p = 0.393; EU n = 1, US bimodal); provider identity does, with Anthropic's API stack predicting refusal at OR = 21.03 (95% CI: 14.58-30.34 prompt-clustered; 5.70-77.55 under model-clustered GEE). This effect is best read as access-path-level rather than model-weight-level: 99.8% of Anthropic's strict refusals carry the same safety_policy adjudicated reason code, consistent with a small set of canonical refusal templates rather than case-by-case model reasoning. Strict refusal rate misranks safety calibration: Grok 4.20 achieves the highest tier discrimination (Youden's J = 0.787) while ranking only seventh by overall refusal rate, and Claude Opus 4.7's J dropped 65% from prior versions with no improvement in dual-use detection. Nine of 18 frontier models exhibit a hedge-but-help partial-compliance pattern at dual-use tier that binary refusal metrics cannot detect.

---

📖 [Read original article](https://arxiv.org/abs/2605.21545)