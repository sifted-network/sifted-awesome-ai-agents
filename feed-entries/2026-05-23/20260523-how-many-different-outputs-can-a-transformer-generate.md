---
title: "How Many Different Outputs Can a Transformer Generate?"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22223"
author: "Maxime Meyer, Mario Michelessa, Caroline Chaux, Vincent Y. F. Tan"
categories: ["cs.LG"]
---

arXiv:2605.22223v1 Announce Type: new Abstract: We study how we can leverage only a handful of characteristics of a transformer's architecture to closely predict the number of different sequences it can output, both qualitatively and quantitatively. We provide an upper bound depending on the length of the prompt, which we show empirically to be tight up to a factor less than 10, across architectures and model sizes. Our analysis also provides a theoretical explanation for previously observed empirical failures of transformers on simple sequence tasks, such as copying and cramming. Formally, we prove that (i) the maximal length of accessible sequences (those that the transformer can output for some prompt) grows linearly with the prompt length, (ii) beyond a critical threshold, the proportion of accessible sequences decays exponentially with sequence length, and (iii) the linear coefficient relating prompt length to accessible sequence length admits a theoretical upper bound. Notably, these results hold even with unbounded context and computation time.

---

📖 [Read original article](https://arxiv.org/abs/2605.22223)