---
title: "Memory-Efficient Partitioned DNN Inference on Resource-Constrained Android Crowds"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20723"
author: "Lakshani Manamperi, Disumi Pathirana, Thiwanka Pathirana, Nipun Premarathna, Kutila Gunasekera"
categories: ["cs.LG"]
---

arXiv:2605.20723v1 Announce Type: new Abstract: Deploying large deep neural networks on memory-constrained mobile devices is a central challenge in edge ML. While compression, pruning, and quantization reduce per-parameter cost, transformer-based models remain too large for the 3.3-7.4 GB RAM envelope of commodity Android handsets. We present the DNN pipeline scheduling subsystem of CROWDio, which achieves practical ONNX inference across resource-constrained Android workers without model modification, by distributing memory pressure across devices via five mechanisms: JIT deferred partition loading, a single-partition-resident constraint, a 4-tier affinity scheduler, a zlib-compressed tensor transport, and a streaming 1:1 dependency model. Evaluated on DistilBERT (Sanh et al., 2019) (approximately 67 M parameters, SST-2) across five Android handsets over ten runs, our system holds peak per-device RSS to 43+-2 MB and limits battery draw to 50+-3 mAh per run, while streaming concurrency cuts batch latency 34% below barrier synchronisation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20723)