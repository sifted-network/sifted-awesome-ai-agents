---
title: "Inference Time Policy Optimization for Offline RL with Differentiable World Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.22430"
author: "Rohan Deb, Stephen J. Wright, Arindam Banerjee"
categories: ["cs.LG"]
---

arXiv:2603.22430v2 Announce Type: replace Abstract: Offline Reinforcement Learning (RL) learns optimal policies from fixed datasets, training a policy once and deploying it at inference time without further refinement. Inspired by model predictive control (MPC), we introduce an inference time adaptation framework that utilizes a pretrained policy along with a learned world model. While existing world model and diffusion-planning methods use learned dynamics to generate imagined trajectories during training, or to sample candidate plans at inference time, they do not use inference-time information to *optimize* the policy parameters on the fly. In contrast, our design is a Differentiable World Model (DWM) pipeline that enables end-to-end gradient computation through imagined rollouts for inference time policy optimization (ITPO). We evaluate our algorithm on D4RL continuous-control benchmarks (MuJoCo locomotion tasks and AntMaze), and show that exploiting inference-time information to optimize the policy parameters yields consistent gains over strong offline RL baselines. Inference-time adaptation, however, is expensive: rollout generation and backpropagation dominate per-step compute. We study this tradeoff explicitly, showing that a suitable tilted version of one-step MeanFlow sampler recovers much of the gains at a fraction of the cost.

---

📖 [Read original article](https://arxiv.org/abs/2603.22430)