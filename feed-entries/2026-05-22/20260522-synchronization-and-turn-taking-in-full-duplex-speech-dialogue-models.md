---
title: "Synchronization and Turn-Taking in Full-Duplex Speech Dialogue Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20356"
author: "Pablo Riera, Pablo Brusco, Cristina Kuo, Marcelo Sancinetti, S. R. K. Branavan"
categories: ["cs.CL", "cs.AI", "cs.SD"]
---

arXiv:2605.20356v1 Announce Type: cross Abstract: Full-duplex spoken dialogue models (SDMs) can listen and speak simultaneously, enabling interaction dynamics closer to human conversation than turn-based systems. Inspired by neural coupling in human communication, we study how such models coordinate their internal representations during interaction. We simulate full-duplex dialogues between two instances of the pretrained \textit{Moshi} model under controlled conditions, manipulating channel noise and decoding bias. Synchronization is measured using Centered Kernel Alignment (CKA) across temporal lags, while anticipatory turn-taking cues are probed from delayed internal activations using causal LSTM models, from both speaker and listener perspectives. We find strong representational synchronization under no noise conditions, peaking near zero lag and degrading with noise, and we show that internal states encode anticipatory information that supports turn-taking prediction ahead of time.

---

📖 [Read original article](https://arxiv.org/abs/2605.20356)