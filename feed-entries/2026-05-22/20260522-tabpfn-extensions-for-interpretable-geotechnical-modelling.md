---
title: "TabPFN Extensions for Interpretable Geotechnical Modelling"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.21033"
author: "Taiga Saito, Yu Otake, Daijiro Mizutani, Stephen Wu"
categories: ["cs.CE", "cs.LG"]
---

arXiv:2603.21033v2 Announce Type: replace-cross Abstract: Geotechnical site characterisation relies on sparse, heterogeneous borehole data, where uncertainty quantification and interpretability matter as much as predictive accuracy. We evaluate TabPFN~\citep{Hollmann2025}, a tabular foundation model, and its \texttt{tabpfn-extensions} library on two geotechnical tasks: (1) soil-type classification from N-value and shear-wave velocity data as a controlled illustrative case, and (2) iterative imputation of five mechanical parameters ($s_\mathrm{u}$, $E_{\mathrm{u}}$, ${\sigma'}_\mathrm{p}$, $C_\mathrm{c}$, $C_\mathrm{v}$) in BM/AirportSoilProperties/2/2025. Without retraining, we apply cosine-similarity analysis to TabPFN embeddings, visualise predictive distributions, and compute SHAP attributions. On the regression benchmark we compare TabPFN with mean imputation, linear regression, random forests, XGBoost, and HBM; introduce a proxy decomposition of predictive uncertainty across context-perturbation classes; and propagate marginal $C_\mathrm{c}$ and ${\sigma'}_\mathrm{p}$ distributions through a one-dimensional consolidation model to obtain the reliability index $\beta$ and serviceability exceedance probability $P_\mathrm{f}$. Embeddings exhibit label-consistent Clay/Sand grouping; iterative imputation reduces RMSE for all five targets, with TabPFN lowest on four; SHAP attributions are consistent with the Skempton compression-index correlation and the inverse preconsolidation-pressure-water-content dependence; the within-posterior component is largest in the proxy decomposition. We position the contribution as a worked evaluation workflow that may complement established methods for data-scarce geotechnics, not as algorithmic innovation.

---

📖 [Read original article](https://arxiv.org/abs/2603.21033)