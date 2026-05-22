---
title: "Regulating Anatomy-Aware Rewards via Trajectory-Integral Feedback for Volumetric Computed Tomography Analysis"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20277"
author: "Tianwei Lin, Zhongwei Qiu, Jie Cao, Jiang Liu, Wenjie Yan, Bo Zhang, Yu Zhong, Wenqiao Zhang, Yingda Xia, Ling Zhang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20277v1 Announce Type: cross Abstract: Medical vision-language models (VLMs) have rapidly advanced as general-purpose multimodal assistants, yet their deployment in 3D Computed Tomography (CT) analysis remains constrained by a persistent mismatch between optimization objectives and clinical rigor. Current Reinforcement Learning (RL) paradigms still rely on lexical proxy signals that induce ``\textit{Evaluation Hallucinations}'', where models optimize linguistic fluency rather than factual clinical correctness, leading to diagnostically critical errors. To bridge this gap, we introduce the \textbf{Clinical Abnormality Benchmarking Substrate (CABS)}, a structured system that decomposes radiology reports into verifiable clinical semantic units. Using CABS, we identify a ``\textit{Mechanistic Divergence}'' in standard RL, where surface-similarity rewards drive policy gradients to bypass medical facts. We therefore propose \textbf{Trajectory-Integral Feedback GRPO (TIF-GRPO)}, a novel framework integrating control-theoretic principles into policy optimization. By formulating clinical reasoning as a pseudo-temporal trajectory for anomaly discovery, TIF-GRPO regulates anatomy-aware rewards via an integral feedback loop that penalizes persistent omissions as cumulative state errors and suppresses hallucinations as excessive control effort. Experiments on 3D CT benchmarks demonstrate that our approach significantly enhances abnormality detection and clinical faithfulness, establishing a new paradigm for fine-grained regulation in medical VLMs. Our project is available at \href{https://github.com/ZJU4HealthCare/TIF-GRPO}{GitHub}.

---

📖 [Read original article](https://arxiv.org/abs/2605.20277)