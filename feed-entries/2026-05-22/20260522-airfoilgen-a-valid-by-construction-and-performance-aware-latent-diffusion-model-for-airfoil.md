---
title: "AirfoilGen: A valid-by-construction and performance-aware latent diffusion model for airfoil generation"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20303"
author: "Zhijie Yang, Min Tang, Peng Du, Qiang Zou"
categories: ["cs.LG"]
---

arXiv:2605.20303v2 Announce Type: new Abstract: Airfoil shape design is a fundamental task in aerospace engineering, with a direct impact on flight stability and fuel consumption. Deep learning has recently emerged as a promising tool for this task, but existing deep generative approaches remain limited in both geometric validity and physical controllability. They offer little control over the generated shapes, yielding invalid geometries, and they typically do not condition effectively on aerodynamic performance. To address these issues, this paper proposes AirfoilGen, a valid-by-construction and performance-aware latent diffusion model for airfoil. It first introduces a novel airfoil representation scheme, the circle sweeping representation, to constrain the generative process so that output shapes respect essential airfoil characteristics. It then enables explicit control over aerodynamic performance (e.g., lift and drag coefficients) by operating in a learned latent space: a transformer model encodes airfoil shapes into vector embeddings, and a conditional diffusion model denoises Gaussian noise into these latent embeddings while incorporating target aerodynamic performance. In addition, this paper presents a new dataset of over 200,000 airfoils, which is substantially larger than the widely used UIUC airfoil dataset (1,650 airfoils) and more suitable for training modern deep generative models. Experiments demonstrate that AirfoilGen enables airfoil generation with far greater geometric validity and aerodynamic performance controllability than previously achievable, with an average performance-conditioning accuracy of 98.41%.

---

📖 [Read original article](https://arxiv.org/abs/2605.20303)