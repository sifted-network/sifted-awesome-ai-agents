---
title: "FLUME-FNO: data-efficient and scalable prediction of 3D wind and temperature fields in unseen urban morphologies"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2503.19708"
author: "Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang"
categories: ["physics.flu-dyn", "cs.LG"]
---

arXiv:2503.19708v2 Announce Type: replace-cross Abstract: Urban microclimate, encompassing wind and temperature fields shaped by building geometry, significantly impacts energy consumption, pedestrian winds, pollutant dispersion, urban heat island, and public health. Accurately predicting microclimate is crucial yet challenging. Conventional Computational Fluid Dynamics (CFD) is computationally prohibitive for rapid assessments, while many deep learning approaches require extensive training data and struggle with generalization in unseen configurations. We present the Fast Localized Urban Microclimate Emulation Fourier Neural Operator (FLUME-FNO), a data-efficient and scalable framework for rapid prediction of 3D wind and temperature fields based solely on building geometry. FLUME-FNO assumes the local urban microclimate is primarily governed by surrounding geometry directly visible from a specific location. To encode this, the framework introduces a novel Multi-Directional Distance Feature (MDDF), representing visible open-space structures by measuring directional distances to surrounding buildings. By computing MDDF over the full domain and cropping encoded geometric features into smaller 3D patches, FLUME-FNO effectively augments limited CFD data, enabling robust learning from just 23 CFD simulations. The model achieves mean absolute errors of 0.2 m/s for wind speed and 0.19 {\deg}C for temperature on unseen configurations. Addressing the need for trustworthy fast microclimate prediction, the framework is further assessed using a deep ensemble as a practical proxy for FLUME-FNO uncertainty, ranging from 3% to 40% depending on location. The UQ framework demonstrates FLUME-FNO provides resilient, trustworthy predictions within acceptable accuracy thresholds for wind engineering and microclimate studies, highlighting its potential for real-world applications.

---

📖 [Read original article](https://arxiv.org/abs/2503.19708)