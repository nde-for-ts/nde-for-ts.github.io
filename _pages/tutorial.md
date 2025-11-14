---
layout: about
permalink: /tutorial/
title: Tutorial
description: 
nav: true
nav_order: 1

---

# **Neural Differential Equations for Continuous-Time Analysis**

---

## Overview

Modeling complex, irregular time series is a critical challenge in knowledge discovery and data mining. This tutorial introduces Neural Differential Equations (NDEs)—a powerful paradigm for continuous-time deep learning that intrinsically handles the non-uniform sampling and missing values where traditional models falter. We provide a comprehensive review of the theory and practical application of the entire NDE family: Neural Ordinary (NODEs), Controlled (NCDEs), and Stochastic (NSDEs) Differential Equations. The tutorial emphasizes robustness and stability and culminates in a hands-on session where participants will use key open-source libraries to solve real-world tasks like interpolation and classification. Designed for AI researchers and practitioners, this tutorial equips attendees with essential tools for time series analysis.

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

## Tutorial Outline and Structure

### **Session I: Foundations of Continuous-Time Modeling** [[link]](https://drive.google.com/file/d/1zotcveHW_me0ayIvroeEkEdA0uapp_Mb/view?usp=sharing)

* **Overview & Motivation** *(10 min)*
  *Why continuous-time? Challenges of irregular data.*

* **Neural Ordinary Differential Equations** *(35 min)*
  *Theory, core concepts, and the adjoint method for training.*

* **Hands-on: Part I** [[link]](https://drive.google.com/file/d/1Y2mwexZAI2xfLnR6vYMSTOVJxbw_79an/view?usp=drive_link) *(30 min)*
  *Implementing Neural Ordinary Differential Equations and Latent ODEs.*

---

### **Session II: Advanced Models and Applications** [[link]](https://drive.google.com/file/d/1M9X8L5LLKZMARPPHOb_6ElqpHrqjUbsI/view?usp=sharing)

* **Neural Controlled Differential Equations** *(25 min)*
  *Handling irregular data as a continuous path.*

* **Neural Stochastic Differential Equations** *(20 min)*
  *Modeling uncertainty; focus on Stable SDEs.*

* **Hands-on: Part II** [[link]](https://drive.google.com/file/d/1Y2mwexZAI2xfLnR6vYMSTOVJxbw_79an/view?usp=drive_link) *(20 min)*
  *Implementing and comparing advanced models.*

* **Summary & Future Directions** *(10 min)*
  *Recap of the NDE family, applications, and conclusion.*

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
