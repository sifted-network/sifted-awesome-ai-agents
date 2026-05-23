---
title: "ImplicitTerrainV2: Wavelet-Guided Spatially Adaptive Neural Terrain Representation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22556"
author: "Haoan Feng, Xin Xu, Leila De Floriani"
categories: ["cs.LG"]
---

arXiv:2605.22556v1 Announce Type: new Abstract: Digital elevation models (DEMs) underpin terrain analysis in Geographic Information Systems (GIS), but in their common raster form, they rely on interpolation for off-grid sampling and finite-difference operators for derivative-based analysis. Implicit neural representations (INRs) offer a continuous alternative, but prior terrain INRs lack explicit frequency control, neglect the gradient structure of terrain, and remain too large and costly to train for practical deployment. We present ImplicitTerrainV2, which advances terrain INRs toward a compact, efficient neural terrain data format by combining a spectral control mechanism with wavelet-guided spatial adaptivity, derivative-aware supervision, and post-training model compression. At its core, a wavelet complexity field (WCF) derives spatially-adaptive frequency masks from analytically computed wavelet coefficients, localizing high-frequency capacity to complex terrain regions. The same field guides complexity-aware adaptive sampling that concentrates training in high-complexity regions, while gradient matching applies extra supervision to enforce the smooth manifold structure of terrain DEMs for improved derivative fidelity. Post-training mixed-precision quantization and entropy coding reduce storage to 1.23 bpp with a 0.28 dB PSNR drop. On 50 Swiss terrain tiles, ImplicitTerrainV2 reaches 66.25 dB end-to-end PSNR, improving over the prior work by 5.70 dB while using 3.2x fewer parameters and training in 55 s per tile on a single GPU. Our compressed neural format is competitive with several established DEM codecs in rate-distortion performance, while additionally supporting off-grid point queries, closed-form derivative evaluation, and resolution-independent reconstruction, which may benefit many downstream GIS applications.

---

📖 [Read original article](https://arxiv.org/abs/2605.22556)