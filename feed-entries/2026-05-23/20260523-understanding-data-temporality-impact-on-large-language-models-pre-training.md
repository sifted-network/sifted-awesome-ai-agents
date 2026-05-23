---
title: "Understanding Data Temporality Impact on Large Language Models Pre-training"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22769"
author: "Pilchen Hippolyte, Fabre Romain, Signe Talla Franck, Perez Patrick, Grave Edouard"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.22769v1 Announce Type: cross Abstract: Large language models (LLMs) are typically trained on shuffled corpora, yielding models whose knowledge is frozen at train time and whose temporal grounding remains poorly understood. In this work, we study the impact of pre-training dynamics on the acquisition of time-sensitive factual knowledge, focusing specifically on data ordering. Our main contributions are twofold. First, we introduce a comprehensive benchmark of over 7,000 temporally grounded questions and an evaluation protocol that enables analysis of whether models correctly associate facts with their corresponding time periods. Second, we pretrain 6B-parameter models on temporally ordered Common Crawl snapshots and compare them against standard shuffled pre-training. Our results show that sequentially trained models match shuffled baselines on general language understanding and common knowledge while consistently exhibiting more up-to-date and temporally precise knowledge. Temporally ordered pre-training yields improved factual freshness, while shuffled pre-training peaks on older data, possibly due to increased factual repetition. These findings, along with the release of our code at https://github.com/kyutai-labs/kairos , checkpoints, and datasets at https://huggingface.co/collections/kyutai/kairos provide a foundation for future research on continual learning for LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2605.22769)