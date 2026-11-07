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

Time series are often sampled at non-uniform intervals, and observations can contain gaps or noise. Neural Differential Equations (NDEs) model such data in continuous time, which lets them handle uneven sampling and missing values. Their continuous latent dynamics complement discrete-step sequence models, and domain knowledge can be built into the structure of the differential equation.

The main NDE families are Neural Ordinary Differential Equations (NODEs), Neural Controlled Differential Equations (NCDEs), and Neural Stochastic Differential Equations (NSDEs). Code examples use PyTorch, `torchcde`, and `torchsde` for tasks such as interpolation, representation learning, and classification.

---

<div class="row row-cols-1 row-cols-md-2 g-3">
  <div class="col mb-3">
    <a href="/tutorial/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">CIKM 2025 Tutorial</h4>
          <p class="card-text text-muted">Mathematical foundations and hands-on implementation, with attention to robustness and stability.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/review/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">IJCAI 2025 Review</h4>
          <p class="card-text text-muted">Theory and benchmark results for NODEs, NCDEs, and NSDEs.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/papers/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">Papers</h4>
          <p class="card-text text-muted">From the original NODE framework to recent NCDE and NSDE variants, including applications in healthcare, industry, finance, and science.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/people/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">Contributors</h4>
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

_Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/). Last updated: {{ site.time | date: "%b %Y" }}_
