---
layout: about
permalink: /
title: About
keywords: "neural differential equations, NODE, NCDE, NSDE, continuous-time dynamics, irregular time series, generative modeling"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nde-for-ts.github.io/#website",
      "name": {{ site.title | jsonify }},
      "url": "https://nde-for-ts.github.io/",
      "description": {{ site.description | jsonify }},
      "inLanguage": "en"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://nde-for-ts.github.io/#hub",
      "name": {{ site.title | jsonify }},
      "url": "https://nde-for-ts.github.io/",
      "description": "Tutorials and research on neural ordinary, controlled, and stochastic differential equations.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://nde-for-ts.github.io/#website" },
      "about": {
        "@type": "Thing",
        "name": "Neural differential equations"
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

## Overview

Neural differential equations model how systems evolve in continuous time. The tutorials cover neural ODEs, CDEs, and SDEs through examples of irregularly observed data, physical dynamics, and generative modeling.

---

## Tutorials

<div class="row row-cols-1 row-cols-md-2 g-3">
  <div class="col mb-3">
    <a href="{{ '/ksc-2026/' | relative_url }}" aria-labelledby="ksc-tutorial-title" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h3 id="ksc-tutorial-title" class="card-title h4">KSC 2026 Tutorial</h3>
          <p class="card-text text-muted">Continuous-time modeling, irregular observations, and generative models.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="{{ '/cikm-2025/' | relative_url }}" aria-labelledby="cikm-tutorial-title" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h3 id="cikm-tutorial-title" class="card-title h4">CIKM 2025 Tutorial</h3>
          <p class="card-text text-muted">Neural differential equations for irregular time series.</p>
        </div>
      </div>
    </a>
  </div>
</div>

---

## Literature

<div class="row row-cols-1 row-cols-md-2 g-3">
  <div class="col mb-3">
    <a href="{{ '/ijcai-2025/' | relative_url }}" aria-labelledby="ijcai-review-title" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h3 id="ijcai-review-title" class="card-title h4">IJCAI 2025 Review</h3>
          <p class="card-text text-muted">Theory and benchmark results for NODEs, NCDEs, and NSDEs.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col mb-3">
    <a href="{{ '/papers/' | relative_url }}" aria-labelledby="papers-title" style="text-decoration: none; color: inherit;">
      <div class="card h-100 hoverable border">
        <div class="card-body">
          <h3 id="papers-title" class="card-title h4">Papers</h3>
          <p class="card-text text-muted">From the original NODE framework to recent NCDE and NSDE variants, including applications in healthcare, industry, finance, and science.</p>
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
