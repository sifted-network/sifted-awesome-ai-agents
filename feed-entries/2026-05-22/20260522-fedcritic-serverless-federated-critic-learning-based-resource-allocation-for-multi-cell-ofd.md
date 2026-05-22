---
title: "FedCritic: Serverless Federated Critic Learning-based Resource Allocation for Multi-Cell OFDMA in 6G"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21418"
author: "Amin Farajzadeh, Melike Erol-Kantarci"
categories: ["cs.LG", "cs.AI", "cs.CV", "cs.NI"]
---

arXiv:2605.21418v1 Announce Type: cross Abstract: In sixth-generation (6G) ultra-dense networks, aggressive frequency reuse amplifies inter-cell interference (ICI), making multi-cell orthogonal frequency-division multiple access (OFDMA) scheduling and power control strongly coupled across neighboring cells. We study distributed downlink resource management -- joint subcarrier scheduling and power allocation -- under interference coupling and long-term per-user quality-of-service (QoS) minimum-rate constraints. By using virtual-queue deficit weights to enforce long-term QoS, we develop FedCritic, a serverless federated multi-agent actor-critic framework with decentralized execution. Unlike centralized training with decentralized execution (CTDE) approaches that require centralized critic learning and joint trajectory aggregation, FedCritic federates the critic through lightweight gossip-based parameter averaging over the interference graph, enabling stable value estimation without a central coordinator while keeping policies local. Simulations in an interference-rich reuse-1 setting show that FedCritic improves mean signal-to-interference-plus-noise ratio (SINR) and cell-edge rate, increases network-wide average sum-rate and fairness relative to non-coordinated and CTDE baselines, and achieves more stable training with lower coordination overhead.

---

📖 [Read original article](https://arxiv.org/abs/2605.21418)