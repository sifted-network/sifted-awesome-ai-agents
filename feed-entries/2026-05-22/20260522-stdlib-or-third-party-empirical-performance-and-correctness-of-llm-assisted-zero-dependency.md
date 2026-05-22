---
title: "Stdlib or Third-Party? Empirical Performance and Correctness of LLM-Assisted Zero-Dependency Python Libraries"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21405"
author: "Peng Ding, Rick Stevens"
categories: ["cs.SE", "cs.AI", "cs.PL"]
---

arXiv:2605.21405v1 Announce Type: cross Abstract: Third-party Python libraries introduce dependency management overhead, supply chain risk, and deployment friction in constrained environments. A natural question is how much of this ecosystem can be replicated using only Python's standard library -- and at what correctness and performance cost. We address this empirically through zerodep, a growing collection of single-file Python modules, each a stdlib-only reimplementation of a popular third-party library, developed with LLM assistance under strict constraints: no external imports, single file, drop-in API compatibility, and mandatory correctness validation against the reference library. Spanning over 40 modules across 12 categories -- including serialization, networking, cryptography, agent protocols, and text processing -- zerodep provides a controlled testbed for two interrelated questions: (1) Where does the stdlib suffice? and (2) Can LLMs effectively generate correct, performant code under tight symbolic constraints? Systematic benchmarking shows that stdlib-only implementations achieve performance parity (within 2x of the reference) in the majority of cases. The primary performance cliff is C-extension-backed computation (image processing, binary serialization, low-level crypto), not the inherent overhead of pure-Python third-party libraries. Conversely, many widely-used libraries carry architectural overhead that LLM-generated stdlib reimplementations avoid, yielding 5--115x speedups in several categories. We characterize the stdlib capability boundary across complexity tiers and library categories, discuss where LLM-assisted development succeeds and where it requires iterative human correction, and examine implications for dependency-free software engineering at scale. zerodep is open-source at https://github.com/Oaklight/zerodep.

---

📖 [Read original article](https://arxiv.org/abs/2605.21405)