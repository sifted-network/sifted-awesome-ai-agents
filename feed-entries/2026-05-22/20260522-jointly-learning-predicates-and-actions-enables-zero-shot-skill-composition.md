---
title: "Jointly Learning Predicates and Actions Enables Zero-Shot Skill Composition"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20648"
author: "Benedict Quartey, Sebastian Castro, Eric Rosen, Wil Thomason, George Konidaris, Stefanie Tellex"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2605.20648v1 Announce Type: cross Abstract: Learning from Demonstration (LfD) enables robots to learn complex behaviors from expert examples, yet existing approaches often fail to generalize to new compositions of known skills without retraining. Modern generative policies model distributions over action trajectories alone, thus are unable to reason about the symbolic outcomes required for robust composition. We propose that skills should jointly model action trajectories and the symbolic outcomes they induce. To address this gap, we introduce Predicate Action Skills (PACTS), a class of closed-loop visuomotor policies that model skills as a joint generative process over action and predicate belief trajectories, producing coherent action-outcome rollouts within a single model. Jointly generating actions and predicates enables PACTS to learn internal representations that improve both action generation and predicate classification. Furthermore, we demonstrate zero-shot composition of learned skills via planning by leveraging online predicate predictions from PACTS as a symbolic interface for sequencing and monitoring execution. Project website: https://planpacts.github.io/

---

📖 [Read original article](https://arxiv.org/abs/2605.20648)