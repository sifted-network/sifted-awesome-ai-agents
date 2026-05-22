---
title: "An exponential mechanism based on quadratic approximations for fine-tuning machine learning models with privacy guarantees"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20521"
author: "Hoang Tran, Jorge Ramirez, Jiayi Wang, Alberto Bocchinfuso, Christopher Stanley, M. Paul Laiu"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.20521v1 Announce Type: new Abstract: Fine-tuning adapts a pretrained machine learning model to a small, sensitive dataset, but this process risks memorizing individual new data points, making the model vulnerable to adversaries who seek to extract sensitive information. In this work, we develop a randomized algorithm based on the exponential mechanism for fine-tuning while ensuring differential privacy. Our key idea is to construct a simple utility function that combines a local quadratic approximation of the pretrained model with information from the new dataset. The resulting exponential mechanism admits exact sampling from a multivariate normal distribution in closed form. We establish theoretical privacy guarantees, sensitivity bounds, and accuracy estimations for our method. We further introduce a random-projection strategy that makes the approach scalable to high-dimensional models. Numerical experiments on the MNIST benchmark and the MIMIC clinical dataset demonstrate competitive performance against existing differentially private fine-tuning techniques.

---

📖 [Read original article](https://arxiv.org/abs/2605.20521)