---
title: "Learning Mixture Models via Efficient High-dimensional Sparse Fourier Transforms"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.05157"
author: "Alkis Kalavasis, Pravesh K. Kothari, Shuchen Li, Manolis Zampetakis"
categories: ["cs.DS", "cs.LG", "stat.ML"]
---

arXiv:2601.05157v2 Announce Type: replace-cross Abstract: In this work, we give a ${\rm poly}(d,k)$ time and sample algorithm for efficiently learning the parameters of a mixture of $k$ spherical distributions in $d$ dimensions. Unlike all previous methods, our techniques apply to heavy-tailed distributions and include examples that do not even have finite covariances. Our method succeeds whenever the cluster distributions have a characteristic function with sufficiently heavy tails. Such distributions include the Laplace distribution but crucially exclude Gaussians. All previous methods for learning mixture models relied implicitly or explicitly on the low-degree moments. Even for the case of Laplace distributions, we prove that any such algorithm must use super-polynomially many samples. Our method thus adds to the short list of techniques that bypass the limitations of the method of moments. Somewhat surprisingly, our algorithm does not require any minimum separation between the cluster means. This is in stark contrast to spherical Gaussian mixtures where a minimum $\ell_2$-separation is provably necessary even information-theoretically [Regev and Vijayaraghavan '17]. Our methods compose well with existing techniques and allow obtaining ''best of both worlds" guarantees for mixtures where every component either has a heavy-tailed characteristic function or has a sub-Gaussian tail with a light-tailed characteristic function. Our algorithm is based on a new approach to learning mixture models via efficient high-dimensional sparse Fourier transforms. We believe that this method will find more applications to statistical estimation. As an example, we give an algorithm for consistent robust mean estimation against noise-oblivious adversaries, a model practically motivated by the literature on multiple hypothesis testing. It was formally proposed in a recent Master's thesis by one of the authors, and has already inspired follow-up works.

---

📖 [Read original article](https://arxiv.org/abs/2601.05157)