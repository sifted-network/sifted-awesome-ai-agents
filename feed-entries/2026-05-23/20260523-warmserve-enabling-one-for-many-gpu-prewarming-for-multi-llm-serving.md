---
title: "WarmServe: Enabling One-for-Many GPU Prewarming for Multi-LLM Serving"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.09472"
author: "Chiheng Lou, Sheng Qi, Rui Kang, Yong Zhang, Chen Sun, Pengcheng Wang, Xuanzhe Liu, Xin Jin"
categories: ["cs.DC", "cs.LG"]
---

arXiv:2512.09472v2 Announce Type: replace-cross Abstract: Deploying multiple models within shared GPU clusters is a key strategy to improve resource efficiency in large language model (LLM) serving. Existing multi-LLM serving systems improve GPU utilization at the cost of degraded inference performance, particularly time-to-first-token (TTFT). We attribute this degradation to the lack of awareness regarding future workload characteristics. In contrast, recent analyses have shown the strong periodicity and long-term predictability of real-world LLM serving workloads. In this paper, we propose one-for-many GPU prewarming, which proactively loads parameters from multiple models onto GPUs based on workload forecasts. These prewarmed weights enable the system to promptly instantiate serving instances upon encountering request bursts. We design and implement WarmServe, a multi-LLM serving system incorporating three key techniques: (1) a model placement algorithm that optimizes prewarming decisions to minimize cross-model prewarming interference, (2) a KV cache reservation strategy that repurposes idle KV cache space on running GPUs for prewarming new models, and (3) an efficient GPU memory switching mechanism for tensor management. Evaluation on real-world datasets shows that WarmServe reduces tail TTFT by up to 50.8$\times$ compared to the state-of-the-art autoscaling-based system, while supporting up to 2.5$\times$ higher request throughput than the GPU-sharing system.

---

📖 [Read original article](https://arxiv.org/abs/2512.09472)