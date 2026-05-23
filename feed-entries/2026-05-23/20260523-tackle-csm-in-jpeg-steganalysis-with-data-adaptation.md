---
title: "Tackle CSM in JPEG Steganalysis with Data Adaptation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21523"
author: "Rony Abecidan (CRIStAL), Vincent Itier (IMT Nord Europe, CRIStAL), J\\'er\\'emie Boulanger (CRIStAL), Patrick Bas (CRIStAL), Tom\\'a\\v{s} Pevn\\'y (CTU)"
categories: ["eess.IV", "cs.AI", "cs.CV", "cs.MM", "eess.SP"]
---

arXiv:2605.21523v1 Announce Type: cross Abstract: Steganalysis models excel on benchmark datasets but struggle in the wild when analyzed images are produced by a processing pipeline unseen during training. This problem known as Cover Source Mismatch (CSM) is particularly hard in realistic settings where practitioners (1) have access to only a small, unlabeled dataset, (2) are unsure of the processing techniques applied to these images, and (3) lack information on the proportion of covers and stegos in that set. To answer this challenge, we introduce TADA (Target Alignment through Data Adaptation), a framework learning to emulate the unknown processing pipeline from a small unlabeled target set. This architecture is trained with a loss combining residual covariance alignment, residual distribution matching, and a $\ell^2$ loss constraining the emulator to produce realistic images. Across toy and operational targets, TADA yields substantial gains in robustness to CSM and improves operational generalization compared to strong holistic and atomistic baselines. Additional resources are available at this link: https://github.com/RonyAbecidan/TADA

---

📖 [Read original article](https://arxiv.org/abs/2605.21523)