---
title: "Finding the Correct Visual Evidence Without Forgetting: Mitigating Hallucination in LVLMs via Inter-Layer Visual Attention Discrepancy"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20965"
author: "Yutong Xie, Zhenglin Hua, Ran Wang, Wing W. Y. Ng, Xizhao Wang, Yuheng Jia"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20965v1 Announce Type: cross Abstract: Large Vision-Language Models (LVLMs) have shown remarkable performance on a wide range of vision-language tasks. Despite this progress, they are still prone to hallucination, generating responses that are inconsistent with visual content. In this work, we find that LVLMs tend to hallucinate when they pay insufficient attention to the correct visual evidence and gradually forget it during the generation process. We empirically find that although LVLMs overall attend insufficiently to visual evidence, they exhibit sensitivity to the correct visual evidence in specific layers, with notable inter-layer discrepancy. Motivated by this observation, we propose a novel hallucination mitigation method that enhances visual evidence based on Inter-Layer Visual Attention Discrepancy (ILVAD). Specifically, we obtain the attention weights from early generated tokens to visual tokens across layers and identify the tokens that are repeatedly activated as visual evidence, forming a saliency map. We then enhance attention to visual evidence during generation through the saliency map to reduce visual forgetting. In addition, we leverage the saliency map to obtain attention scores of generated text to visual evidence, in order to select and emphasize text tokens that are strongly grounded in visual evidence. Our method is training-free and plug-and-play. Multiple benchmark evaluations conducted on five recently released models show that our method can consistently mitigate hallucinations in different LVLMs over various architectures. Code is available at https://github.com/ytx-ML/ILVAD.

---

📖 [Read original article](https://arxiv.org/abs/2605.20965)