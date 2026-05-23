---
title: "More Context, Larger Models, or Moral Knowledge? A Systematic Study of Schwartz Value Detection in Political Texts"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22641"
author: "V\\'ictor Yeste, Paolo Rosso"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.22641v1 Announce Type: cross Abstract: Detecting Schwartz values in political text is difficult because implicit cues often depend on surrounding arguments and fine-grained distinctions between neighboring values. We study when context and explicit moral knowledge help sentence-level value detection. Using the ValuesML/Touch{\'e} ValueEval format, we compare sentence, window, and full-document inputs; no-RAG and retrieval-augmented settings with a curated moral knowledge base; supervised DeBERTa-v3-base/large encoders; and zero-shot LLMs from 12B to 123B parameters. The results show that more context is not uniformly better: full-document context improves supervised DeBERTa encoders by 3.8--4.8 macro-F1 points over sentence-only input, but does not consistently help zero-shot LLMs. Retrieved moral knowledge is more consistently useful in matched comparisons, improving each tested model family and context condition under early fusion. However, scaling from DeBERTa-v3-base to large and from 12B to larger LLMs does not guarantee gains, and simple early fusion outperforms the tested late-fusion and cross-attention RAG variants for encoders. Per-value analyses show that context and retrieval help most for socially situated or conceptually confusable values. These findings suggest that value-sensitive NLP should evaluate context, knowledge, and model family jointly rather than treating longer inputs or larger models as universal improvements.

---

📖 [Read original article](https://arxiv.org/abs/2605.22641)