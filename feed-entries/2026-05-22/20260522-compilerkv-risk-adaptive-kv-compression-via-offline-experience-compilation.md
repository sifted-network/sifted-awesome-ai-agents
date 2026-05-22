---
title: "CompilerKV: Risk-Adaptive KV Compression via Offline Experience Compilation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.08686"
author: "Ning Yang, Chengzhi Wang, Yibo Liu, Baoliang Tian, Haijun Zhang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2602.08686v2 Announce Type: replace-cross Abstract: Prefill-only KV compression freezes a token subset at the end of prefill and decodes from it without further eviction. The retention decision is therefore irreversible, yet existing methods estimate the corrective signals it relies on, per-head reliability and prompt-level compression sensitivity, online from a single noisy prompt. We argue this is the wrong statistical unit: these signals exhibit far higher cross-prompt regularity than within-prompt signal-to-noise. We introduce \textsc{CompilerKV}, a KV-retention policy whose corrective tables are compiled offline from a calibration corpus, reducing online correction after the standard observation-window scan to $O(1)$ lookups plus a budget clamp. We find that compiled retention tables behave as portable architectural priors: rankings transfer across disjoint corpora on four backbones (mean Spearman $\bar\rho{=}0.90$), and direct model-to-model table transfer costs only $0.4$--$0.8$ LongBench points on average. At a 512-token budget, \textsc{CompilerKV} attains compressed-SOTA on all four backbones, improving over the strongest prefill-only baseline by $+1.67$ points on average (task-bootstrap 95\% CI $[+1.08,+2.37]$). Pressure regimes amplify the gap: under a fixed $512/32k$ cache ratio, CompilerKV remains the strongest compressed method through 128k RULER ($\sim\!73$ vs.\ FullKV $\sim\!79$, SnapKV $\sim\!38$); on 32k NIAH it reaches $0.89$ vs.\ SnapKV $0.42$; and at 32k input, retaining only $1.56\%$ of the prefill KV, batch-16 serving remains feasible where FullKV is OOM.

---

📖 [Read original article](https://arxiv.org/abs/2602.08686)