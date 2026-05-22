---
title: "Multi-scale Dynamic Wake Modeling and Prediction of Floating Offshore Wind Turbines via Physics-Informed Neural Networks and Fourier Neural Operators"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.23937"
author: "Guodan Dong, Jianhua Qin, Chang Xu"
categories: ["physics.flu-dyn", "cs.LG"]
---

arXiv:2604.23937v2 Announce Type: replace-cross Abstract: Multi-scale dynamic wake modeling and prediction are essential for the real-time control and optimization of floating offshore wind turbines (FOWTs). In this study, wakes of FOWTs under coupled surge and pitch motions across a range of Strouhal numbers (St), which can induce wake meandering, are modeled via two novel deep-learning frameworks: physics-informed neural networks (PINNs) and Fourier neural operators (FNOs). The high-fidelity dataset is obtained from large-eddy simulations with the actuator line model (LES-AL). The results demonstrate that the dominant large-scale dynamic structures, such as meandering, can be well modeled by both frameworks; however, FNOs exhibit significant advantages over the PINN model in terms of efficiency (8-fold computational speedup and 40-fold faster convergence), long-term predictive capability, and multi-scale coherent structural fidelity. Furthermore, the wakes predicted by the PINN model exhibit a smoothing effect that limits the resolution of high-frequency coherent structures and underestimates turbulent fluctuations in both the wake center and half-width. Spectral analysis reveals that FNOs resolve the primary meandering frequency (where Stp denotes the frequency induced by the coupled surge and pitch motions), its corresponding higher-order harmonics (2Stp, 3Stp), and the energy cascade. In contrast, the energy cascade in the PINN predictions dissipates more rapidly in the high-frequency regime (St > 1.0). Additionally, the pre-multiplied power spectral density indicates that the energy contained in meandering and the corresponding harmonic frequencies modeled by PINNs is relatively low compared to that in CFD and FNOs. These findings suggest that FNOs are promising for the high-fidelity, real-time modeling of FOWT wakes.

---

📖 [Read original article](https://arxiv.org/abs/2604.23937)