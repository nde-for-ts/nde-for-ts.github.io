---
layout: about
permalink: /
title: Review
description: 
nav: true
nav_order: 1

---

# **[IJCAI2025] Comprehensive Review of Neural Differential Equations for Time Series Analysis**

---

## Overview

Time series modeling and analysis have become critical in various domains. Conventional methods such as RNNs and Transformers, while effective for discrete-time and regularly sampled data, face significant challenges in capturing the continuous dynamics and irregular sampling patterns inherent in real-world scenarios. Neural Differential Equations (NDEs) represent a paradigm shift by combining the flexibility of neural networks with the mathematical rigor of differential equations. This paper presents a comprehensive review of NDE-based methods for time series analysis, including neural ordinary differential equations, neural controlled differential equations, and neural stochastic differential equations. We provide a detailed discussion of their mathematical formulations, numerical methods, and applications, highlighting their ability to model continuous-time dynamics. Furthermore, we address key challenges and future research directions. This survey serves as a foundation for researchers and practitioners seeking to leverage NDEs for advanced time series analysis.

This survey provides a comprehensive review of NDE-based methods for time series analysis, covering the three core families:
- **Neural Ordinary Differential Equations (NODEs)**
- **Neural Controlled Differential Equations (NCDEs)**
- **Neural Stochastic Differential Equations (NSDEs)**

We offer a detailed discussion of their mathematical formulations, numerical methods, and key applications, highlighting their unique ability to model continuous-time dynamics. This survey serves as a foundational guide for researchers and practitioners aiming to leverage NDEs for advanced time series analysis.

---

## Key Contributions of This Survey

This paper provides a structured synthesis of the NDE field for time series analysis, with a focus on:

1.  **Foundational Models:** A detailed breakdown of the formulations and extensions for NODEs, NCDEs, and NSDEs.
2.  **Theoretical Underpinnings:** An analysis of universal approximation properties, conditions for the existence and uniqueness of solutions, and the stability of different NDE families.
3.  **Practical Implementation:** A guide to practical considerations, including optimization with the adjoint method, regularization techniques, and the selection of numerical solvers.
4.  **Empirical Comparison:** A consolidated summary of benchmark results across a wide range of tasks, including interpolation, forecasting, and classification.

---

## Authors

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="" img="assets/img/blank.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="" img="assets/img/blank.jpg" %}
  {% include people_horizontal.liquid name="Dong-Young Lim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/dongyoung.jpg" %}
  {% include people_horizontal.liquid name="Sungil Kim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/sungil.jpg" %}
  {% include people_horizontal.liquid name="Alex A. T. Bui" affiliation="University of California, Los Angeles (UCLA)" url="https://mii.ucla.edu/" img="assets/img/profiles/alex.jpg" %}
</div>

---

## Quick Links

- **[Foundational Papers](/publications/)**  
- **[Code Repositories](#)**  
- **[Tutorials](https://github.com/yongkyung-oh/Stable-Neural-SDEs/tree/main/tutorial)**  
- **[Slides & Figures](#)**

---

*Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}*
