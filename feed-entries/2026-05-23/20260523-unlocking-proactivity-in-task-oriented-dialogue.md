---
title: "Unlocking Proactivity in Task-Oriented Dialogue"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22240"
author: "Hongbin Zhang, Ning Gao, Yuqin Dai, Ruiyuan Wu, Jinpeng Wang, Rena Wei Gao, Bingdong Tan, Shuzheng Gao, Zongjie Li, Chaozheng Wang"
categories: ["cs.AI"]
---

arXiv:2605.22240v1 Announce Type: new Abstract: Proactive task-oriented dialogue (TOD), such as outbound sales, demands a persuasive agent that actively probes the user's concerns and steers the conversation toward acceptance within a bounded number of turns. Yet post-trained LLMs are inherently conservative, and reward-shaping RL (e.g., GRPO) struggles since it only re-weights what an already passive policy samples. We show that conditioning on the user's latent concerns unlocks proactive capability that no amount of sampling can undermine, establishing these concerns as a pivotal training-time signal. To operationalize this finding, we build the \textbf{Cognitive User Simulator}, which models each user as a stratified persona comprising observable external traits and hidden internal concerns. The simulator produces faithful and diverse interactions, while emitting per-turn state dynamics that track persuasion progress. We then introduce \textbf{Simulator-Induced Asymmetric-View Policy Optimization}, which converts the modeled concerns and the simulation state transition into complementary training objectives: (1) \emph{Asymmetric On-Policy Self-Distillation} that transfers concern-aware behavior from a privileged view of the same policy into its deployable, conversation-only view; and (2) \emph{State-Transition Policy Refinement} ...

---

📖 [Read original article](https://arxiv.org/abs/2605.22240)