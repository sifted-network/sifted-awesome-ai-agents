---
title: "Temporal Coding as a Substrate for Sensorimotor Object Inference: A Spiking Reinterpretation of Thousand Brains Architecture"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22206"
author: "Joy Bose"
categories: ["cs.NE", "cs.AI", "cs.RO"]
---

arXiv:2605.22206v1 Announce Type: cross Abstract: The Thousand Brains Theory (TBT) and its open-source Monty framework model object recognition through sensorimotor inference -- identifying objects by actively moving a sensor across their surface and building evidence contact by contact. The current implementation encodes each contact as a dense floating-point vector. While Monty tracks inter-step displacement and accumulates evidence across contacts, it treats the feature activation pattern at each contact as an unordered set - the directional sequence in which features are encountered carries no representational weight. In TBT, the sequence of contacts carries spatial meaning: knowing that feature A was felt before feature B during a left-to-right sweep tells you something about where A and B sit on the object. Dense vectors discard this ordering. We propose replacing dense vectors with rank-order spike packets: each contact produces a brief burst of neural events where the most strongly activated neuron fires first. The time gap between successive bursts implicitly encodes sensor displacement without explicit coordinate calculations. A biologically motivated learning rule (STDP) encodes traversal direction into synaptic weights. A learnable parameter lambda adjusts reliance on earlier versus recent contacts, adapting to each object's geometry. We derive three testable predictions and specify an implementation of four components in approximately 450 lines of NumPy. Three synthetic experiments confirm the core claims: temporal coding achieves perfect discrimination accuracy on objects with identical features in different spatial arrangements, where dense accumulation performs at chance; temporal coding maintains a 30-50 percentage point advantage across all tested noise levels; the adaptive lambda converges to distinct values, reflecting object geometric complexity. End-to-end evaluation on Monty's YCB benchmark is left for future work.

---

📖 [Read original article](https://arxiv.org/abs/2605.22206)