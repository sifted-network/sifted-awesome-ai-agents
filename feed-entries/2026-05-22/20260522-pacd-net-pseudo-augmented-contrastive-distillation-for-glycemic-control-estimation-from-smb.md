---
title: "PACD-Net: Pseudo-Augmented Contrastive Distillation for Glycemic Control Estimation from SMBG"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20751"
author: "Canyu Lei, David Repaske, Jianxin Xie"
categories: ["cs.LG", "cs.AI", "cs.SY", "eess.SY"]
---

arXiv:2605.20751v1 Announce Type: cross Abstract: Effective diabetes management requires continuous monitoring of glycemic levels. Clinically, glycemic control is assessed using metrics such as Time in Range (TIR), Time Below Range (TBR), and Time Above Range (TAR), typically derived from continuous glucose monitoring (CGM). However, many patients rely on self-monitoring of blood glucose (SMBG) due to the high cost and limited accessibility of CGM. Unlike CGM, SMBG provides sparse and irregular measurements, making accurate estimation of these metrics challenging. Conventional supervised learning approaches struggle under such sparsity, leading to poor generalization and unstable performance. To address this, we propose PACD-Net, a self-supervised contrastive knowledge distillation framework for estimating glycemic control from SMBG. Pseudo-SMBG samples with richer temporal coverage are used as teacher signals to guide learning from sparse observations. In addition, multi-view contrastive learning enforces representation consistency across diverse sampling patterns. The model adopts a hybrid Swin Transformer-CNN backbone to capture temporal dependencies in sparse SMBG sequences. Experimental results demonstrate that PACD-Net consistently outperforms existing methods in estimating TAR, TIR, and TBR from real-world SMBG data, achieving improved accuracy as well as enhanced stability and generalization under extremely sparse observation settings. The proposed framework provides a practical tool for clinical SMBG interpretation and offers a generalizable approach for learning from sparse and irregularly sampled sensor data in broader applications.

---

📖 [Read original article](https://arxiv.org/abs/2605.20751)