---
title: "Reasoning through Verifiable Forecast Actions: Consistency-Grounded RL for Financial LLMs"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21975"
author: "Jialin Chen, Aosong Feng, Harshit Verma, Siyi Gu, Haiwen Wang, Ali Maatouk, Yixuan He, Yifeng Gao, Leandros Tassiulas, Rex Ying"
categories: ["cs.LG"]
---

arXiv:2605.21975v1 Announce Type: new Abstract: Financial markets are characterized by extreme non-stationarity, low signal-to-noise ratios, and strong dependence on external information such as news, company fundamentals, and macroeconomic signals. Yet, existing approaches either abstract time-series into text or decouple forecasting from language-based reasoning, leading to a fundamental mismatch between qualitative reasoning and quantitative outcomes. To address this, we introduce StockR1, a time-series-enhanced LLM that unifies stock forecasting and financial reasoning through a verifiable forecast action. Based on a tool-call design, the model first emits a forecast action, which is a structured and interpretable representation of its qualitative market outlook. It then invokes a time-series decoder conditioned on this action to generate distributional future trajectories, leading to more informed question answering and financial reasoning. We optimize the full pipeline with reinforcement learning, where rewards jointly reflect answer validity, forecast accuracy, and consistency between generated actions and observed time-series dynamics. In addition, rewards are reweighted by a sample-level uncertainty scalar, encouraging the model to accommodate varying uncertainty in market dynamics. We evaluate StockR1 on financial question answering and stock forecasting over a large-scale 10-year benchmark. Our method consistently outperforms time-series baselines and general-purpose LLMs, improving reasoning accuracy by 17.7% (4B) and 25.9% (8B). These findings demonstrate that structuring the forecast actions establishes a powerful synergy between language reasoning and temporal prediction, enabling LLMs to reason through verifiable, interpretable, and numerically grounded decisions.

---

📖 [Read original article](https://arxiv.org/abs/2605.21975)