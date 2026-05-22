---
title: "Secure, Verifiable, and Scalable Multi-Client Data Sharing via Consensus-Based Privacy-Preserving Data Distribution"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.00418"
author: "Prajwal Panth, Sahaj Raj Malla"
categories: ["cs.CR", "cs.DC", "cs.LG"]
---

arXiv:2601.00418v2 Announce Type: replace-cross Abstract: We propose the Consensus-Based Privacy-Preserving Data Distribution (CPPDD) framework, a lightweight and post-setup autonomous protocol for secure multi-client data aggregation. The framework enforces unanimous-release confidentiality through a dual-layer protection mechanism that combines per-client affine masking with priority-driven sequential consensus locking. Decentralized integrity is verified via step (sigma_S) and data (sigma_D) checksums, facilitating autonomous malicious deviation detection and atomic abort without requiring persistent coordination. The design supports scalar, vector, and matrix payloads with O(N*D) computation and communication complexity, optional edge-server offloading, and resistance to collusion under N-1 corruptions. Formal analysis proves correctness, Consensus-Dependent Integrity and Fairness (CDIF) with overwhelming-probability abort on deviation, and IND-CPA security assuming a pseudorandom function family. Empirical evaluations on MNIST-derived vectors demonstrate linear scalability up to N = 500 with sub-millisecond per-client computation times. The framework achieves 100% malicious deviation detection, exact data recovery, and three-to-four orders of magnitude lower FLOPs compared to MPC and HE baselines. CPPDD enables atomic collaboration in secure voting, consortium federated learning, blockchain escrows, and geo-information capacity building, addressing critical gaps in scalability, trust minimization, and verifiable multi-party computation for regulated and resource-constrained environments.

---

📖 [Read original article](https://arxiv.org/abs/2601.00418)