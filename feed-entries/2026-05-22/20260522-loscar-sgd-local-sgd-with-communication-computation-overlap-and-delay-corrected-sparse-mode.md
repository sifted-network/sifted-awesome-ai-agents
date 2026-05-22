---
title: "LOSCAR-SGD: Local SGD with Communication-Computation Overlap and Delay-Corrected Sparse Model Averaging"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20866"
author: "Yassine Maziane, Ammar Mahran, Artavazd Maranjyan, Peter Richt\\'arik"
categories: ["cs.LG", "cs.DC", "math.OC", "stat.ML"]
---

arXiv:2605.20866v1 Announce Type: new Abstract: Communication is a major bottleneck in distributed learning, especially in large-scale settings and in federated learning environments with slow links. Three standard ways to reduce this cost are communication compression, local training, and communication-computation overlap. Methods that combine these ingredients are used in practice and have been found to be effective for large-scale training, but there is little theory for methods that combine all three. We study a heterogeneous-compute setting in which different workers may take different numbers of local steps, and we propose LOSCAR-SGD, a Local SGD method that communicates only a sparse subset of model coordinates and continues optimizing while communication is in flight. A key ingredient is a delay-corrected merge rule that incorporates delayed synchronized information without discarding the progress made during the overlap phase. We give convergence guarantees for smooth non-convex objectives and show how sparsity, overlap, and worker heterogeneity affect the rate. To the best of our knowledge, this is the first theory for this combination of ingredients. Experiments further show that communication-computation overlap reduces training time and that the delay-corrected merge outperforms naive overwriting.

---

📖 [Read original article](https://arxiv.org/abs/2605.20866)