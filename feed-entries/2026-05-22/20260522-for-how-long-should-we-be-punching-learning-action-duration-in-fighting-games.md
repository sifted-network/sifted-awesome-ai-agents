---
title: "For How Long Should We Be Punching? Learning Action Duration in Fighting Games"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20911"
author: "Hoang Hai Nguyen, Kurt Driessens, Dennis J. N. J. Soemers"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.20911v1 Announce Type: new Abstract: Fighting games such as Street Fighter II present unique challenges to reinforcement learning (RL) agents due to their fast-paced, real-time nature. In most RL frameworks, agents are hard-coded to make decisions at a fixed interval, typically every frame or every N frames. Although this design ensures timely responses, it restricts the agent's ability to adjust its reaction timing. Acting every frame grants frame-perfect reflexes, which are unrealistic compared to human players, whereas longer fixed intervals reduce computational cost but hinder responsiveness. We consider an alternative decision-making framework in which the agent learns not only what action to take but also for how long to execute it. By jointly predicting both action and duration, the agent can dynamically adapt its responsiveness to different situations in the game. We implement this method using the open-source FightLadder environment with agents trained against scripted built-in bots, systematically testing different frame skip configurations to analyze their influence on performance, responsiveness, and learned behavior. Experiments show that learned timing can match the performance of well-chosen fixed frame skips and encourages repeatable action patterns, but does not ensure robustness on its own. In most cases, we see agents performing best with consistently high frame skip values (i.e., low responsiveness). This strategy makes it easier to learn exploitative strategies where the same action is repeated over and over, which the scripted bots appear to be susceptible to.

---

📖 [Read original article](https://arxiv.org/abs/2605.20911)