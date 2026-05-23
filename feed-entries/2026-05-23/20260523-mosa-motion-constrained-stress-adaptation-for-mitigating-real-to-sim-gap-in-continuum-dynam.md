---
title: "MoSA: Motion-constrained Stress Adaptation for Mitigating Real-to-Sim Gap in Continuum Dynamics via Learning Residual Anisotropy"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22597"
author: "Jiaxu Wang, Junhao He, Jingkai Sun, Yi Gu, Yunyang Mo, Jiahang Cao, Qiang Zhang, Renjing Xu"
categories: ["cs.LG", "cs.AI", "cs.GR", "cs.RO"]
---

arXiv:2605.22597v1 Announce Type: cross Abstract: Learning real-world dynamics from visual observations is crucial for various domains. A common strategy is to calibrate simulators by estimating physical parameters, yet accuracy is ultimately bounded by the underlying physical models, which often assume materials are homogeneous and isotropic. Even if reasonable, real-world objects typically exhibit mild anisotropy and heterogeneity. After the near-isotropic backbone is well calibrated, these residual effects become the key bottleneck for further closing the real-to-sim gap. Although neural networks can fit dynamics end-to-end, such black-box modeling discards strong physical priors, leading to poor data efficiency and overfitting. Therefore, we propose MoSA, a motion-constrained stress adaptation framework that targets these residual effects to further improve real-to-sim dynamics learning. MoSA uses an isotropic model as a physics prior and learns residual stress operators to capture mild anisotropy and heterogeneity. It progressively adapts stresses via microplane-constrained redistribution in a physics-informed cascaded network. We further impose motion constraints by supervising temporal and spatial derivatives of the deformation field. Experimentally, our learned dynamics achieves superior accuracy, generalization, and robustness, while learning physically meaningful residual anisotropy. Finally, we validate MoSA in a robot manipulation setting, showing that better real-to-sim dynamics modeling translates into more reliable sim-to-real transfer. Project Page is available at https://mercerai.github.io/MoSA/.

---

📖 [Read original article](https://arxiv.org/abs/2605.22597)