---
layout: about
permalink: /tutorial/
title: Tutorial
description: "CIKM 2025 Tutorial on Neural Differential Equations (NODE, NCDE, NSDE) for continuous-time time series — hands-on with PyTorch, torchcde, and torchsde."
keywords: "CIKM 2025 tutorial, neural differential equations, NODE, NCDE, NSDE, time series, continuous-time deep learning, PyTorch, torchcde, torchsde"
nav: true
nav_order: 1
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "@id": "https://nde-for-ts.github.io/tutorial/",
  "name": "Neural Differential Equations for Continuous-Time Analysis (CIKM 2025 Tutorial)",
  "url": "https://nde-for-ts.github.io/tutorial/",
  "about": "Neural Differential Equations (NODE, NCDE, NSDE) for continuous-time time series modeling",
  "description": "A tutorial covering the theory and hands-on practice of Neural Ordinary Differential Equations, Neural Controlled Differential Equations, and Neural Stochastic Differential Equations for time series analysis, presented at CIKM 2025.",
  "inLanguage": "en",
  "teaches": "Neural Differential Equations for continuous-time time series analysis",
  "provider": {
    "@type": "Organization",
    "name": "NDE for TS"
  },
  "instructor": [
    { "@type": "Person", "name": "YongKyung Oh" },
    { "@type": "Person", "name": "Dong-Young Lim" },
    { "@type": "Person", "name": "Sungil Kim" }
  ],
  "datePublished": "2025",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "DOI",
    "value": "10.1145/3746252.3761447",
    "@id": "https://doi.org/10.1145/3746252.3761447"
  },
  "sameAs": "https://doi.org/10.1145/3746252.3761447",
  "isPartOf": {
    "@type": "Book",
    "name": "Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM '25)"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Association for Computing Machinery"
  }
}
</script>

# **Neural Differential Equations for Continuous-Time Analysis**

> Oh, Y., Lim, D.-Y., & Kim, S. (2025). Neural Differential Equations for Continuous-Time Analysis. In Proceedings of the 34th ACM International Conference on Information and Knowledge Management (CIKM '25) (pp. 6837–6840). Association for Computing Machinery. https://doi.org/10.1145/3746252.3761447 [[paper]](https://dl.acm.org/doi/10.1145/3746252.3761447)

---

## Overview

Modeling complex, irregular time series is a common challenge in knowledge discovery and data mining. This tutorial introduces Neural Differential Equations (NDEs) as a continuous-time modeling framework for non-uniform sampling and missing observations. It reviews the theory and practical application of Neural Ordinary (NODEs), Controlled (NCDEs), and Stochastic (NSDEs) Differential Equations. The tutorial also covers robustness and stability, then uses open-source libraries for tasks such as interpolation and classification.

---

## Learning Goals

By the end of this resource, you will:

1. Understand why continuous-time modeling is beneficial for irregular and multi-resolution time series.
2. Know the differences between NODEs, NCDEs, and NSDEs — their assumptions, strengths, and limitations.
3. Be able to train and evaluate NDE-based models with attention to solver choice, stability, and computational cost.
4. Recognize strategies for assessing robustness, interpretability, and reliability in sensitive domains.

---

## Target Audience

- **Graduate students** entering time series modeling research.
- **Applied researchers** in domains with irregular or sparse observations.
- **Practitioners** studying forecasting or classification under dataset shift and uncertainty.

**Prerequisites:**

- Working knowledge of calculus, linear algebra, and probability.
- Familiarity with deep learning fundamentals and PyTorch.

---

## Tutorial Outline and Structure

### **Session I: Foundations of Continuous-Time Modeling** [[link]](https://drive.google.com/file/d/1zotcveHW_me0ayIvroeEkEdA0uapp_Mb/view?usp=sharing)

- **Overview & Motivation** _(10 min)_
  _Why continuous-time? Challenges of irregular data._

- **Neural Ordinary Differential Equations** _(35 min)_
  _Theory, core concepts, and the adjoint method for training._

- **Hands-on: Part I** [[link]](https://drive.google.com/file/d/1Y2mwexZAI2xfLnR6vYMSTOVJxbw_79an/view?usp=drive_link) _(30 min)_
  _Implementing Neural Ordinary Differential Equations and Latent ODEs._

---

### **Session II: Advanced Models and Applications** [[link]](https://drive.google.com/file/d/1M9X8L5LLKZMARPPHOb_6ElqpHrqjUbsI/view?usp=sharing)

- **Neural Controlled Differential Equations** _(25 min)_
  _Handling irregular data as a continuous path._

- **Neural Stochastic Differential Equations** _(20 min)_
  _Modeling uncertainty; focus on Stable SDEs._

- **Hands-on: Part II** [[link]](https://drive.google.com/file/d/1Y2mwexZAI2xfLnR6vYMSTOVJxbw_79an/view?usp=drive_link) _(20 min)_
  _Implementing and comparing advanced models._

- **Summary & Future Directions** _(10 min)_
  _Recap of the NDE family, applications, and conclusion._

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
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://seungsukam.github.io/" img="assets/img/profiles/seungsu.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/jonghun.jpg" %}
</div>

---

## Quick Links

- **[Papers](/papers/)**
- **[Code Repositories](https://github.com/yongkyung-oh/Stable-Neural-SDEs/tree/main/tutorial)**
- **[Tutorials](https://drive.google.com/drive/folders/1lJz6m7L01r5r-1vZCBtVffElc0_rkkOl?usp=sharing)**
- **[Slides & Figures](https://drive.google.com/drive/folders/16MXo3gMfk148Rx3XfDFFhc-Dy3TvHvhf?usp=sharing)**

---

_Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}_
