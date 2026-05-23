---
title: "Noise Schedule Design for Diffusion Models: An Optimal Control Perspective"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21911"
author: "Seo Taek Kong, Weina Wang, R. Srikant"
categories: ["cs.LG"]
---

arXiv:2605.21911v1 Announce Type: new Abstract: We develop a principled framework for analyzing and designing noise schedules in diffusion models. We show that one can recast this design problem as an optimal control problem, whose state is the Fisher information of the diffusion process which evolves according to an ODE and the control input is the noise schedule. The objective of the optimal control problem is a functional involving the Fisher information, which is shown to be an upper bound on the Kullback-Leibler sampling error. By solving this optimal control problem, we obtain sufficient conditions on noise schedules under which state-of-the-art $\tilde{\mathcal{O}} (d/n)$ sampling error is achievable, where $d$ is the data dimension and $n$ is the number of discretization steps. While existing theoretical work also prove that $\tilde{\mathcal{O}}(d/n)$ sampling error bounds are achievable, these results hold for specific noise schedules, which do not include the schedules used in practice. Under a further parametric assumption on the data distribution, we show that one can obtain closed-form expressions for the noise schedules. These noise schedules generalize standard empirical schedules such as exponential and sigmoid schedules by allowing additional parameters that can be tuned. Systematically tuning the parameters of these schedules yields new schedules that achieve superior FID scores on image generation benchmarks.

---

📖 [Read original article](https://arxiv.org/abs/2605.21911)