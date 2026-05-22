---
title: "WriteSAE: Sparse Autoencoders for Recurrent State"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12770"
author: "Jack Young"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.12770v4 Announce Type: replace-cross Abstract: We introduce WriteSAE, a sparse autoencoder for the matrix updates written into recurrent language-model state. In Gated DeltaNet, Mamba-2, and RWKV-7, each token writes a matrix-shaped update to a recurrent cache; a residual-stream SAE has vector-shaped atoms and cannot replace that update directly. WriteSAE learns rank-1 matrix atoms with the same shape as the model's own write. This lets us test a direct replacement: at positions where the SAE activates an atom, we remove the model's write, insert the atom scaled by its SAE activation, and continue the forward pass. The atom gives a closer final token distribution than deleting the write on 92.4% of evaluated positions; averaged per atom, the rate is 89.8%. For Gated DeltaNet, a formula using the forget gate, read query, and output embedding predicts the resulting logit change with $R^2 = 0.98$. The same replacement test transfers to Mamba-2-370M at 88.1%. In generation, the formula chooses a write direction; writing it into three consecutive cache positions at $3\times$ the norm of the model's write makes tokens initially ranked 100--1000 by the unmodified model appear in 100% of continuations, up from 33.3%. To our knowledge this is the first cache-level steering intervention reported in a state-space or hybrid recurrent layer.

---

📖 [Read original article](https://arxiv.org/abs/2605.12770)