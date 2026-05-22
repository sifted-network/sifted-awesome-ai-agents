---
title: "Comparing Explanations is Not Enough, Explain the Change: New Standards are Needed to Explain Behavioral Shifts in Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.02304"
author: "Martino Ciaperoni, Marzio Di Vece, Roberto Pellungrini, Luca Pappalardo, Fosca Giannotti, Francesco Giannini"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2602.02304v2 Announce Type: replace Abstract: Large-scale foundation models exhibit \emph{behavioral shifts} when subjected to interventions such as scaling, fine-tuning, reinforcement learning with human feedback, or in-context learning. Current explainability methods are structurally ill-suited to explain these shifts, because they either treat models as static objects, as traditional eXplainable AI (XAI) approaches do, or merely compare independent explanations across different checkpoints of a model. As a result, these approaches fail to explain the functional transition between two model instances in which a certain behavior has shifted following an intervention. This gap creates significant governance risks across jurisdictions including the EU AI Act, US state legislation, and Chinese AI regulations, which require documenting causal chains for substantial system modifications. This position paper argues that explaining behavioral shifts in large language models requires a principled approach that treats the shift itself as the primary object of explanation: namely, one that explains how and why an intervention transforms a reference model into an updated model with different behavior. To support this claim, we introduce \textit{Comparative} XAI (XAI$_\Delta$), a novel XAI paradigm aimed at explaining the difference between two model checkpoints where a behavior has shifted, together with a set of desiderata specifying what XAI$_\Delta$ explainers and explanations must satisfy, including comparability, validity, actionability, and monitoring, with the goal of grounding model auditing in explicit, measurable requirements. Finally, we provide preliminary evidence suggesting the need for XAI$_\Delta$ in practice through illustrative experiments, compiling the resulting findings into a transition report directly usable for governance and incident documentation.

---

📖 [Read original article](https://arxiv.org/abs/2602.02304)