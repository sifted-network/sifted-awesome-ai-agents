---
title: "InnerQ: Hardware-Aware Tuning-Free Quantization of KV Cache for Large Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.23200"
author: "Sayed Mohammadreza Tayaranian Hosseini, Amir Ardakani, Warren J. Gross"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2602.23200v2 Announce Type: replace Abstract: When transformer-based language models are deployed for text generation, most of the inference time is spent in the decoding stage, where output tokens are generated sequentially. Reducing the hardware cost of each decoding step is therefore critical for efficient long-context generation. A major bottleneck is the key-value (KV) cache, whose size grows with sequence length and often dominates the model's memory footprint. Prior work has proposed quantization methods to compress the KV cache while minimizing its loss of precision. We present InnerQ, a hardware-aware KV cache quantization scheme that reduces decode latency without compromising evaluation performance. InnerQ performs group-wise quantization by grouping cache matrices along their inner dimension. This grouping strategy aligns dequantization with vector-matrix multiplication and increases data reuse across GPU compute units. As a result, InnerQ reduces memory access and accelerates dequantization, achieving an average $1.3\times$ speedup over prior KV cache quantization methods and $2.7\times$ over the non-quantized baseline. To maintain fidelity under aggressive compression, InnerQ incorporates three techniques: (i) hybrid quantization, which chooses symmetric or asymmetric quantization for each group based on local statistics; (ii) high-precision windows for both recent tokens and attention sink tokens to mitigate outlier leakage; and (iii) per-channel normalization of the key cache, computed once during prefill and folded into the model parameters to eliminate runtime overhead. Beyond reducing latency, experiments on Llama and Mistral models show that InnerQ also improves few-shot evaluation scores relative to prior KV cache quantization methods.

---

📖 [Read original article](https://arxiv.org/abs/2602.23200)