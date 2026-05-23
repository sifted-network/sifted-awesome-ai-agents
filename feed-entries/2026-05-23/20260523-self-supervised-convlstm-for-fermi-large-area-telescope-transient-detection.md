---
title: "Self-Supervised ConvLSTM for Fermi Large Area Telescope Transient Detection"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22112"
author: "Alberto Garinei, Stefano Speziali, Alessandro Vispa, Andrea Marini, Sara Cutini, Emanuele Piccioni, Marcello Marconi, Francesco Longo, Matteo Martini, Francesca Fallucchi, Romeo Giuliano, Ernesto William De Luca, Umberto Di Matteo, Sabino Meola"
categories: ["astro-ph.HE", "astro-ph.IM", "cs.LG"]
---

arXiv:2605.22112v1 Announce Type: cross Abstract: We present a framework for detecting transient gamma-ray phenomena in a controlled environment by combining end-to-end simulations of the Fermi-LAT sky with self-supervised spatio-temporal deep learning. We generate a ten-year synthetic Universe with gtobssim and process the simulated events into daily all-sky maps of counts and exposure, obtaining a time-ordered sequence that mirrors the structure of Fermi-LAT observations. To model the nominal evolution of the sky, we employ a Convolutional Long Short-Term Memory (ConvLSTM) network that operates directly on map sequences, preserving spatial locality while learning temporal dependencies. The model is trained to reconstruct expected emission, and departures from the learned baseline are quantified through pixel-wise mean-squared residual maps. We then define statistically motivated anomaly criteria by estimating per-pixel thresholds from the residual distribution on the training set, and we enforce spatial coherence via local filtering to suppress isolated fluctuations. The ConvLSTM is then deployed as trained predictor on Fermi-LAT daily maps, where the sky can depart from the nominal behavior because of genuine astrophysical variability and instrumental non-stationarities. The resulting pipeline flags localized, time-dependent excesses consistent with high-variable sources or transient events (e.g., flares or GRBs) and provides a benchmark for evaluating anomaly-detection strategies on long-duration, Fermi-LAT-like datasets.

---

📖 [Read original article](https://arxiv.org/abs/2605.22112)