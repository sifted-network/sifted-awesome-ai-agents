---
title: "Unsupervised clustering and classification of upper limb EMG signals during functional movements: a data-driven"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20599"
author: "L. F. Salazar \\'Alvarez, D. Escobar-Saltar\\'en, M. B. Salazar S\\'anchez, S. C. Henao-Aguirre"
categories: ["cs.LG"]
---

arXiv:2605.20599v1 Announce Type: new Abstract: This study presents a comprehensive approach for the clustering and classification of upper-limb surface electromyography (sEMG) signals during functional reach and grasp movements. The methodology was applied to the NINAPRO DB4 dataset, which provides multichannel EMG recordings of 52 gestures. A four-stage pipeline was designed, including signal preprocessing, fea-ture extraction, gesture selection via hierarchical clustering, and comparative model evaluation. Preprocessing involved a fourth-order low-pass filter (0.6 Hz) and Hilbert envelope transformation, effectively reducing noise and enhancing signal clarity. Feature extraction yielded 26 temporal and frequency-domain met-rics, which were later refined using visual analysis, mutual information, principal component analysis, and decision tree importance scores. A final subset of five key features was selected for classification tasks. Gesture selection was per-formed through hierarchical clustering using Mahalanobis distance, resulting in six representative movements that balanced biomechanical diversity and compu-tational efficiency. A 200 ms window was identified as optimal for temporal seg-mentation based on stability and physiological plausibility. Classifier models were evaluated in two stages. Automated comparison using PyCaret identified Extra Trees (ET) and Artificial Neural Networks (ANN) as top performers. Sub-sequent independent training confirmed their stability and generalization capac-ity, with ANN showing progressive learning and ET maintaining robust, con-sistent results. The findings support the implementation of adaptive, low-latency control strategies for myoelectric prostheses and provide a scalable pipeline for future real-time applications.

---

📖 [Read original article](https://arxiv.org/abs/2605.20599)