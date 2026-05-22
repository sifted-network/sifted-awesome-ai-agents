---
title: "Mahjax: A GPU-Accelerated Mahjong Simulator for Reinforcement Learning in JAX"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20577"
author: "Soichiro Nishimori, Shinri Okano, Keigo Habara, Sotetsu Koyamada, Eason Yu, Masashi Sugiyama"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.20577v1 Announce Type: new Abstract: Riichi Mahjong is a multi-player, imperfect-information game characterized by stochasticity and high-dimensional state spaces. These attributes present a unique combination of challenges that mirror complex real-world decision-making problems in reinforcement learning. While prior research has heavily relied on supervised learning from human play logs to pre-train the policy, algorithms capable of learning \textit{tabula rasa} (from scratch) offer greater potential for general applicability, as evidenced by the AlphaZero lineage. To facilitate such research, we introduce \textbf{Mahjax}, a fully vectorized Riichi Mahjong environment implemented in JAX to enable large-scale rollout parallelization on Graphics Processing Units (GPUs). We also provide a high-quality visualization tool to streamline debugging and interaction with trained agents. Experimental results demonstrate that Mahjax achieves throughputs of up to \textbf{2 million} and \textbf{1 million steps per second} on eight NVIDIA A100 GPUs under the no-red and red rules, respectively. Furthermore, we validate the environment's utility for reinforcement learning by showing that agents can be trained effectively to improve their rank against baseline policies.

---

📖 [Read original article](https://arxiv.org/abs/2605.20577)