---
title: "Grounding Driving VLA via Inverse Kinematics"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21061"
author: "Junsung Park, Hyunjung Shim"
categories: ["cs.CV", "cs.AI", "cs.RO"]
---

arXiv:2605.21061v1 Announce Type: cross Abstract: Existing Driving VLAs predict trajectories while largely ignoring their visual tokens -- a phenomenon we trace not to insufficient training but to a structurally ill-posed task formulation. We show that trajectory recovery, when viewed through the lens of inverse kinematics, requires both a current and a future visual state as boundary conditions; existing VLAs supply only the former, which encourages the model to shortcut through ego status and text commands alone. To address this, we re-design Driving VLA in the style of an inverse kinematics solver. First, a next visual state prediction objective that requires the LLM to predict the future visual scene provides dense visual supervision and suppresses shortcut paths. Second, a separate Inverse Kinematics Network (a cross-attention-based conditional diffusion model) that takes only the current and future visual states as input is designed to suppress reliance on ego status and textual shortcuts during trajectory decoding. With this simple prescription alone, our 0.5B-scale model recovers visual grounding and reaches trajectory planning performance comparable to 7B--8B VLAs more than an order of magnitude larger, on both the closed-loop NAVSIM-v2 and the nuScenes benchmarks. Extensive analysis further shows that this improvement stems from a recovered ability to exploit visual features, with the effect being most pronounced in dynamic driving situations such as turning.

---

📖 [Read original article](https://arxiv.org/abs/2605.21061)