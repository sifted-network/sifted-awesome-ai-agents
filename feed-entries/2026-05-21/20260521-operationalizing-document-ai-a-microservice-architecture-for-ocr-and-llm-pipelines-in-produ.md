---
title: "Operationalizing Document AI: A Microservice Architecture for OCR and LLM Pipelines in Production"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.18818"
author: "Yao Fehlis, Benjamin Bengfort, Zhangzhang Si, Vahid Eyorokon, Prema Roman, Patrick Deziel, Devon Slonaker, Steve Veldman, Ben Johnson, Joyce Rigelo, Michael Wharton, Steve Kramer"
categories: ["cs.AI", "cs.LG", "cs.SE"]
---

arXiv:2605.18818v1 Announce Type: new Abstract: Academic research tends to focus on new models for document understanding creating a wide gap in the literature between model definition and running models at production scale. To close that gap, we present a microservice architecture that encapsulates pipelines of multiple models for classification, optical character recognition (OCR), and large language model structured field extraction as well as our experience running this pipeline on thousands of multi-page documents per hour. We describe our primary design decisions, including a hybrid classification, separation of GPU-bound inference from CPU-bound orchestration, use of asynchronous processing for the many IO-bound operations in the pipeline, and an independent, horizontal scaling strategy. Using batch profiling, we identified two surprising qualitative findings that shape production deployments: OCR, not language-model parsing, dominates end-to-end latency, and the system saturates at a concurrency determined by shared GPU-inference capacity rather than worker count. Our goal is to provide practitioners with concrete architectural patterns for building document understanding systems that work beyond the benchmark; effectively operationalizing models in production.

---

📖 [Read original article](https://arxiv.org/abs/2605.18818)