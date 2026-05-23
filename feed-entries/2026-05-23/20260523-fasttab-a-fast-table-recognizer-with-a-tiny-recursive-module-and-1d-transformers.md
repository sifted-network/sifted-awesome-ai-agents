---
title: "FastTab: A Fast Table Recognizer with a Tiny Recursive Module and 1D Transformers"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22422"
author: "Laziz Hamdi, Amine Tamasna, Pascal Boisson, Thierry Paquet"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22422v1 Announce Type: cross Abstract: Table structure recognition (TSR) requires both table-level coherence (row/column counts, headers, spanning cells) and precise separator localization. We introduce FastTab, a grid-centric TSR model that avoids autoregressive HTML decoding by combining (i) a lightweight Tiny Recursive Module (TRM) for global reasoning and (ii) axial 1D Transformer encoders that capture long-range dependencies along rows and columns. The model predicts row/column counts, header rows, and separators to construct a grid, then infers rowspan/colspan using ROI-aligned cell features. Across four benchmarks (PubTabNet, FinTabNet, PubTables-1M, and SciTSR), FastTab achieves competitive structure recovery performance while operating at low-latency inference. We further study robustness under pixel-level anonymisation and show an extension to curved separators for camera-captured documents. The source code will be made publicly available at https://github.com/hamdilaziz/FastTab .

---

📖 [Read original article](https://arxiv.org/abs/2605.22422)