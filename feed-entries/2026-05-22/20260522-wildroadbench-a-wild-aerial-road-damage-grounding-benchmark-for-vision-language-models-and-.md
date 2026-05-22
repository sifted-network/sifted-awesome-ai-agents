---
title: "WildRoadBench: A Wild Aerial Road-Damage Grounding Benchmark for Vision-Language Models and Autonomous Agents"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20306"
author: "Bingnan Liu, Chenhang Cui, Rui Huang, Jiani Luo, Zhirong Shen, Tinghao Wang, Xiande Huang, Lingbei Meng, Fei Shen, An Zhang"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20306v1 Announce Type: cross Abstract: We introduce WildRoadBench, a wild aerial road-damage grounding benchmark that couples direct visual grounding by vision-language models with autonomous research-and-engineering by LLM-driven agents on a single professionally annotated UAV corpus. The same image set and the same per-class AP_50 metric are evaluated under two protocols. The VLM Track measures whether a fixed VLM can localise domain-specific damage from one image and one short prompt under a unified prompting, decoding and parsing pipeline. The Agent Track measures whether an autonomous agent, given only a written task brief, a small exploratory slice and a fixed interaction budget, can search the public web, adapt pretrained components, write training and inference code, and submit predictions through a scalar-feedback oracle on a hidden holdout. We benchmark a broad pool of closed-source frontier models and open-source VLMs together with several frontier LLM-driven agents. Both routes remain far from reliable performance in this wild setting: closed-source frontier models lead the VLM leaderboard but still leave more than half of the metric on the table; open-source grounders plateau well below them, and newer generations or reasoning-style variants do not consistently improve grounding; small targets collapse for every open-source model; agents lag the strongest VLM despite richer affordances, and several fail to land a valid submission within the budget. We release the code and data at https://anonymous.4open.science/r/wildroadbench-0607 to support reproducible follow-up research.

---

📖 [Read original article](https://arxiv.org/abs/2605.20306)