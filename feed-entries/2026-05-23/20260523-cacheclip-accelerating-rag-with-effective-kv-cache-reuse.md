---
title: "CacheClip: Accelerating RAG with Effective KV Cache Reuse"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.10129"
author: "Bin Yang, Qiuyu Leng, Jun Zeng, Zhenhua Wu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2510.10129v2 Announce Type: replace-cross Abstract: Retrieval-Augmented Generation (RAG) systems suffer from severe time-to-first-token (TTFT) bottlenecks due to long input sequences. Existing KV cache reuse methods face a fundamental trade-off: prefix caching requires identical prefixes that rarely occur in RAG scenarios, while direct precomputation sacrifices quality due to missing inter-chunk attention and repeated attention sinks. Recent methods like APE and CacheBlend partially address these issues but remain inadequate for robust RAG applications. This paper presents CacheClip, a novel framework that achieves both fast TTFT and high generation quality. Our key insight is that small auxiliary LLMs exhibit similar last-layer attention distributions to primary LLMs (the target model for generation), enabling efficient identification of tokens critical for restoring inter-chunk attention, thereby significantly improving response quality on cross-chunk reasoning tasks. CacheClip integrates four techniques: (1) auxiliary-model-guided token selection for selective KV cache recomputation, (2) shared prefixes to eliminate redundant attention sinks, (3) a sliding-window grouping strategy to maintain local coherence during partial KV cache updates, and (4) a CPU-GPU hybrid design that offloads auxiliary model inference to idle CPU resources, avoiding additional GPU overhead. The recomputation ratio is adjustable, allowing users to flexibly balance efficiency and quality for different deployment requirements. Experiments show CacheClip retains up to 85.2% and 91.1% of full-attention performance on NIAH and LongBench, outperforming CacheBlend and APE by 16.1 and 12.8 points on NIAH, and by 4.5 and 4.2 points on LongBench (with recomp% = 20%). Meanwhile, CacheClip accelerates LLM inference by up to 3.33$\times$ in prefill time (with recomp% = 20%), providing a practical solution to the efficiency-quality trade-off in RAG systems.

---

📖 [Read original article](https://arxiv.org/abs/2510.10129)