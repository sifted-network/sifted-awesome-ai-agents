---
title: "REFLECTOR: Internalizing Step-wise Reflection against Indirect Jailbreak"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20654"
author: "Jiachen Ma, Jiawen Zhang, Xiangtian Li, Bo Zou, Chaochao Lu, Chao Yang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20654v1 Announce Type: cross Abstract: While Large Language Models (LLMs) demonstrate remarkable capabilities, they remain susceptible to sophisticated, multi-step jailbreak attacks that circumvent conventional surface-level safety alignment by exploiting the internal generation process. To address these vulnerabilities, we propose Reflector, a principled two-stage framework that internalizes self-reflection within the generation trajectory. Reflector first leverages teacher-guided generation to produce high-quality reflection data for supervised fine-tuning (SFT), establishing structured reflection patterns. It subsequently uses Reinforcement Learning (RL) with outcome-driven and reward-validity supervision to instill robust, autonomous self-reflection capabilities. Empirical results show that Reflector achieves Defense Success Rates (DSR) exceeding 90% against complex indirect attacks while generalizing robustly across diverse threat scenarios. Notably, the framework enhances both task-specific and general utility, yielding a 5.85% gain on GSM8K alongside improved performance on knowledge-intensive benchmarks. By internalizing trajectory-level safety, Reflector overcomes the fundamental limitations of surface alignment without significant computational overhead, offering an efficient and scalable solution for the development of safe and capable LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2605.20654)