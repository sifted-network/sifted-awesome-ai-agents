---
title: "An Open Multi-Center Whole-Body FDG PET/CT Foundation Model for Tumor Segmentation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21835"
author: "Xiaofeng Liu, Qianru Zhang, Thibault Marin, Menghua Xia, Chi Liu, Georges El Fakhri, Jinsong Ouyang"
categories: ["eess.IV", "cs.AI", "cs.CV", "physics.med-ph"]
---

arXiv:2605.21835v1 Announce Type: cross Abstract: The synergistic interpretation of anatomical information from computed tomography (CT) and metabolic information from positron emission tomography (PET) is important to oncologic imaging. However, existing deep learning methods for PET/CT remain largely task-specific, are often trained on single-center cohorts, or adopt dual-branch fusion schemes that delay cross-modal interaction and underutilize early spatial correspondence between PET and CT. To address these limitations, we present an open-source, multi-center, whole-body FDG PET/CT foundation model utilizing 4,997 harmonized scans from four public datasets. Our framework employs hierarchical UNet-shaped backbones with early channel-wise concatenation, enabling anatomical and metabolic features to interact from the first embedding layer onward. We further introduce a masked autoencoding objective based on zero-mean imputation, combined with a weighted global reconstruction loss. This design avoids non-physical intensity discontinuities at masked-region boundaries that arise from learnable mask tokens. On downstream AutoPET lesion segmentation, the proposed models demonstrate strong label efficiency: with only 10\% of the labeled training data, they achieve performance comparable to models trained from scratch on the full dataset. Under extreme 5-shot linear probing, joint PET/CT pretraining also achieves higher Dice scores than separated-modality pretraining. This multi-center foundation model demonstrates label efficiency and cross-modality representation learning for PET/CT tumor segmentation. It provides a robust, open-source basis for advancing automated oncologic imaging, significantly reducing the need for large-scale manual annotations in clinical practice.

---

📖 [Read original article](https://arxiv.org/abs/2605.21835)