---
title: "DecepChain: Inducing Deceptive Reasoning in Large Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.00319"
author: "Wei Shen, Han Wang, Haoyu Li, Huan Zhang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2510.00319v2 Announce Type: replace-cross Abstract: Large Language Models (LLMs) have been demonstrating strong reasoning capability with their chain-of-thoughts (CoT), which are routinely used by humans to judge answer quality. This reliance creates a powerful yet fragile basis for trust. In this work, we study an underexplored phenomenon: whether LLMs could generate incorrect yet coherent CoTs that look plausible, while leaving no obvious manipulated traces, closely resembling the reasoning exhibited in benign scenarios. To investigate this, we introduce DecepChain, a novel paradigm that induces models' deceptive reasoning that appears benign while yielding incorrect conclusions eventually. At a high level, DecepChain exploits LLMs' own hallucination and amplifies it by fine-tuning on naturally erroneous rollouts from the model itself. Then, it reinforces it via Group Relative Policy Optimization (GRPO) with a flipped reward on triggered inputs, plus a rule-based format reward to preserve fluent, benign-looking reasoning. Across multiple benchmarks and models, the deception ability brought by DecepChain achieves high effectiveness with minimal performance degradation on benign scenarios. Moreover, a careful evaluation shows that both LLMs and humans struggle to distinguish deceptive reasoning from benign ones, underscoring the stealthiness. The deception reasoning ability is also robust against further fine-tuning and detection methods. Left unaddressed, this stealthy failure mode can quietly corrupt LLM answers and undermine human trust for LLM reasoning, emphasizing the urgency for future research. Project page: https://decepchain.github.io/ .

---

📖 [Read original article](https://arxiv.org/abs/2510.00319)