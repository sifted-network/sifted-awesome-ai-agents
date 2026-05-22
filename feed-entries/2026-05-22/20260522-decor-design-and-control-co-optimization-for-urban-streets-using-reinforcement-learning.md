---
title: "DeCoR: Design and Control Co-Optimization for Urban Streets Using Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21311"
author: "Bibek Poudel, Lei Zhu, Kevin Heaslip, Sai Swaminathan, Weizi Li"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21311v1 Announce Type: cross Abstract: Modern vision systems can detect, track, and forecast urban actors at scale, yet translating perception outputs to urban design remains limited. We introduce DeCoR, a two-stage reinforcement learning framework that leverages flow observations to co-optimize crosswalk layout and network-level signal control. The design stage encodes the pedestrian network as a graph and learns a generative policy that parameterizes a Gaussian mixture model over crosswalk location and width, from which new crosswalks are sampled. For each layout, a shared control policy learns adaptive signal timings to minimize joint pedestrian and vehicle delay. On a 750 m real-world urban corridor with demand sensed from video and Wi-Fi logs, DeCoR learns a layout that reduces pedestrian arrival time to their nearest crosswalk by 23% while using fewer crosswalks than existing configurations. On the control side, DeCoR reduces pedestrian and vehicle wait time by 79% and 65%, respectively, relative to fixed-time signalization. Further, the control policy generalizes to demands outside of training and is robust to layout changes without retraining.

---

📖 [Read original article](https://arxiv.org/abs/2605.21311)