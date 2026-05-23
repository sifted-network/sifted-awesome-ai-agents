---
title: "SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2511.07820"
author: "Zhengyi Luo, Ye Yuan, Tingwu Wang, Chenran Li, Fernando Casta\\~neda, Sirui Chen, Zi-Ang Cao, Jiefeng Li, David Minor, Qingwei Ben, Jinhyung Park, David Sami, Zi Wang, Xingye Da, Runyu Ding, Cyrus Hogg, Lina Song, Edy Lim, Eugene Jeong, Tairan He, Haoru Xue, Wenli Xiao, Simon Yuen, Jan Kautz, Yan Chang, Umar Iqbal, Linxi \"Jim\" Fan, Yuke Zhu"
categories: ["cs.RO", "cs.AI", "cs.CV", "cs.GR", "cs.SY", "eess.SY"]
---

arXiv:2511.07820v3 Announce Type: replace-cross Abstract: Despite the rise of billion-parameter foundation models trained across thousands of GPUs, similar scaling gains have not been shown for humanoid control. Current neural controllers for humanoids remain modest in size, target a limited set of behaviors, and are trained on a handful of GPUs. We show that scaling model capacity, data, and compute yields a generalist humanoid controller capable of natural, robust whole-body movements. We position motion tracking as a scalable task for humanoid control, leveraging dense supervision from diverse motion-capture data to acquire human motion priors without manual reward engineering. We build a foundation model for motion tracking by scaling along three axes: network size (1.2M to 42M parameters), dataset volume (100M+ frames from 700 hours of motion capture), and compute (21k GPU hours). Beyond demonstrating the benefits of scale, we further show downstream utility through: (1) a real-time kinematic planner bridging motion tracking to tasks such as navigation, enabling natural and interactive control, and (2) a unified token space supporting VR teleoperation and vision-language-action (VLA) models with a single policy. Through this interface, we demonstrate autonomous VLA-driven whole-body loco-manipulation requiring coordinated hand and foot placement. Scaling motion tracking exhibits favorable properties: performance improves steadily with compute and data diversity, and learned policies generalize to unseen motions, establishing motion tracking at scale as a practical foundation for humanoid control.

---

📖 [Read original article](https://arxiv.org/abs/2511.07820)