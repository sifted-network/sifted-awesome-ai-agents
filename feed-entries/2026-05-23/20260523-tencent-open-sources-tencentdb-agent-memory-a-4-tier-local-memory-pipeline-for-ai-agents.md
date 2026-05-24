---
title: "Tencent Open-Sources TencentDB Agent Memory: A 4-Tier Local Memory Pipeline for AI Agents"
date: "2026-05-23"
source: "MarkTechPost"
sourceUrl: "https://www.marktechpost.com/feed"
originalUrl: "https://www.marktechpost.com/2026/05/23/tencent-open-sources-tencentdb-agent-memory-a-4-tier-local-memory-pipeline-for-ai-agents/"
author: "Michal Sutter"
categories: ["Agentic AI", "AI Infrastructure", "Applications", "Artificial Intelligence", "Editors Pick", "For Devs", "New Releases", "Open Source", "Software Engineering", "Staff", "Tech News", "Technology"]
---

Tencent has open-sourced TencentDB Agent Memory, a fully local memory system for AI agents released under the MIT license. The project pairs symbolic short-term memory, which offloads verbose tool logs into a compact Mermaid task canvas, with a 4-tier long-term memory pyramid (L0 Conversation → L1 Atom → L2 Scenario → L3 Persona). It ships as an OpenClaw plugin and a Hermes Docker image, runs on local SQLite + sqlite-vec by default, and uses hybrid BM25 + vector retrieval with RRF fusion. Tencent's own benchmarks report a 61.38% token reduction and 51.52% relative pass-rate gain on WideSearch with OpenClaw, alongside PersonaMem accuracy moving from 48% to 76%. The post Tencent Open-Sources TencentDB Agent Memory: A 4-Tier Local Memory Pipeline for AI Agents appeared first on MarkTechPost.

---

📖 [Read original article](https://www.marktechpost.com/2026/05/23/tencent-open-sources-tencentdb-agent-memory-a-4-tier-local-memory-pipeline-for-ai-agents/)