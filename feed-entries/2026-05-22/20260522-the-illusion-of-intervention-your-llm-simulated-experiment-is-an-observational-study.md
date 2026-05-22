---
title: "The Illusion of Intervention: Your LLM-Simulated Experiment is an Observational Study"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20767"
author: "Victoria Lin, Taedong Yun, Maja Matari\\'c, John Canny, Arthur Gretton, Alexander D'Amour"
categories: ["cs.CL", "cs.LG", "stat.ME"]
---

arXiv:2605.20767v1 Announce Type: cross Abstract: Large language models (LLMs) show potential as simulators of human behavior, offering a scalable way to study responses to interventions. However, because LLMs are trained largely on observational data, interventions in experiments with LLM-simulated synthetic users can induce unintended shifts in latent user attributes, causing user drift where the implicit simulated population differs across treatment conditions, potentially distorting effect estimates. We formalize the confounding or selection bias that can arise due to user drift and show how intervention-dependent shifts can inflate or attenuate observed differences in user responses under intervention. To diagnose confounding, we propose using negative control outcomes--attributes that should remain invariant under intervention--to identify distribution shifts across intervention conditions, providing evidence of user drift. To mitigate drift, we study adjusting the persona specification by eliciting additional confounders, finding that targeted, setting-relevant confounders can substantially reduce bias across survey-style and multi-turn agent evaluations.

---

📖 [Read original article](https://arxiv.org/abs/2605.20767)