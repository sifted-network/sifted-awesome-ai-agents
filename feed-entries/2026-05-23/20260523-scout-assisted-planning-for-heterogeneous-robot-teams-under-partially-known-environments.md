---
title: "Scout-Assisted Planning for Heterogeneous Robot Teams under Partially Known Environments"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22693"
author: "Hoang-Dung Bui, Abhish Khanal, Raihan Islam Arnob, Gregory J. Stein"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2605.22693v1 Announce Type: cross Abstract: Autonomous robot teams navigating partially known environments face costly backtracking when ground robots encounter blocked roads that are only revealed upon physical traversal. We address this with Scout-Assisted Planning, a heterogeneous planning framework in which scouting Unmanned Aerial Vehicles proactively gather environmental information to improve Unmanned Ground Vehicle navigation. To focus scouting on the most consequential edges, we propose Information Gain-based Action Pruning, which scores candidate scouting actions by their expected impact on ground robot behavior. Since exact Information Gain-based Action Pruning computation is prohibitively expensive, we develop a Graph Neural Network based model that predicts information gain values directly from graph structure and belief state, reducing planning time to real-time levels without sacrificing solution quality. Experiments across three environment types show that SAP with Information Gain Action Pruning reduces ground robot travel cost by 31.9--37.7% over the Canadian Traveler Problem baseline, and outperforms proximity-based scouting guidance by an additional 8--14%, confirming that principled information-gain-guided scouting is both more effective and computationally feasible for real-world deployment

---

📖 [Read original article](https://arxiv.org/abs/2605.22693)