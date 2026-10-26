---
layout: about
permalink: /
title: About
description: "Neural differential equations for time series: surveys, tutorials, and code."
keywords: "neural differential equations, NODE, NCDE, NSDE, time series, continuous-time deep learning, irregular time series, NDE for TS"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nde-for-ts.github.io/#website",
      "name": "NDE for TS",
      "url": "https://nde-for-ts.github.io/",
      "description": "Hub for Neural Differential Equations (NODE, NCDE, NSDE) applied to time series analysis — tutorials, surveys, curated papers, and open-source code.",
      "inLanguage": "en"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://nde-for-ts.github.io/#hub",
      "name": "NDE for TS — Neural Differential Equations for Time Series",
      "url": "https://nde-for-ts.github.io/",
      "description": "A curated topic hub covering Neural Ordinary Differential Equations (NODEs), Neural Controlled Differential Equations (NCDEs), and Neural Stochastic Differential Equations (NSDEs) for continuous-time time series modeling.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://nde-for-ts.github.io/#website" },
      "about": {
        "@type": "Thing",
        "name": "Neural Differential Equations for Time Series"
      },
      "maintainer": {
        "@type": "Person",
        "name": "YongKyung Oh",
        "url": "https://yongkyung-oh.github.io/"
      }
    }
  ]
}
</script>

# **Neural Differential Equations for Time Series**

---

## Overview

Modeling complex and irregular time series is a key challenge in modern machine learning, especially when sampling is non-uniform or observations contain gaps or noise.
This website serves as a resource for both introductory and advanced topics on Neural Differential Equations (NDEs), including tutorials, surveys, and practical guides. It summarizes the main ideas of continuous-time modeling and outlines the major NDE families: Neural Ordinary Differential Equations (NODEs), Neural Controlled Differential Equations (NCDEs), and Neural Stochastic Differential Equations (NSDEs).

Beyond model design, the site discusses issues of robustness, stability, and reliability that often arise in practice. It also provides hands-on examples based on open-source implementations for tasks such as interpolation, representation learning, and classification. The goal is to help researchers and practitioners connect theory, algorithms, and practical workflows in continuous-time deep learning.

---

**Neural Differential Equations (NDEs)** model these signals in continuous time, enabling:

- Flexible handling of non-uniform sampling and missingness.
- Continuous latent dynamics that complement discrete-step sequence models.
- Integration of domain knowledge through the structure of differential equations.

**NDE for TS** curates:

- **Tutorials** explaining the mathematical foundations and practical implementation.
- **Surveys** of key papers, from the original NODE framework to recent NCDE/NSDE variants.
- **Code examples** using PyTorch, `torchcde`, and `torchsde`.
- **Applications** across healthcare, industry, finance, and science.

---

## Explore

<div class="row row-cols-1 row-cols-md-2 g-3">
  <div class="col mb-3">
    <a href="/tutorial/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">CIKM 2025 Tutorial</h4>
          <p class="card-text text-muted">From mathematical foundations to hands-on practice. Learning goals, content structure, and code examples.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/review/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">IJCAI 2025 Review</h4>
          <p class="card-text text-muted">IJCAI-25 survey covering theory and benchmarks for NODEs, NCDEs, and NSDEs.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/papers/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">Papers</h4>
          <p class="card-text text-muted">Curated collection of key papers in the NDE field. Search and filter supported.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/people/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">Contributors</h4>
          <p class="card-text text-muted">Profiles and affiliations of researchers involved in this project.</p>
        </div>
      </div>
    </a>
  </div>
</div>

---

## Contributors

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="Pusan National University" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://seungsukam.github.io/" img="assets/img/profiles/seungsu.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/jonghun.jpg" %}
  {% include people_horizontal.liquid name="Dong-Young Lim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/dongyoung.jpg" %}
  {% include people_horizontal.liquid name="Sungil Kim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/sungil.png" %}
  {% include people_horizontal.liquid name="Alex A. T. Bui" affiliation="University of California, Los Angeles (UCLA)" url="https://mii.ucla.edu/" img="assets/img/profiles/alex.jpg" %}
</div>

---

_Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}_
