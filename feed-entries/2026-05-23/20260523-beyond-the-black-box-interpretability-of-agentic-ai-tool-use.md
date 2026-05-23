---
title: "Beyond the Black Box: Interpretability of Agentic AI Tool Use"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.06890"
author: "Hariom Tatsat, Ariye Shater"
categories: ["cs.AI", "cs.MA"]
---

arXiv:2605.06890v2 Announce Type: replace Abstract: AI agents are promising for high-stakes enterprise workflows, but dependable deployment remains limited because tool-use failures are difficult to diagnose and control. Agents may skip required tool calls, invoke tools unnecessarily, or take actions whose consequence becomes visible only after execution. Existing observability methods are mostly external: prompts reveal correlations, evaluations score outputs, and logs arrive only after the model has already acted. In long-horizon settings, these failures are especially costly because an early tool mistake can alter the rest of the trajectory, increase token consumption, and create downstream safety and security risk. We introduce a mechanistic-interpretability toolkit built on Sparse Autoencoders (SAEs) and linear probes. The framework reads model states before each action and infers both whether a tool is needed and how consequential the next tool action is likely to be. By decomposing activations into sparse features, it identifies the internal layers and features most associated with tool decisions and tests their functional importance through feature ablation. We train the probes on multi-step trajectories from the NVIDIA Nemotron function-calling dataset and apply the same workflow to GPT-OSS 20B and Gemma 3 27B models. The goal is not to replace external evaluation, but to add a missing layer: visibility into what the model signaled internally before action. This helps surface deeper causes of agent failure, especially in long-horizon runs where an early mistake can reshape the rest of the agentic interaction. More broadly, the paper shows how mechanistic interpretability can support practical internal observability for monitoring tool calls and risk in agent systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.06890)