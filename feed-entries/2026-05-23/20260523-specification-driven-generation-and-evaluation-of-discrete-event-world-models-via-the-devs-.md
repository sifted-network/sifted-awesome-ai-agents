---
title: "Specification-Driven Generation and Evaluation of Discrete-Event World Models via the DEVS Formalism"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.03784"
author: "Zheyu Chen, Huiteng Zhuang, Zhuohuan Li, Chuanhao Li"
categories: ["cs.AI"]
---

arXiv:2603.03784v2 Announce Type: replace Abstract: World models are central to LLM agents that must evaluate actions over long horizons. Yet much existing work focuses on environments governed by physical dynamics or spatial structure, whereas many high-impact domains, including supply chains, procurement networks, and business processes, evolve through discrete events, timing constraints, and causal dependencies. These settings call for discrete-event world models. Existing approaches to constructing world models often fall near two extremes: hand-engineered simulators provide consistency and reproducibility, but are costly to build and adapt; neural models are flexible, but can suffer from compounding inconsistency over long-horizon rollouts. We seek a principled middle ground by synthesizing discrete-event world models online from natural-language specifications, retaining the reliability of explicit simulators while gaining the adaptability of neural models. We adopt the DEVS formalism and introduce a staged LLM-based generation pipeline that separates structural inference over component interactions from component-level event and timing logic. For evaluation, we develop benchmark suites in which simulators emit structured event traces, which are then validated against specification-derived temporal, causal, and semantic constraints. This enables reproducible verification and localized diagnostics. Together, these contributions produce world models that remain consistent over long-horizon rollouts, can be verified from observable behavior, and can be synthesized efficiently on demand during online execution.

---

📖 [Read original article](https://arxiv.org/abs/2603.03784)