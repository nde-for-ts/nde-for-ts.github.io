---
layout: about
title: Tutorial
permalink: /
---

# **[CIKM2025] Neural Differential Equations for Continuous-Time Analysis**

---

## Overview

Modeling complex, irregular time series is a critical challenge in knowledge discovery and data mining. This tutorial introduces Neural Differential Equations (NDEs)—a powerful paradigm for continuous-time deep learning that intrinsically handles the non-uniform sampling and missing values where traditional models falter. We provide a comprehensive review of the theory and practical application of the entire NDE family: Neural Ordinary (NODEs), Controlled (NCDEs), and Stochastic (NSDEs) Differential Equations. The tutorial emphasizes robustness and stability and culminates in a hands-on session where participants will use key open-source libraries to solve real-world tasks like interpolation and classification. Designed for AI researchers and practitioners, this tutorial equips attendees with essential tools for time series analysis.

**Neural Differential Equations (NDEs)** provide a principled way to model these signals in continuous time, enabling:
- Flexible handling of non-uniform sampling and missingness.
- Rich latent dynamics modeling beyond discrete-step RNNs and Transformers.
- Integration of domain knowledge through the structure of differential equations.

**NDE for TS** curates:
- **Tutorials** explaining the mathematical foundations and practical implementation.
- **Surveys** of key papers, from the original NODE framework to recent NCDE/NSDE variants.
- **Code examples** using PyTorch, `torchcde`, and `torchsde`, ready to run in Colab.
- **Applications** across healthcare, industry, finance, and science.

---

## Learning Goals

By the end of this resource, you will:
1. Understand why continuous-time modeling is beneficial for irregular and multi-resolution time series.
2. Know the differences between NODEs, NCDEs, and NSDEs — their assumptions, strengths, and limitations.
3. Be able to train and evaluate NDE-based models with attention to solver choice, stability, and computational cost.
4. Recognize strategies for improving robustness, interpretability, and trustworthiness in sensitive domains.

---

## Target Audience

- **Graduate students** entering time series modeling research.
- **Applied researchers** in domains with irregular or sparse observations.
- **Practitioners** seeking robust forecasting or classification solutions under dataset shift and uncertainty.

**Prerequisites:**  
- Working knowledge of calculus, linear algebra, and probability.  
- Familiarity with deep learning fundamentals and PyTorch.

---

## Structure of the Content

1. **Motivation:**  
   - Limitations of discrete-time models in the presence of irregular sampling, noise, and missing data.

2. **Model Families:**  
   - **Neural Ordinary Differential Equations (NODEs):** Continuous-time hidden dynamics without control paths.  
   - **Neural Controlled Differential Equations (NCDEs):** Extension for systems driven by continuous control signals.  
   - **Neural Stochastic Differential Equations (NSDEs):** Incorporating stochasticity for uncertainty-aware dynamics.

3. **Training & Tooling:**  
   - Adjoint sensitivity method, solver choices, handling stiffness.  
   - Regularization techniques and numerical stability considerations.

4. **Trustworthy NDEs:**  
   - Robustness to dataset shift.  
   - Uncertainty quantification.  
   - Interpretability in high-stakes domains.

5. **Hands-on Examples:**  
   - Jupyter notebooks for interpolation, classification, and forecasting.  
   - Step-by-step code walkthroughs with domain-specific datasets.

6. **Reference Library:**  
   - Curated bibliography of foundational and recent papers.  
   - Links to open-source implementations and benchmarks.

---

## Quick Links

- **[Foundational Papers](/publications/)**  
- **[Code Repositories](/publications/)**  
- **[Tutorials](https://github.com/yongkyung-oh/Stable-Neural-SDEs/tree/main/tutorial)**  
- **[Slides & Figures](#)**

---

## Organizers

<h2>Organizers</h2>
<div class="row row-cols-1 row-cols-md-2 g-3">
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
</div>

- [Dr. YongKyung Oh](https://yongkyung-oh.github.io/), Postdoctoral Researcher at the University of California, Los Angeles (UCLA) Health - David Geffen School of Medicine, contributing to the Medical & Imaging Informatics (MII) group led by Dr. Alex Bui.
- [Prof. Dong-Young Lim](https://sites.google.com/view/dlim/), Assistant professor in the Department of Industrial Engineering and the Artificial Intelligence Graduate School at the Ulsan National Institute of Science and Technology (UNIST).
- [Prof. Sungil Kim](https://analytics.unist.ac.kr/), Associate Professor in the Department of Industrial Engineering and the Artificial Intelligence Graduate School at the Ulsan National Institute of Science and Technology (UNIST).

---

*Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}*
