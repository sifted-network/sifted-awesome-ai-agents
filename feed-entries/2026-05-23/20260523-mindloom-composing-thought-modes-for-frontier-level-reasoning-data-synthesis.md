---
title: "MindLoom: Composing Thought Modes for Frontier-Level Reasoning Data Synthesis"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21630"
author: "Haiyang Shen, Taian Guo, Xuanzhong Chen, Mugeng Liu, Weichen Bi, Wenchun Jing, Sixiong Xie, Zhuofan Shi, Yudong Han, Chongyang Pan, Siqi Zhong, Jinsheng Huang, Ming Zhang, Yun Ma"
categories: ["cs.AI"]
---

arXiv:2605.21630v1 Announce Type: new Abstract: Although LLMs have made substantial progress in reasoning, systematically producing frontier-level reasoning data remains difficult. Existing synthesis methods often have limited visibility into the structural factors that govern problem difficulty, which can result in narrow diversity and unstable difficulty control. In this work, we view the difficulty of a reasoning problem as arising from the accumulation of atomic knowledge-reasoning transformations, which we term thought modes. Building on this perspective, we propose MindLoom, a framework for synthesizing frontier-level reasoning data through compositional thought mode engineering. Given a collection of hard problems with verified solutions, MindLoom first decomposes those solutions into thought mode chains that reveal each problem's construction logic. It then trains a retrieval model that matches problem states to compatible thought modes, providing guidance on which reasoning challenges to introduce during synthesis. New problems are composed by iteratively applying retrieved thought modes to seed questions, with distribution-aligned sampling to encourage diverse reasoning coverage. Finally, a rollout-based judging stage labels generated questions by difficulty and supplies judged-correct responses for supervised fine-tuning. We evaluate MindLoom on nine benchmarks covering five STEM disciplines and four mathematical reasoning tasks across multiple model families and sizes. Models fine-tuned on MindLoom-generated data achieves favorable performances over base models, distillation, and external-data baselines across the reported benchmarks. Ablation studies indicate the contribution of each component, and further analysis suggests that MindLoom covers a broad range of reasoning patterns while maintaining useful difficulty control. We have open-sourced our implementation at https://github.com/EachSheep/MindLoom.

---

📖 [Read original article](https://arxiv.org/abs/2605.21630)