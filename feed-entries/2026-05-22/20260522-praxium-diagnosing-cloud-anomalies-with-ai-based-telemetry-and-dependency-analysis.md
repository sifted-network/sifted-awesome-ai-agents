---
title: "Praxium: Diagnosing Cloud Anomalies with AI-based Telemetry and Dependency Analysis"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.23890"
author: "Rohan Kumar, Jason Li, Zongshun Zhang, Syed Mohammad Qasim, Gianluca Stringhini, Ayse K. Coskun"
categories: ["cs.SE", "cs.LG"]
---

arXiv:2603.23890v2 Announce Type: replace-cross Abstract: As the modern microservice architecture for cloud applications grows in popularity, cloud services are becoming increasingly complex and more vulnerable to misconfiguration and software bugs. Traditional approaches rely on expert input to diagnose and fix microservice anomalies, which lacks scalability in the face of the continuous integration and continuous deployment (CI/CD) paradigm. Microservice rollouts, containing new software installations, have complex interactions with the components of an application. Consequently, this added difficulty in attributing anomalous behavior to any specific installation or rollout results in potentially slower resolution times. To address the gaps in current diagnostic methods, this paper introduces Praxium, a framework for anomaly detection and root cause inference. Praxium aids administrators in evaluating target metric performance in the context of dependency installation information provided by a software discovery tool, PraxiPaaS. Praxium continuously monitors telemetry data to identify anomalies, then conducts root cause analysis via causal impact on recent software installations, in order to provide site reliability engineers (SRE) relevant information about an observed anomaly. In this paper, we demonstrate that Praxium is capable of effective anomaly detection and root cause inference, and we provide an analysis on effective anomaly detection hyperparameter tuning as needed in a practical setting. Across 75 total trials using four synthetic anomalies, anomaly detection consistently performs at >0.97 macro-F1. In addition, we show that causal impact analysis reliably infers the correct root cause of anomalies, even as package installations occur at increasingly shorter intervals.

---

📖 [Read original article](https://arxiv.org/abs/2603.23890)