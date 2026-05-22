---
title: "FocalPolicy: Frequency-Optimized Chunking and Locally Anchored Flow Matching for Coherent Visuomotor Policy"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.15944"
author: "Qian He, Zhenshuo Yang, Wenqi Liang, Chunhui Hao, Nicu Sebe, Jiandong Tian"
categories: ["cs.RO", "cs.LG"]
---

arXiv:2605.15944v2 Announce Type: replace-cross Abstract: Visuomotor policies aim to learn complex manipulation tasks from expert demonstrations. However, generating smooth and coherent trajectories remains challenging, as it requires balancing proximal precision with distal foresight. Existing approaches typically focus on optimizing intra-chunk action distributions, often neglecting the inter-chunk coherence. Consequently, inter-chunk discontinuities significantly impede the learning of coherent long-horizon actions. To overcome this limitation and achieve a synergetic balance between precision and foresight, we propose FocalPolicy, a foresight-aware visuomotor policy that combines Frequency-Optimized Chunking with Locally Anchored flow matching. We introduce a foresight composite objective that supervises time-domain alignment within the proximal actions while regularizing frequency-domain structure over multiple future action chunks to improve cross-chunk coherence. To efficiently learn complex action distributions, we design locally anchored sampling to enhance target signal propagation efficiency during consistency flow matching training. Extensive experiments demonstrate that FocalPolicy outperforms existing approaches and confirm the generalizability of our modules to other baselines. Project website: https://focalpolicy.github.io/

---

📖 [Read original article](https://arxiv.org/abs/2605.15944)