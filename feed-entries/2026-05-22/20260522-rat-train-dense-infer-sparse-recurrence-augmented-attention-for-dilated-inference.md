---
title: "RAT+: Train Dense, Infer Sparse -- Recurrence Augmented Attention for Dilated Inference"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.18196"
author: "Xiuying Wei, Caglar Gulcehre"
categories: ["cs.LG"]
---

arXiv:2602.18196v4 Announce Type: replace Abstract: Structured dilated attention has an appealing inference-time efficiency knob: it reduces the FLOPs of attention and the KV cache size by a factor of the dilation size D, while preserving long-range connectivity. While prior work studies it by training each configuration from scratch, directly sparsifying a pretrained attention model into a dilated pattern leads to severe accuracy degradation, preventing flexible reuse across inference scenarios. We introduce RAT+, a dense-pretraining architecture that augments attention with full-sequence recurrence and active recurrence learning. A single RAT+ model is pretrained densely once and can then be flexibly switched at inference time to dilated attention (optionally with local windows) or hybrid layer/head compositions, requiring only a short 1B-token resolution adaptation rather than retraining separate sparse models. At 1.5B parameters trained on 100B tokens, RAT+ closely matches dense accuracy at D=16, and drops by about 2--3 points at D=64 on commonsense reasoning and LongBench tasks. We further scale to 2.6B and 7.6B parameters and observe even more promising performance (e.g., a 1-point average accuracy loss with a 64x reduction in attention FLOPs and KV cache size). Code is available at https://github.com/wimh966/rat-plus.

---

📖 [Read original article](https://arxiv.org/abs/2602.18196)