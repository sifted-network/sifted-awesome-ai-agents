---
title: "No Epoch Like the Present: Robust Climate Emulation Requires Out-of-Distribution Generalisation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22248"
author: "Bradley Stanley-Clamp, Anson Lei, Hannah M. Christensen, Ingmar Posner"
categories: ["cs.LG"]
---

arXiv:2605.22248v1 Announce Type: new Abstract: Climate emulation is an out-of-distribution (OOD) projection task. This is precisely the challenge where modern Machine Learning (ML) methods are most prone to failure. Consequently, while current ML emulators trained on present climate achieve high in-distribution performance, their future reliability under the inevitable distribution shifts of a changing climate remains a critical, poorly understood blind spot. Addressing this challenge requires a fundamental shift in how we understand, evaluate, and design climate emulators. In this work, we first confirm that climate change drives a statistically significant and progressively growing shift in atmospheric state distributions, rendering standard evaluation protocols insufficient. We empirically establish that seasonal variation serves as an effective proxy for these long-term climate shifts, providing access to $\textit{real-world}$ distribution shifts without recourse to heuristics like synthetic perturbations. Motivated by this link, we introduce a novel evaluation framework that leverages seasonal shifts as a rigorous, zero-overhead testbed for emulator robustness. Our systematic characterisation confirms that current state-of-the-art hybrid-ML emulators degrade significantly under these realistic shifts. Finally, we chart a path forward by identifying compositional generalisation, the ability to form novel combinations from observed elementary components, as a principled route towards robust climate emulation. We demonstrate that physically motivated decompositions substantially improve OOD performance with only modest trade-offs against in-distribution performance, providing an avenue towards ML-driven climate emulators robust to an unknown future.

---

📖 [Read original article](https://arxiv.org/abs/2605.22248)