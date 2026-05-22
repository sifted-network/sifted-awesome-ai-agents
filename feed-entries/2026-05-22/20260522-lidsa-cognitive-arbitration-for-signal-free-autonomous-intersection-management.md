---
title: "LIDSA: Cognitive Arbitration for Signal-Free Autonomous Intersection Management"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12321"
author: "Abderrahmane Lakas, Mohamed Amine Ferrag, Merouane Debbah"
categories: ["cs.AI", "cs.CY", "cs.ET"]
---

arXiv:2605.12321v2 Announce Type: replace Abstract: Large language models (LLMs) show strong potential for Intelligent Transportation Systems (ITS), particularly in tasks requiring situational reasoning and multi-agent coordination. These capabilities make them well suited for cooperative driving, where rule-based approaches struggle in complex and dynamic traffic environments. Intersection management remains especially challenging due to conflicting right-of-way demands, heterogeneous vehicle priorities, and vehicle-specific kinematic constraints that must be resolved in real time. However, existing approaches typically use LLMs as auxiliary components on top of signal-based systems rather than as primary decision-makers. Signal controllers remain vehicle-agnostic, reservation-based methods lack intent awareness, and recent LLM-based systems still depend on signal infrastructure. In addition, LLM inference latency limits their use in sub-second control settings. We propose LIDSA (LLM-Based Intent-Driven Speed Advisory), a signal-free cognitive arbitration framework for autonomous intersection management. LIDSA uses an LLM to reason over declared vehicle intents, incorporating priority classes, queue pressure, and energy preferences. We evaluate LIDSA against fixed-cycle control, SCATS, AIM, and GLOSA across varying traffic loads. Results show that LIDSA reduces mean control delay by up to 89.1% and maintains Level of Service C while all non-LLM baselines degrade to Level of Service F. Under near-saturated demand, LIDSA reduces mean waiting time by 93% and peak queue length by 60.6% relative to fixed-cycle control. It also lowers fuel consumption by up to 48.8% and achieves 86.2% intent satisfaction, compared to 61.2% for the best non-LLM method. These results demonstrate that LLM-based reasoning can enable real-time, signal-free intersection management.

---

📖 [Read original article](https://arxiv.org/abs/2605.12321)