---
title: "Fill the GAP: A Granular Alignment Paradigm for Visual Reasoning in Multimodal Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12374"
author: "Yanting Miao, Yutao Sun, Dexin Wang, Mengyu Zhou, Pascal Poupart, Lei Lv, Qi Zhao, Li Wang, Hao Li, Xiaoxi Jiang, Guanjun Jiang"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2605.12374v3 Announce Type: replace-cross Abstract: Visual latent reasoning lets a multimodal large language model (MLLM) create intermediate visual evidence as continuous tokens, avoiding external tools or image generators. However, existing methods usually follow an output-as-input latent paradigm and yield unstable gains. We identify evidence for a feature-space mismatch that can contribute to this instability: dominant visual-latent models build on pre-norm MLLMs and reuse decoder hidden states as predicted latent inputs, even though these states occupy a substantially different norm regime from the input embeddings the model was trained to consume~\citep{xie2025mhc,li2026siamesenorm,team2026attention}. This mismatch can make direct latent feedback unreliable. Motivated by this diagnosis, we propose \textbf{GAP}, a \textbf{G}ranular \textbf{A}lignment \textbf{P}aradigm for visual latent modeling. GAP aligns visual latent reasoning at three levels: feature-level alignment maps decoder outputs into input-compatible visual latents through a lightweight PCA-aligned latent head; context-level alignment grounds latent targets with inspectable auxiliary visual supervision; and capacity-guided alignment assigns latent supervision selectively to examples where the base MLLM struggles. On Qwen2.5-VL 7B, the resulting model achieves the best mean aggregate perception and reasoning performance among our supervised variants. Inference-time intervention probing further suggests that generated latents provide task-relevant visual signal beyond merely adding token slots.

---

📖 [Read original article](https://arxiv.org/abs/2605.12374)