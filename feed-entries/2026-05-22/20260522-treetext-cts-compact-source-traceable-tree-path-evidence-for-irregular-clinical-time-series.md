---
title: "TreeText-CTS: Compact, Source-Traceable Tree-Path Evidence for Irregular Clinical Time-Series Prediction"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20292"
author: "Kwanhyung Lee, Juhwan Choi, Jongheon Kim, Joohyung Lee, Hyeongwon Jang, Eunho Yang"
categories: ["cs.LG"]
---

arXiv:2605.20292v1 Announce Type: new Abstract: Numerical time-series models can effectively process irregular electronic health record (EHR) trajectories, but they do not naturally expose the measurements and temporal patterns supporting each risk estimate as readable evidence. Existing text-based interfaces improve readability, but typically rely on either raw serialization, which is lengthy and redundant, or patient-level free-form summaries, which are difficult to trace to source measurements and time windows. To bridge this gap, we introduce TreeText-CTS (Clinical Time-Series), which converts irregular EHR trajectories into human-readable, compact, source-traceable tree-path evidence units without patient-level summarization or inference-time autoregressive decoding. TreeText-CTS routes multi-scale window summaries through frozen XGBoost models and verbalizes activated tree paths as deterministic, source-traceable evidence units composed of threshold conditions. An evidence selector assembles an informative subset of these units, which a language-model encoder then integrates for prediction. Across PhysioNet 2012 mortality, MIMIC-III mortality, and PhysioNet 2019 sepsis-onset forecasting, TreeText-CTS achieves the best AUROC and AUPRC among evaluated text-based EHR time-series interfaces, improving AUPRC by 6.0 to 9.7 absolute percentage points over the strongest prior text-based interface while remaining competitive with numerical time-series models. Ablations show that tree-path evidence construction, evidence selection, and language-model composition each contribute to performance. Because every span passed to the language-model encoder is constructed from activated tree-path threshold conditions, TreeText-CTS makes the evidence supplied to the final predictor inspectable and source-traceable.

---

📖 [Read original article](https://arxiv.org/abs/2605.20292)