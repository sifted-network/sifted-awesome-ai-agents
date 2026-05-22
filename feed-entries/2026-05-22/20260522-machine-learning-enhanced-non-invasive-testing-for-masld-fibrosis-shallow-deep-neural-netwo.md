---
title: "Machine-Learning-Enhanced Non-Invasive Testing for MASLD Fibrosis: Shallow-Deep Neural Networks Versus FIB-4, Tabular Foundation Models, and Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20523"
author: "Athanasios Angelakis, Gabriele De Vito, Eleni-Myrto Trifylli, Filomena Ferrucci"
categories: ["cs.LG", "cs.AI", "q-bio.QM"]
---

arXiv:2605.20523v1 Announce Type: cross Abstract: Advanced fibrosis is a major determinant of liver-related morbidity in metabolic dysfunction-associated steatotic liver disease (MASLD). FIB-4 is widely used as a first-line non-invasive test, but its fixed formula may underuse diagnostic information contained in age, aspartate aminotransferase, alanine aminotransferase, and platelet count. We evaluated whether machine-learning-enhanced non-invasive testing (MLE-NIT) can improve advanced fibrosis detection while preserving this FIB-4 variable space. We used three biopsy-confirmed MASLD cohorts from China, Malaysia, and India (n=784). The Chinese cohort was split into 486 training and 54 internal validation/tuning patients; final performance was reported only on the Malaysian and Indian external cohorts. Models used five variables: age, FIB-4, aspartate aminotransferase, platelet count, and alanine aminotransferase. We compared FIB-4 with a shallow-deep neural network (s-DNN), TabPFN, and gpt-4o-2024-08-06. FIB-4 achieved external ROC-AUCs of 0.75 and 0.60 in Malaysia and India, respectively. TabPFN achieved 0.69 and 0.66, fine-tuned GPT-4o achieved 0.75 and 0.63, and the s-DNN achieved 0.77 and 0.67, respectively. The s-DNN contained only 354 trainable parameters, compared with 7,244,554 for TabPFN, yet provided a more balanced external operating profile. Calibration showed s-DNN Brier scores of 0.18 and 0.22, and permutation importance identified AST and FIB-4 as dominant variables. Compact non-linear MLE-NITs may enhance FIB-4-based fibrosis assessment without increasing clinical data requirements.

---

📖 [Read original article](https://arxiv.org/abs/2605.20523)