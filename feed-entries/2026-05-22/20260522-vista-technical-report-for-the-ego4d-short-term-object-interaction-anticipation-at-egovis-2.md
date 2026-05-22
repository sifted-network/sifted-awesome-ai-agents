---
title: "VISTA: Technical Report for the Ego4D Short-Term Object Interaction Anticipation at EgoVis 2026"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20901"
author: "Qiaohui Chu, Haoyu Zhang, Yisen Feng, Meng Liu, Weili Guan, Dongmei Jiang, Liqiang Nie"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20901v1 Announce Type: cross Abstract: We propose VISTA, a V-JEPA Integrated StillFast Temporal Anticipator for the Ego4D Short-Term Object Interaction Anticipation (STA) Challenge at EgoVis 2026. Given an egocentric video timestamp, the task requires anticipating the next human-object interaction, including the future active object's bounding box, noun category, verb category, time-to-contact, and confidence score. VISTA follows a StillFast-style design that combines object-centric spatial detection with short-horizon temporal context. Specifically, a COCO-pretrained Faster R-CNN ResNet-50 FPN detector generates object proposals from the last observed high-resolution frame, while a frozen V-JEPA 2.1 temporal branch extracts clip-level egocentric context from the observed video. The temporal representation is injected into the detection pathway through feature modulation and ROI-level context fusion. The fused proposal features are then passed to multi-head STA predictors for box refinement, noun classification, verb classification, time-to-contact regression, and interaction confidence estimation. For the final submission, we further ensemble complementary predictions to improve robustness. Experimental results on the official challenge server show that VISTA achieves first place in the EgoVis 2026 Ego4D STA Challenge. Our code will be released at https://github.com/CorrineQiu/VISTA.

---

📖 [Read original article](https://arxiv.org/abs/2605.20901)