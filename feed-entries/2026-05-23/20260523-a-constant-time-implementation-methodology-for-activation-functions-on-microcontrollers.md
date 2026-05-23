---
title: "A Constant-Time Implementation Methodology for Activation Functions on Microcontrollers"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22441"
author: "Andrii Tyvodar, Andreas Rechberger, Dirmanto Jap, Shivam Bhasin, Bernhard Jungk, Jakub Breier, Xiaolu Hou"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.22441v1 Announce Type: cross Abstract: Embedded neural-network inference can leak information through timing side channels, including leakage caused by the evaluation of activation functions. This work proposes a constant-time implementation methodology for activation functions on embedded microcontrollers and validates it on ReLU, sigmoid, tanh, GELU, and Swish on an ARM Cortex-M4 platform. The proposed methodology combines branchless selection, fixed-cost Pad\'e-based approximation, dummy arithmetic where needed, and cycle alignment to obtain timing-regular activation-function implementations. As motivation, we also evaluate a desynchronization-based countermeasure and show that it remains vulnerable to a template-based timing attack. Experimental results show that the resulting protected implementations achieve identical cycle counts for all tested inputs, including (88) cycles in the three-function setting and (108) cycles in the five-function setting. At the same time, the numerical-error analysis indicates that the approximated nonlinear functions retain high accuracy. These results suggest that the proposed methodology provides a practical basis for constructing side-channel-resistant activation functions in embedded inference.

---

📖 [Read original article](https://arxiv.org/abs/2605.22441)