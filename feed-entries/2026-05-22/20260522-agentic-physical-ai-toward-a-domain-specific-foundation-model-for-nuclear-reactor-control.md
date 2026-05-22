---
title: "Agentic Physical AI toward a Domain-Specific Foundation Model for Nuclear Reactor Control"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.23292"
author: "Yoon Pyo Lee, Samrendra Roy, Jay Yoo, Kazuma Kobayashi, Sajedul Talukder, Seid Koric, Souvik Chakraborty, Syed Bahauddin Alam"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2512.23292v3 Announce Type: replace Abstract: The prevailing paradigm in AI for physical systems (scaling general-purpose foundation models toward universal multimodal reasoning) confronts a fundamental barrier at the control interface. Recent benchmarks show that even frontier vision--language models achieve only 50--53% accuracy on basic quantitative physics tasks, behaving as approximate guessers that preserve semantic plausibility by violating physical constraints. This input unfaithfulness is not a scaling deficiency but a structural limitation: perception-centric architectures optimize parameter-space imitation, whereas safety-critical control demands outcome-space guarantees over executed actions. Here, we present a fundamentally different pathway "toward" domain-specific foundation models by introducing compact language models operating as Agentic Physical AI, in which policy optimization is driven by physics-based validation rather than perceptual inference. We train a 360-million-parameter model on synthetic nuclear reactor control scenarios, scaling the dataset from 10^3 to 10^5 examples. Scaling induces strong improvements in closed-loop reliability under nominal simulated conditions, with a steep but smooth gain at strict tolerances: small-scale systems exhibit high-variance imitation with severe tail excursions, while large-scale models undergo variance collapse (approximately 500times reduction), stabilizing execution-level behavior within the sampled distribution. Despite balanced exposure to four actuation families, the model autonomously rejects approximately 70\% of the training distribution, concentrating 95% of runtime execution on a single-bank strategy. This emergent policy distillation arises without reinforcement learning or reward engineering, driven solely by outcome-level success under physical execution.

---

📖 [Read original article](https://arxiv.org/abs/2512.23292)