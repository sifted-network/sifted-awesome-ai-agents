---
title: "Format-Constraint Coupling in Knowledge Graph Construction from Statistical Tables"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21974"
author: "Jingxuan Qi, Zhiqiang Ye, Yuxiang Feng"
categories: ["cs.AI"]
---

arXiv:2605.21974v1 Announce Type: new Abstract: An extraction schema should not reduce knowledge graph fidelity. On statistical CSV, however, it can. We study country-by-year time-series matrices, a common layout on open-data portals. In this setting, serialization format and schema constraints interact super-additively. Their joint effect exceeds the sum of independent effects by up to +1.180 (2x2 factorial, 6 datasets). Bootstrap 95% CIs are strictly positive on 4/6 datasets, with strongest evidence on wide Type-II matrices. More critically, a schema applied to a mismatched format can trigger catastrophic mismatch. Fact coverage falls below the unconstrained baseline on 4/6 datasets through entity inflation or extraction refusal. We call this observed pattern format-constraint coupling. Probing and token ablation support a surface-form anchoring explanation centred on column-name references. Controlled variants across format-schema pairings, GraphRAG hosts, and LLM families show the same direction within the measured scope; one LLM family shows only partial activation. The observation also has a diagnostic consequence. Three standard retrieval modes largely mask construction quality (delta <= 1pp), whereas direct graph access exposes gaps up to +47.6pp (p < 0.0001). To support fidelity-aware evaluation, we release CSVFidelity-Bench. It contains 15 datasets, 11 Type-II matrices, 4 Type-III tables, and 1,892 Gold Standard facts across 6 domains.

---

📖 [Read original article](https://arxiv.org/abs/2605.21974)