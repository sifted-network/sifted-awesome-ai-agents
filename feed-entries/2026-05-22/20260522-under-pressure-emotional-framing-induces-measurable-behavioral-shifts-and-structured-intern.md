---
title: "Under Pressure: Emotional Framing Induces Measurable Behavioral Shifts and Structured Internal Geometry in Small Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20202"
author: "Rana Muhammad Usman"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20202v1 Announce Type: cross Abstract: I study whether emotionally framed evaluation follow-ups change both the behavior and the calm-relative internal representations of small, locally deployed language models. Our main benchmark uses Qwen 3.5 0.8B on four impossible-constraint coding tasks and eight follow-up framings: calm, pressure, urgency, approval, shame, curiosity, encouragement, and threat. In the 0.8B eight-condition sweep (160 conversations), pressure produces the strongest shortcut markers (11/20 runs) and the clearest overfit pattern (3/20), while calm and curiosity preserve explicit honesty more often (7/20 and 6/20). For all seven non-baseline conditions, the corresponding calm-relative direction vectors peak at the final transformer layer. An exploratory PCA of the layer-23 direction vectors reveals a dominant first component (59.5% explained variance) aligned with a hand-labeled positive/negative split (cosine alignment 0.951); approval and urgency are nearly identical internally (cosine 0.957), whereas curiosity points away from urgency (-0.252). In a separate calm-vs.-pressure rerun used for scale comparison, Qwen 3.5 2B shows higher honest rates under calm framing and directionally consistent activation steering on a small 4-prompt A/B probe, whereas the 0.8B steering result reverses. I interpret these results as evidence for measurable prompt-sensitive control directions in small open models, while stopping short of claiming intrinsic emotional states.

---

📖 [Read original article](https://arxiv.org/abs/2605.20202)