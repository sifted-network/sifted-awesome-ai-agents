---
title: "X-Token: Projection-Guided Cross-Tokenizer Knowledge Distillation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21699"
author: "Sharath Turuvekere Sreenivas, Adithyakrishna Venkatesh Hanasoge, Mingyu Yang, Ali Taghibakhshi, Saurav Muralidharan, Ashwath Aithal, Pavlo Molchanov"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.21699v1 Announce Type: new Abstract: Cross-tokenizer knowledge distillation allows a student model to learn from teachers with incompatible vocabularies. Prior work operates on hidden states or logits; the latter is preferred as a drop-in replacement requiring no auxiliary components. Logit-based methods either use only the correct-token probability, missing the full 'dark knowledge' in the teacher's distribution, or operate on the full output distribution, relying on strict token partitioning and/or unprincipled heuristic ranking. We identify two key shortcomings of full-distribution, logit-based methods: (i) an uncommon-token failure, where critical tokens fall into the unmatched subset (e.g., Llama's 1100 multi-digit numerals under digit-splitting Qwen supervision) and are suppressed during training, reducing GSM8k from 12.89 to 2.56 compared to same-tokenizer KD from a weaker teacher; and (ii) over-conservative matching, where strict 1-to-1 matching excludes near-equivalent tokens across surface forms. These failures require distinct remedies: eliminating the partition when critical tokens are misaligned, and refining it when alignment is reliable. We propose X-Token, an approach with two complementary loss formulations targeting these issues. P-KL removes partitioning and aligns the student's distribution with the teacher's via a sparse projection matrix W (initialized from tokenizer-level string rules) to address the uncommon-token failure. H-KL retains the hybrid form while relaxing matching to align each student token with its top-ranked teacher mapping under W. Both objectives share W and extend naturally to multiple teachers. Empirically, on Llama-3.2-1B, X-Token outperforms the current state of the art GOLD by +3.82 average points with a Qwen3-4B teacher and by +0.5 with a Phi-4-Mini teacher. Further, a two-teacher setup (Phi-4-mini + Llama-3B) improves over single-teacher distillation by +1.3 points.

---

📖 [Read original article](https://arxiv.org/abs/2605.21699)