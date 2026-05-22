---
title: "Conformal Selective Acting: Anytime-Valid Risk Control for RLVR-Trained LLMs"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20270"
author: "Hamed Khosravi, Xiaoming Huo"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.20270v1 Announce Type: cross Abstract: A local specialist LLM, fine-tuned with reinforcement learning from verifiable rewards (RLVR) on operator-local data, is installed in a regulated organization with per-deployment error budget $\alpha$. The operator needs a safety certificate for this deployment's stream at every round: no pooling across deployments, no waiting for a long-run average. Existing wrappers cannot deliver this on adaptive, online-updated streams: offline conformal-risk methods require exchangeability; online-conformal methods bound only long-run averages; non-exchangeable extensions are marginally valid; and the closest anytime wrapper, A-RCPS, controls marginal rather than selective risk. Using a (test statistic, validity guarantee, deployment rule) framework, we identify one empty cell forced by deployment requirements: e-process per threshold, selective risk, anytime-pathwise validity, max-certified-threshold rule. Conformal Selective Acting (CSA) fills it as a per-round wrapper maintaining a Ville-type e-process per threshold on a Bonferroni grid, evaluated against the RLVR filtration. Under predictable updates and isotonic-calibrated monotone risk we prove (i) an anytime-pathwise selective-risk bound $R_T^{\mathrm{act}}\le\alpha+O(N_T^{-1/2})$, (ii) rate-optimal certification matching $\Theta(\bar\eta^{-2}\log(1/\delta))$, and (iii) a horizon-independent release-rate gap. Across eight specialist benchmarks ($480$ streams), sixteen adversarial distribution-shift cells ($160$ streams), and five live Expert-Iteration RLVR cells with online LoRA over four base models in three architecture families ($10{,}300$ rounds), CSA is the only method among ten compared that satisfies pathwise validity and non-refusing deployment on every cell. We do not propose a new LLM, training algorithm, or policy class; CSA is the deployment-side complement, orthogonal to the model, for operators who cannot use a frontier API.

---

📖 [Read original article](https://arxiv.org/abs/2605.20270)