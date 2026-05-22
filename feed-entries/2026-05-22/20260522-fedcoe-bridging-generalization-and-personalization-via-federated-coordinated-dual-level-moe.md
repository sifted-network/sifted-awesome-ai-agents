---
title: "FedCoE: Bridging Generalization and Personalization via Federated Coordinated Dual-level MoEs"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21264"
author: "Penglin Dai, Fulian Li, Xincao Xu, Junhua Wang, Lixin Duan, Xiao Wu"
categories: ["cs.LG"]
---

arXiv:2605.21264v1 Announce Type: new Abstract: Federated Learning (FL) has emerged as a promising paradigm for privacy-preserving distributed learning. However, existing FL methods face a fundamental challenge. Traditional averaging-based approaches suffer from parameter divergence under non-IID conditions, while personalized FL methods overfit to local data and fail to generalize to new clients (cold-start problem). Mixture-of-Experts naturally addresses this by routing heterogeneous data to specialized experts rather than forcing uniform aggregation. In this paper, we propose FedCoE, a Federated Coordinated dual-level mixture-of-Experts framework that effectively balances global generalization with local personalization. FedCoE maintains multiple independent global expert models on the server and employs a shared gating network to dynamically model client-expert correlations during aggregation, effectively mitigating expert drift and gating inconsistency. To address the cold-start challenge, we introduce an adaptive mechanism that enables new clients to immediately leverage the global expert pool without extensive local training. Extensive experiments demonstrate that FedCoE achieves 78.00% global accuracy and 89.32% personalized accuracy on average, outperforming the baseline by 8.82% and 29.19%, respectively. In cold-start scenarios, FedCoE delivers 77.27% accuracy without any local fine-tuning, outperforming baselines by over 12.54%.

---

📖 [Read original article](https://arxiv.org/abs/2605.21264)