---
title: "Gated Normalization Removal and Scale Anchoring in Pre-Norm Transformers"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.10408"
author: "Andrei Kanavalau, Carmen Amo Alonso, Sanjay Lall"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2602.10408v2 Announce Type: replace Abstract: Normalization layers are standard in transformers, but it is not clear whether their sample-dependent computations are necessary throughout both training and inference. This work develops a gated normalization-removal approach for pre-norm transformers. The approach is implemented using TaperNorm, which starts from standard RMSNorm/LayerNorm and gradually tapers to learned sample-independent linear or affine maps. Once the gate reaches zero, per-token statistics are no longer computed in the tapered layers and the resulting maps can be folded into adjacent linear projections. The results indicate that internal normalization can be tapered in the tested pre-training and fine-tuning settings with small validation-loss increases. Our approach helps reveal a distinct role for final normalization, namely that it anchors the scale of the pre-logit representation. With this anchor present, radial changes in the last hidden state do not directly reduce the loss; when it is removed, reducing cross-entropy can be achieved by increasing logit magnitudes. A fixed-target scale loss provides an explicit alternative anchor and enables fully norm-free ablations in the tested regimes. Finally, in a KV-cached autoregressive decoding benchmark, tapering internal norms gives up to $1.14\times$ higher throughput with explicit scaling operations and up to $1.18\times$ after folding.

---

📖 [Read original article](https://arxiv.org/abs/2602.10408)