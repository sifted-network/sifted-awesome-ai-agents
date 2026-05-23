---
title: "Revisiting Robustness for LLM Safety Alignment via Selective Geometry Control"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.07340"
author: "Yonghui Yang, Wenjian Tao, Jilong Liu, Xingyu Zhu, Junfeng Fang, Weibiao Huang, Le Wu, Richang Hong, Tat-Sent Chua"
categories: ["cs.LG"]
---

arXiv:2602.07340v2 Announce Type: replace Abstract: Safety alignment of large language models remains brittle under domain shift and noisy preference supervision. Most existing robust alignment methods focus on uncertainty in alignment data, while overlooking optimization-induced fragility in preference-based objectives. In this work, we revisit robustness for LLM safety alignment from an optimization geometry perspective, and argue that robustness failures cannot be addressed by data-centric methods alone. We propose \textit{ShaPO}, a geometry-aware preference optimization framework that enforces worst-case alignment objectives via selective geometry control over alignment-critical parameter subspace. By avoiding uniform geometry constraints, ShaPO mitigates the over-regularization that can harm robustness under distribution shift. We instantiate ShaPO at two levels: token-level ShaPO stabilizes likelihood-based surrogate optimization, while reward-level ShaPO enforces reward-consistent optimization under noisy supervision. Across diverse safety benchmarks and noisy preference settings, ShaPO consistently improves safety robustness over popular preference optimization methods. Moreover, ShaPO composes cleanly with data-robust objectives, yielding additional gains and empirically supporting the proposed optimization-geometry perspective. The code is available at https://github.com/liujilong0116/ShaPO.

---

📖 [Read original article](https://arxiv.org/abs/2602.07340)