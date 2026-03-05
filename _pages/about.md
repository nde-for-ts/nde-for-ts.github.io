---
layout: about
permalink: /
title: About
description: Neural Differential Equations for Continuous-Time Analysis tutorial. A comprehensive review of the theory and practical application of the entire NDE family.

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
          <p class="card-text text-muted">Comprehensive survey published at IJCAI-25. Theory and benchmarks for NODEs, NCDEs, and NSDEs.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="/papers/" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h4 class="card-title">Foundational Papers</h4>
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
  {% include people_horizontal.liquid name="YongKyung Oh" affiliation="University of California, Los Angeles (UCLA)" url="https://yongkyung-oh.github.io/" img="assets/img/profiles/yongkyung.jpg" %}
  {% include people_horizontal.liquid name="Seungsu Kam" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/seungsu.jpg" %}
  {% include people_horizontal.liquid name="Jonghun Lee" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/jonghun.jpg" %}
  {% include people_horizontal.liquid name="Dong-Young Lim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://sites.google.com/view/dlim/" img="assets/img/profiles/dongyoung.jpg" %}
  {% include people_horizontal.liquid name="Sungil Kim" affiliation="Ulsan National Institute of Science and Technology (UNIST)" url="https://analytics.unist.ac.kr/" img="assets/img/profiles/sungil.png" %}
  {% include people_horizontal.liquid name="Alex A. T. Bui" affiliation="University of California, Los Angeles (UCLA)" url="https://mii.ucla.edu/" img="assets/img/profiles/alex.jpg" %}
</div>

---

*Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/) — Last updated: {{ site.time | date: "%b %Y" }}*
