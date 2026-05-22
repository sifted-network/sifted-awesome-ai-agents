---
title: "Design for Manufacturing: A Manufacturability Knowledge-Integrated Reinforcement Learning Framework for Free-Form Pipe Routing in Aeroengines"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20644"
author: "Caicheng Wang, Zili Wang, Shuyou Zhang, Yongzhe Xiang, Zheyi Li, Liangyou Li, Jianrong Tan"
categories: ["cs.LG", "cs.AI", "cs.RO"]
---

arXiv:2605.20644v1 Announce Type: cross Abstract: Design for manufacturing plays a critical role in advanced aeroengine development, where complex components necessitate careful consideration of manufacturability. However, current practices in pipe routing remain largely decoupled from down-stream manufacturing, leading to labor-intensive, trial-and-error iterations to achieve manufacturable designs. To address this problem, this study proposes the Frenet-based pipe routing optimization (FPRO) framework, a manufacturability knowledge-integrated reinforcement learning approach for free-form pipe design in aeroengines. FPRO formulates the routing problem as a boundary value problem in the Frenet frame. In this framework, the pipe path is represented by curvature and torsion profiles, which are generated using cubic Hermite interpolation. To integrate design and manufacturing, domain-specific manufacturing knowledge is embedded as constraints on the permissible ranges of curvature and torsion. The path optimization is performed using the proximal policy optimization algorithm with stochastic exploration and a stage-guided reward mechanism. A unified mapping formulation then translates the optimized path into motion trajectories for the bending die, enabling direct fabrication on a six-axis free-bending machine. Experimental results demonstrate that FPRO consistently generates collision-free, manufacturable paths with smoother geometric profiles compared to Cartesian-based methods. It also achieves faster convergence and superior performance in terminal alignment, path length, obstacle avoidance, and manufacturability compared to state-of-the-art reinforcement learning baselines. Real-world validation confirms the close geometric correspondence between the manufactured pipe and its digital design, validating the practical feasibility of FPRO.

---

📖 [Read original article](https://arxiv.org/abs/2605.20644)