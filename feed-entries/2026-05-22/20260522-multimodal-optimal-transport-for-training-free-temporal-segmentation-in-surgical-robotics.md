---
title: "Multimodal Optimal Transport for Training-free Temporal Segmentation in Surgical Robotics"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.24138"
author: "Omar Mohamed, Edoardo Fazzari, Ayah Al-Naji, Hamdan Alhadhrami, Khalfan Hableel, Saif Alkindi, Ivan Laptev, Cesare Stefanini"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2602.24138v2 Announce Type: replace-cross Abstract: Automated recognition of surgical phases and steps is a fundamental capability for intraoperative decision support, workflow automation, and skill assessment in robotic-assisted surgery. Existing approaches either depend on large-scale annotated surgical datasets or require expensive domain-specific pretraining on thousands of labeled videos, limiting their practical deployability across diverse robotic platforms and clinical environments. In this work, we propose TASOT (Text-Augmented Action Segmentation Optimal Transport), an annotation-free framework for surgical temporal segmentation that requires no task-specific annotations or surgical-domain pretraining. TASOT extends the Action Segmentation Optimal Transport (ASOT) formulation by incorporating temporally aligned textual descriptions generated directly from the input video, fusing visual and semantic cues within a unified unbalanced Gromov-Wasserstein optimal transport objective. Visual representations are extracted using DINOv3, while temporal captions produced by a vision-language model are encoded via CLIP and temporally aligned to individual frames, providing complementary semantic structure to the transport cost. We evaluate TASOT on three public surgical datasets and four benchmark settings spanning laparoscopic and robotic procedures, showing substantial improvements over the strongest zero-shot baselines: +18.9 F1 on Cholec80, +33.7 on AutoLaparo, +23.7 on StrasByPass70, and +4.5 on BernByPass70. These results suggest that fine-grained surgical workflow understanding in robotic settings can be achieved without manual training annotations or surgical-specific pretraining pipelines, offering a promising alternative for real-world robotic surgical systems.

---

📖 [Read original article](https://arxiv.org/abs/2602.24138)