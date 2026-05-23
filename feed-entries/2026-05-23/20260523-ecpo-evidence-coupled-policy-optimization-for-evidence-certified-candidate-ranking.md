---
title: "ECPO: Evidence-Coupled Policy Optimization for Evidence-Certified Candidate Ranking"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21993"
author: "Miaobo Hu, Shuhao Hu, BoKun Wang, Yina Sa, Xin Wang, Xiaobo Guo, Daren Zha, Jun Xiao"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.21993v1 Announce Type: new Abstract: Ranking systems used in decision-support settings should not only order candidates but also expose evidence that can be independently checked. We study evidence-certified candidate ranking: given an intent_id, a predefined plan skeleton, a window-local candidate roster, and text-derived candidate trajectories with span provenance, a system must output a Top-K list together with doc_id:span evidence certificates whose cited spans are sufficient to recover the decision. We instantiate this task on MAVEN-ERE and RAMS with fixed upstream extraction, window-local randomized candidate identifiers, skeleton-aligned trajectory supervision, hard negatives, and audit references. We introduce Evidence-Coupled Policy Optimization (ECPO), a listwise policy-optimization objective whose action is the joint object of ranking and evidence certificate. ECPO first learns an interpretable trajectory reward from skeleton alignment, argument consistency, and optional graph features; it then optimizes a constrained policy with three coupled rewards: listwise ranking utility, span-level certificate validity, and an evidence-cycle reward computed by a label-free deterministic verifier that reconstructs candidate support from claim-stripped cited spans. This reframes the goal from maximizing ordinary NDCG alone to maximizing CertNDCG and decision-evidence coupling. The evaluation compares ECPO against zero-shot, SFT, and GRPO policies, RM-only scoring with deterministic evidence attachment, grammar/JSON-constrained decoding, validator retry, best-of-N RM selection, and post-hoc evidence rationalization under closed-roster, predicted-roster, and hybrid-roster settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.21993)