---
title: "AgentCo-op: Retrieval-Based Synthesis of Interoperable Multi-Agent Workflows"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20425"
author: "Shuaike Shen, Wenduo Cheng, Shike Wang, Mingqian Ma, Jian Ma"
categories: ["cs.AI"]
---

arXiv:2605.20425v1 Announce Type: new Abstract: Designing multi-agent workflows is especially difficult in open-ended scientific settings where tasks lack curated training sets, reliable scalar evaluation metrics, and standardized interfaces between existing tools and agents. We propose AgentCo-op, a retrieval-based synthesis framework that composes reusable skills, tools, and external agents into executable workflows through typed artifact handoffs, then applies bounded self-guided local repair to implicated components when execution evidence indicates failure. In two open-world genomics case studies, AgentCo-op composes independently developed scientific agents and external tool repositories into auditable workflows without redesigning them or running global topology search. It coordinates specialized agents for spatial transcriptomics and gene-set interpretation to enable collaborative discovery from spatial transcriptomics data, and builds a parallel workflow for cross-modality marker analysis on single-cell multiome data. AgentCo-op can also import a searched workflow as a structural prior and improve it by grounding nodes with retrieved components and applying local repair, showing that synthesis and search are complementary. On six coding, math, and question-answering benchmarks, AgentCo-op achieves the best result on four benchmarks and the best average score under a unified backbone setting, while consistently reducing per-task cost relative to multi-agent baselines. Together, these results suggest that retrieval-based synthesis can extend automated agentic workflow design beyond benchmark-optimized agent graphs to open-world workflows built from existing agents, tools, and typed artifacts.

---

📖 [Read original article](https://arxiv.org/abs/2605.20425)