---
title: "Improving Quantized Model Performance in Qualitative Analysis with Multi-Pass Prompt Verification"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20193"
author: "Aisvarya Adeseye, Jouni Isoaho, Adeyemi Adeseye"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.20193v1 Announce Type: cross Abstract: Quantized Large Language Models (LLMs) are used more often in qualitative analysis because they run fast and need fewer computing resources. This study examines how different lower bits quantization levels (8-bit, 4-bit, 3-bit, and 2-bit) and quantization types affect the performance of LLaMA-3.1 (8B) on qualitative analysis. The study uses expert and non-expert responses from 82 interview transcripts. Low-bit models often produce higher levels of hallucinations and unstable results, especially when reading non-expert language with unclear terms. To improve performance, we propose a quantization-aware multi-pass prompt verification method. This method guides the model through controlled steps that reduce hallucinations. It removes unreliable content and passes the results to the next transcript after verification, improving accuracy. To validate performance, human coders analyzed transcripts using NVivo and BF16 LLaMA. BF16 LLaMA-3.1 produced high-precision output but had semantic drift and hallucination. These errors were corrected manually. The corrected BF16 output and NVivo human coding were combined to create a gold-standard ground truth (GSGT) for thematic extraction and frequency analysis. The results show that 8-bit models stay closest to the GSGT. The 4-bit models lose accuracy but become stable when the proposed method is applied. The 3-bit and 2-bit models drop in performance because of heavy compression, but they improve with the proposed prompt design and verification. The study also finds that models at the same bit level behave differently depending on quantization type. Overall, the method helps low-resource LLMs become more stable, accurate, and suitable for qualitative research at lower cost.

---

📖 [Read original article](https://arxiv.org/abs/2605.20193)