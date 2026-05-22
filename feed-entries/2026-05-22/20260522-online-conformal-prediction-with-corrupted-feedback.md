---
title: "Online Conformal Prediction with Corrupted Feedback"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20515"
author: "Bowen Wang, Matteo Zecchin, Osvaldo Simeone"
categories: ["cs.LG", "eess.SP"]
---

arXiv:2605.20515v1 Announce Type: new Abstract: Modern artificial intelligence systems require calibrated uncertainty estimates that remain reliable in sequential and non-stationary environments. Online conformal prediction (OCP) addresses this challenge through adaptively updated prediction sets that provide deterministic long-run miscoverage guarantees. These guarantees, however, hinge on the assumption of perfect feedback about the coverage of past prediction sets. In practice, the observed miscoverage indicator may be corrupted by noise, communication failures, or adversarial manipulation, which can severely degrade OCP's calibration guarantees. In this paper, we study OCP under corrupted feedback. We first model feedback corruption as an arbitrary binary flip sequence, and analyze how feedback corruption affects and degrades the miscoverage performance of standard OCP. We then propose two robust schemes: robust OCP via filtering, which leverages the structural properties of the predicted threshold to filter corrupted feedback, and robust OCP via active compensation, which incorporates an active compensation mechanism to mitigate the effect of corrupted feedback. For both methods, we establish explicit miscoverage guarantees, which are further specialized for an independent stochastic flip model and for an arbitrary error model with memory bounds. Experiments on real-world datasets validate the proposed approach, showing markedly improved calibration and significantly smaller prediction sets compared with baseline OCP methods under corrupted feedback.

---

📖 [Read original article](https://arxiv.org/abs/2605.20515)