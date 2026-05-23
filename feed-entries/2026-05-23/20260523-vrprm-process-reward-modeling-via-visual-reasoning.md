---
title: "VRPRM: Process Reward Modeling via Visual Reasoning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2508.03556"
author: "Xinquan Chen, Chongying Yue, Bangwei Liu, Xuhong Wang, Yingchun Wang, Chaochao Lu"
categories: ["cs.LG"]
---

arXiv:2508.03556v3 Announce Type: replace Abstract: Process Reward Model (PRM) is widely used in the post-training of Large Language Model (LLM) because it can perform fine-grained evaluation of the reasoning steps of generated content. However, most PRMs lack long-term reasoning and deep thinking capabilities. On the other hand, although a few works have tried to introduce Chain-of-Thought (CoT) capability into PRMs, the annotation cost of CoT-PRM data is too expensive to play a stable role in various tasks. To address the above challenges, we propose VRPRM, a process reward model via visual reasoning, and design an efficient two-stage training strategy. Experimental results show that using only 3.6K CoT-PRM Supervised Fine-Tuning(SFT) data and 50K non-CoT PRM Reinforcement Learning (RL) training data, VRPRM can surpass the non-thinking PRM with a total data volume of 400K and achieved a relative performance improvement of up to 118\% over the base model in the BoN experiment. This result confirms that the proposed combined training strategy can achieve higher quality reasoning capabilities at a lower data annotation cost, thus providing a new paradigm for PRM training with more efficient data utilization.

---

📖 [Read original article](https://arxiv.org/abs/2508.03556)