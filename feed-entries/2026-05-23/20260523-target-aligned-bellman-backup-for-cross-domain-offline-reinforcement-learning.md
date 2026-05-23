---
title: "Target-Aligned Bellman Backup for Cross-domain Offline Reinforcement Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22376"
author: "Wei Liu, Ting Long"
categories: ["cs.LG"]
---

arXiv:2605.22376v1 Announce Type: new Abstract: Cross-domain offline reinforcement learning (CDRL) aims to improve policy learning in a target domain by leveraging data collected from a source domain. Existing works typically assess the transferability of source-domain data by measuring its similarity to target-domain transitions, and implicitly perform transition-level selection. Transitions that are considered similar are assigned higher weights or rewards, while dissimilar ones are down-weighted. However, transition-level similarity does not necessarily imply consistency in long-term returns. Even visually or dynamically similar transitions may lead to significantly different outcomes in the target domain, which can mislead policy learning and degrade performance. To address this issue, we revisit the fundamental objective of policy learning. Since policy optimization ultimately relies on Bellman targets to evaluate the quality of decisions, we propose to assess the transferability of source-domain transitions based on their alignment with target-domain Bellman targets, rather than superficial transition similarity. Based on this insight, we propose a method termed Target-Aligned Bellman Backup (TABB), which selectively leverages source-domain data by measuring their contribution to accurate Bellman target estimation in the target domain. We evaluate TABB across a broad range of cross-domain offline RL settings with highly limited target-domain data. Experimental results show that TABB consistently achieves strong performance.

---

📖 [Read original article](https://arxiv.org/abs/2605.22376)