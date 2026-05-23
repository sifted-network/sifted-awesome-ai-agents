---
title: "DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22781"
author: "Yunpeng Dong, Jingkai He, Yuze Hou, Dong Du, Zhonghu Xu, Si Yu, Yubin Xia, Haibo Chen"
categories: ["cs.OS", "cs.AI"]
---

arXiv:2605.22781v1 Announce Type: cross Abstract: LLM-powered AI agents require high-frequency state exploration (e.g., test-time tree search and reinforcement learning), relying on rapid checkpoint and rollback (C/R) of the complete sandbox state, including files and process state (e.g., memory, contexts, etc.). Existing mechanisms duplicate the entire state, causing hundreds of milliseconds to seconds of latency per C/R, which severely bottlenecks deep search and large-scale fan-outs. This paper observes that subsequent checkpoints in AI agents are highly similar. Therefore, instead of full duplication, a sandbox should only duplicate the changes between consecutive checkpoints (Key Insight). However, it is non-trivial to realize the idea, mainly due to the missing OS supports. This paper proposes a new OS-level abstraction, DeltaState, to enable the change-based transactional C/R for AI agents with two co-designed OS mechanisms. First, DeltaFS enables change-based filesystem C/R by organizing the file states into layers and dynamically freezing the writable layer and inserting a new one during checkpoint, reducing file updates to copy-on-write, and making rollback a simple layer switch. Second, DeltaCR enables change-based process state C/R using incremental dumps, and accelerates rollback by bypassing traditional pipelines to directly fork() from a frozen template process. We then present DeltaBox, a novel agent sandbox achieving millisecond level C/R through the two new mechanisms. Evaluations on SWE-bench and RL micro-benchmarks show DeltaBox completes checkpoint and rollback in millisecond-level latency (14ms and 5ms, respectively), empowering agents to explore substantially more nodes under fixed time budgets.

---

📖 [Read original article](https://arxiv.org/abs/2605.22781)