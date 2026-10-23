---
layout: about
permalink: /review/
title: Review
description: "IJCAI-25 survey: Comprehensive Review of Neural Differential Equations for Time Series Analysis — NODEs, NCDEs, NSDEs, benchmarks, DOI 10.24963/ijcai.2025/1179."
keywords: "neural differential equations, NODE, NCDE, NSDE, time series survey, IJCAI 2025, continuous-time modeling, NDE review"
nav: true
nav_order: 2
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": "https://doi.org/10.24963/ijcai.2025/1179",
  "headline": "Comprehensive Review of Neural Differential Equations for Time Series Analysis",
  "name": "Comprehensive Review of Neural Differential Equations for Time Series Analysis",
  "about": "Neural Differential Equations (NODE, NCDE, NSDE) for time series analysis",
  "url": "https://nde-for-ts.github.io/review/",
  "sameAs": ["https://arxiv.org/abs/2502.09885"],
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "DOI",
    "value": "10.24963/ijcai.2025/1179",
    "@id": "https://doi.org/10.24963/ijcai.2025/1179"
  },
  "datePublished": "2025",
  "pagination": "10621-10631",
  "author": [
    { "@type": "Person", "name": "YongKyung Oh" },
    { "@type": "Person", "name": "Seungsu Kam", "url": "https://seungsukam.github.io/" },
    { "@type": "Person", "name": "Jonghun Lee" },
    { "@type": "Person", "name": "Dong-Young Lim" },
    { "@type": "Person", "name": "Sungil Kim" },
    { "@type": "Person", "name": "Alex A. T. Bui" }
  ],
  "editor": { "@type": "Person", "name": "James Kwok" },
  "publisher": {
    "@type": "Organization",
    "name": "International Joint Conferences on Artificial Intelligence Organization"
  },
  "isPartOf": {
    "@type": "Book",
    "name": "Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence, IJCAI-25"
  },
  "inLanguage": "en"
}
</script>

# **Comprehensive Review of Neural Differential Equations for Time Series Analysis**

> Oh, Y., Kam, S., Lee, J., Lim, D.-Y., Kim, S., & Bui, A. A. T. (2025). Comprehensive Review of Neural Differential Equations for Time Series Analysis. In J. Kwok (Ed.), Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence, IJCAI-25 (pp. 10621–10631). International Joint Conferences on Artificial Intelligence Organization. https://doi.org/10.24963/ijcai.2025/1179 [[paper]](https://arxiv.org/abs/2502.09885)

---

## Overview

Time series modeling often involves non-uniform sampling, missing observations, and continuous dynamics that are awkward for purely discrete-time models. Neural Differential Equations (NDEs) combine neural networks with differential-equation dynamics for continuous-time modeling. This paper reviews NDE-based methods for time series analysis, including neural ordinary differential equations, neural controlled differential equations, and neural stochastic differential equations. It summarizes mathematical formulations, numerical methods, applications, key challenges, and future research directions.

This survey provides a comprehensive review of NDE-based methods for time series analysis, covering the three core families:

- **Neural Ordinary Differential Equations (NODEs)**
- **Neural Controlled Differential Equations (NCDEs)**
- **Neural Stochastic Differential Equations (NSDEs)**

The survey discusses mathematical formulations, numerical methods, and applications, with an emphasis on how these methods model continuous-time dynamics in time-series settings.

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
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" note="Now at Pusan National University" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://seungsukam.github.io/" img="assets/img/profiles/seungsu.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/jonghun.jpg" %}
  {% include people_horizontal.liquid name="Dong-Young Lim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/dongyoung.jpg" %}
  {% include people_horizontal.liquid name="Sungil Kim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/sungil.png" %}
  {% include people_horizontal.liquid name="Alex A. T. Bui" affiliation="University of California, Los Angeles (UCLA)" url="https://mii.ucla.edu/" img="assets/img/profiles/alex.jpg" %}
</div>

---

## Quick Links

- **[Foundational Papers](/papers/)**
- **[Code Repositories](https://github.com/yongkyung-oh/Stable-Neural-SDEs/tree/main/tutorial)**
- **[Tutorials](https://drive.google.com/drive/folders/1lJz6m7L01r5r-1vZCBtVffElc0_rkkOl?usp=sharing)**
- **[Slides & Figures](https://drive.google.com/drive/folders/16MXo3gMfk148Rx3XfDFFhc-Dy3TvHvhf?usp=sharing)**

---

_Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}_
