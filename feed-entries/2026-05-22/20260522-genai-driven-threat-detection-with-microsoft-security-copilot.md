---
title: "GenAI-Driven Threat Detection with Microsoft Security Copilot"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20896"
author: "Scott Freitas, Amir Gharib"
categories: ["cs.CR", "cs.AI", "cs.LG"]
---

arXiv:2605.20896v1 Announce Type: cross Abstract: Defending against today's increasingly sophisticated cyberattacks requires security analysts to continuously translate evolving attacker tradecraft into detection logic. This places defenders in a reactive posture, requiring constantly updated expertise across an increasingly fragmented security landscape. We introduce the Dynamic Threat Detection Agent (DTDA), an always-on adaptive agent that continuously investigates security incidents across Microsoft Defender to uncover hidden threats and generate explainable detections when attack-story gaps are found. DTDA combines: (1) a unified activity timeline spanning alerts, events, user and entity behavior analytics, and threat intelligence; (2) versioned LLM prompt contracts with schema validation, grounding requirements, bounded retries, and fail-closed suppression; (3) a planner-executor investigation loop that generates attack-specific hypotheses and gathers supporting and refuting evidence; and (4) dynamic alert generation with a context-relevant title, severity, MITRE mappings, remediation guidance, implicated entities, and natural-language attack description. Integrated into Microsoft Security Copilot and deployed across tens of thousands of Defender customers, DTDA operates continuously at industry scale. In a 120-day online evaluation, DTDA achieves 80.1% precision from customer feedback while generating novel alerts for approximately 15% of investigated incidents. In offline evaluation, DTDA recovers hidden malicious activity with 0.78 F1 using GPT-5.4, improving over GPT-4.1 by 0.12 F1 and outperforming the baseline by 0.26 F1 points. Operationally, DTDA processes single-incident investigations end-to-end in a median of 28 minutes at a median token cost of USD 2.04, with a 0.38% job-level failure rate. These results demonstrate that autonomous agents can identify missed malicious activity at a production scale.

---

📖 [Read original article](https://arxiv.org/abs/2605.20896)