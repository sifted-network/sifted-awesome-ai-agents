---
title: "EvoScene-VLA: Evolving Scene Beliefs Inside the Action Decoder for Chunked Robot Control"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21862"
author: "Chushan Zhang, Ruihan Lu, Jinguang Tong, Xuesong Li, Yikai Wang, Hongdong Li"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2605.21862v1 Announce Type: cross Abstract: Chunked vision-language-action (VLA) policies predict multi-step robot controls, conditioning each update on the current visual observation alone. Yet robot actions cause contact, occlusion, and object motion, and the geometry that later decisions depend on can change before the next visual update arrives. Spatial VLAs improve current-frame geometry. Temporal VLAs aggregate past frames. Neither maintains an action-updated scene prior across chunks. We argue for a persistent action-updated scene state across control calls, and introduce EvoScene-VLA. Its recurrent scene prefix carries a geometry-aware scene state across chunks. At each vision-language model (VLM) call, the VLM combines scene information from the current observation with the action-updated prior from the previous chunk; the action decoder outputs both the next action chunk and a compact scene update. This update becomes the next prior, which the VLM corrects against the new observation when the next call arrives. Each control call therefore starts from a scene prior that reflects both recent actions and fresh visual evidence. During training, \textbf{Scene Predictor} supplies future scene-token targets, and Geometric Anchor aligns scene slots with frozen depth and 3D teachers. We discard both modules at deployment. On 31 RoboTwin tasks, EvoScene-VLA raises average success from 87.2% to 89.1% in fixed evaluation and from 86.1% to 88.5% in randomized evaluation. On the Galaxea R1-Lite real robot, EvoScene-VLA outperforms all baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.21862)