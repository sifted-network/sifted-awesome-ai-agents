---
title: "Gradient Scalability and Taylor Surrogation of Quantum Cost Landscapes"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2507.06344"
author: "Sabri Meyer, Francesco Scala, Francesco Tacchino, Aurelien Lucchi"
categories: ["quant-ph", "cs.CC", "cs.LG"]
---

arXiv:2507.06344v3 Announce Type: replace-cross Abstract: Variational Quantum Algorithms are promising candidates for near-term quantum computing, yet they face scalability challenges due to barren plateaus, where gradients vanish exponentially relative to system size. Recent conjectures suggest that avoiding these plateaus might inherently lead to classical simulability, thereby limiting the opportunities for quantum advantage. In this work, we advance the theoretical understanding of the relationship between gradient scalability at initialization and the computational complexity of variational quantum algorithms. We first present the Taylor surrogate, a classical simulation technique that matches Pauli path runtime guarantees on near-Clifford regions while offering runtime advantages in specific regimes. Leveraging this surrogate, we prove that beyond previously established classically simulable regions, the computational complexity is at least super-polynomial. Next, we introduce the Linear Clifford Encoder, a classically efficient ansatz modifier that ensures constant-scaling gradients within landscape regions close to Clifford circuits. Finally, numerical experiments on these modified landscapes provide preliminary empirical evidence of a transition zone where constant-scaling gradients may decay polynomially in super-polynomially complex regions rather than exponentially. These findings suggest speculative instances where non-vanishing gradients and super-polynomial complexity could potentially coexist, vindicating the need for future formal proofs.

---

📖 [Read original article](https://arxiv.org/abs/2507.06344)