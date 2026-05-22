---
title: "Representability-Aware Neural Networks for Reduced Density Matrices: Application to Fractional Chern Insulators"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20326"
author: "Justin B. Hart, Awwab A. Azam, Thomas Li, Yunxuan Li, Ye Bi, Haining Pan, Jiabin Yu"
categories: ["cond-mat.str-el", "cs.AI"]
---

arXiv:2605.20326v1 Announce Type: cross Abstract: We develop a representability-aware and interpolable neural network (NN) framework for predicting two-particle reduced density matrices (2-RDMs). The NN incorporates a subset of representability conditions through its architecture and loss function, and can operate on different momentum meshes, enabling evaluating the representability conditions across multiple meshes, which we call interpolated representability condition. The framework can be used either to predict 2-RDMs on large momentum meshes by interpolating exact results from small meshes, or as a variational 2-RDM ansatz optimized by energy minimization on arbitrary meshes. We apply this approach to the fractional Chern insulator in the one-band projected model of twisted bilayer MoTe$_2$ at twist angle $3.89^\circ$ and hole filling $2/3$. Trained on exact-diagonalization (ED) 2-RDMs from meshes with $12$ or $18$ momentum points using six different NN architectures, the best NN is the residual multilayer perceptron, which predicts the $6\times6$ 2-RDM with $97.07\%-98.18\%$ accuracy relative to the ED 2-RDM but predicts an energy $77.353$ meV above ED ground-state energy. We then variationally optimize the NN on several meshes including $6\times6$, predicting a $6\times 6$ energy of just $0.104$ meV below ED while maintaining $98.94\%-98.96\%$ accuracy. Compared with the conventional boundary-point semidefinite programming, which gives an energy $5.560$ meV below ED with $96.40\%-98.94\%$ accuracy, the NN achieves a more accurate energy and similar accuracy while using only less than 1/20 as many parameters. Eventually, we add a symmetric mesh of $48$ momentum points to the variational optimization of the NN, and provide a prediction of the many-body ground-state energy and the many-body quantum metric on that mesh.

---

📖 [Read original article](https://arxiv.org/abs/2605.20326)