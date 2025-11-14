---
layout: about
permalink: /
title: About
description: 

---

# **Neural Differential Equations for Continuous-Time Analysis**

---

## Overview

Modeling complex and irregular time series is a key challenge in modern machine learning, especially when sampling is non-uniform or observations contain gaps or noise.
This website serves as a resource for both introductory and advanced topics on Neural Differential Equations (NDEs), including tutorials, surveys, and practical guides. It summarizes the main ideas of continuous-time modeling and outlines the major NDE families: Neural Ordinary Differential Equations (NODEs), Neural Controlled Differential Equations (NCDEs), and Neural Stochastic Differential Equations (NSDEs).

Beyond model design, the site discusses issues of robustness, stability, and reliability that often arise in practice. It also provides hands-on examples based on open-source implementations for tasks such as interpolation, representation learning, and classification. The goal is to help researchers and practitioners use a single reference that connects theory, algorithms, and practical workflows in continuous-time deep learning.

---

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

## Instructors

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="Dong-Young Lim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/dongyoung.jpg" %}
  {% include people_horizontal.liquid name="Sungil Kim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/sungil.png" %}
</div>

---

## Organizers

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/seungsu.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="" img="assets/img/profiles/jonghun.jpg" %}
</div>

---

## Quick Links

- **[Foundational Papers](/papers/)**  
- **[Code Repositories](https://github.com/yongkyung-oh/Stable-Neural-SDEs/tree/main/tutorial)**  
- **[Tutorials](https://drive.google.com/drive/folders/1lJz6m7L01r5r-1vZCBtVffElc0_rkkOl?usp=sharing)**  
- **[Slides & Figures](https://drive.google.com/drive/folders/16MXo3gMfk148Rx3XfDFFhc-Dy3TvHvhf?usp=sharing)**

---

*Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}*
