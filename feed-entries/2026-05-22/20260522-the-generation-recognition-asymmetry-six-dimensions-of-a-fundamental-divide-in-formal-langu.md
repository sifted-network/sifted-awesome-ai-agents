---
title: "The Generation-Recognition Asymmetry: Six Dimensions of a Fundamental Divide in Formal Language Theory"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.10139"
author: "Romain Peyrichou"
categories: ["cs.CL", "cs.AI", "cs.CC", "cs.FL"]
---

arXiv:2603.10139v2 Announce Type: replace-cross Abstract: Every formal grammar defines a language and can in principle be used in three ways: to generate strings (production), to recognize them (parsing), or -- given only examples -- to infer the grammar itself (grammar induction). Generation and recognition are extensionally equivalent -- they characterize the same set -- but operationally asymmetric in multiple independent ways. Inference is a qualitatively harder problem: it does not have access to a known grammar. Despite the centrality of this triad to compiler design, natural language processing, and formal language theory, no survey has treated it as a unified, multidimensional phenomenon. We identify six dimensions along which generation and recognition diverge: computational complexity, ambiguity, directionality, information availability, grammar inference, and temporality. We show that the common characterization "generation is easy, parsing is hard" is misleading: unconstrained generation is trivial, but generation under constraints can be NP-hard. The real asymmetry is that parsing is always constrained (the input is given) while generation need not be. Two of these dimensions -- directionality and temporality -- have not previously been identified as dimensions of the generation-recognition asymmetry. We connect the temporal dimension to the surprisal framework of Hale (2001) and Levy (2008), arguing that surprisal formalizes the temporal asymmetry between a generator (surprisal = 0) and a parser that predicts under uncertainty (surprisal > 0). We review bidirectional systems in NLP and observe that bidirectionality has been available for fifty years yet has not transferred to most domain-specific applications. We conclude with a discussion of large language models, which architecturally unify generation and recognition while operationally preserving the asymmetry.

---

📖 [Read original article](https://arxiv.org/abs/2603.10139)