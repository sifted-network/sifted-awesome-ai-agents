---
title: "TWINGS: Thin Plate Splines Warp-aligned Initialization for Sparse-View Gaussian Splatting"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22069"
author: "Hyeseong Kim, Geonhui Son, Deukhee Lee, Dosik Hwang"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.22069v1 Announce Type: cross Abstract: Novel view synthesis from sparse-view inputs poses a significant challenge in 3D computer vision, particularly for achieving high-quality scene reconstructions with limited viewpoints. We introduce TWINGS, a framework that enhances 3D Gaussian Splatting (3DGS) by directly addressing point sparsity. We employ Thin Plate Splines (TPS), a smooth non-rigid deformation model that minimizes bending energy to estimate a globally coherent warp from control-point correspondences, to align backprojected points from estimated depth with triangulated 3D control points, yielding calibrated backprojected points. By sampling these calibrated points near the control points, TWINGS provides a fast and geometrically accurate initialization for 3DGS, ultimately improving structural detail preservation and color fidelity in reconstructed scenes. Extensive experiments on DTU, LLFF, and Mip-NeRF360 demonstrate that TWINGS consistently outperforms existing methods, delivering detailed and accurate reconstructions under sparse-view scenarios.

---

📖 [Read original article](https://arxiv.org/abs/2605.22069)