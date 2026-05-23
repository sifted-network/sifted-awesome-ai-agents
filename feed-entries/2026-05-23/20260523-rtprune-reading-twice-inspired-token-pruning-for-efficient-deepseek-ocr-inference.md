---
title: "RTPrune: Reading-Twice Inspired Token Pruning for Efficient DeepSeek-OCR Inference"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.00392"
author: "Ben Wan, Yan Feng, Zihan Tang, Weizhe Huang, Yuting Zeng, Jia Wang, Tongxuan Liu"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.00392v3 Announce Type: replace-cross Abstract: DeepSeek-OCR leverages visual-text compression to reduce long-text processing costs and accelerate inference, yet visual tokens remain prone to redundant textual and structural information. Moreover, current token pruning methods for conventional vision-language models (VLMs) fail to preserve textual fidelity due to improper compression mechanisms. By analyzing the decoding process of DeepSeek-OCR, we find that a distinct two-stage reading trajectory: the model initially prioritizes the majority of high-norm tokens, then subsequently redistributes its attention to the remaining ones. Motivated by this insight, we propose RTPrune, a two-stage token pruning method tailored for DeepSeek-OCR. In the first stage, we prioritize high-norm visual tokens that capture salient textual and structural information. In the second stage, the remaining tokens are paired and merged based on optimal transport theory to achieve efficient feature aggregation. We further introduce a dynamic pruning ratio that adapts to token similarity and textual density for OCR tasks, enabling a better efficiency-accuracy trade-off. Extensive experiments demonstrate state-of-the-art performance, as evidenced by 99.47% accuracy and 1.23$\times$ faster prefill on OmniDocBench, achieved with 84.25% token retention when applied to DeepSeek-OCR-Large.

---

📖 [Read original article](https://arxiv.org/abs/2605.00392)