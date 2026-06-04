# NDE for TS — Neural Differential Equations for Time Series

[![Website](https://img.shields.io/badge/Website-nde--for--ts.github.io-2A4B8D)](https://nde-for-ts.github.io)
[![IJCAI 2025](https://img.shields.io/badge/IJCAI-2025-B23A48)](https://doi.org/10.24963/ijcai.2025/1179)
[![arXiv](https://img.shields.io/badge/arXiv-2502.09885-b31b1b)](https://arxiv.org/abs/2502.09885)
[![Built with al-folio](https://img.shields.io/badge/Built%20with-al--folio-2F8F6F)](https://github.com/alshedivat/al-folio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

> **TL;DR** — A reference hub for **Neural Differential Equations (NDEs) for time series**: theory, surveys, hands-on tutorials, and runnable code for the three NDE families — Neural Ordinary (**NODE**), Controlled (**NCDE**), and Stochastic (**NSDE**) Differential Equations.

Live site: **<https://nde-for-ts.github.io>**

Modeling complex, irregularly sampled time series — with gaps, noise, and non-uniform timestamps — is a core challenge in modern machine learning. NDEs combine neural networks with differential-equation dynamics to model such signals in **continuous time**. This site connects theory, algorithms, and practical workflows for researchers and practitioners working with continuous-time deep learning.

## What's inside

| Section                                            | Description                                                                                                                                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Review](https://nde-for-ts.github.io/review/)     | The IJCAI-25 survey _Comprehensive Review of Neural Differential Equations for Time Series Analysis_ — formulations, numerical methods, theory, and benchmarks for NODEs, NCDEs, and NSDEs. |
| [Tutorial](https://nde-for-ts.github.io/tutorial/) | CIKM 2025 tutorial — from mathematical foundations to a hands-on session with `torchcde` / `torchsde`, including Colab-ready notebooks.                                                     |
| [Papers](https://nde-for-ts.github.io/papers/)     | A curated, searchable bibliography of NDE papers, tagged by family (NODEs / NCDEs / NSDEs / Related).                                                                                       |
| [People](https://nde-for-ts.github.io/people/)     | Contributors and affiliations.                                                                                                                                                              |

## Featured publication

**Comprehensive Review of Neural Differential Equations for Time Series Analysis** — YongKyung Oh, Seungsu Kam, Jonghun Lee, Dong-Young Lim, Sungil Kim, Alex A. T. Bui. _Proceedings of the 34th International Joint Conference on Artificial Intelligence (IJCAI-25)_, pp. 10621–10631, 2025.

A structured synthesis of the NDE field for time series: foundational models (NODEs/NCDEs/NSDEs), theoretical underpinnings (universal approximation, existence/uniqueness, stability), practical implementation (adjoint method, regularization, solver choice), and a consolidated benchmark summary across interpolation, forecasting, and classification.

- Paper (DOI): <https://doi.org/10.24963/ijcai.2025/1179>
- Preprint: [arXiv:2502.09885](https://arxiv.org/abs/2502.09885)

If you use this resource or the survey, please cite the published version:

```bibtex
@inproceedings{oh_comprehensive_2025,
  title     = {Comprehensive Review of Neural Differential Equations for Time Series Analysis},
  author    = {Oh, YongKyung and Kam, Seungsu and Lee, Jonghun and Lim, Dong-Young and Kim, Sungil and Bui, Alex A. T.},
  editor    = {Kwok, James},
  booktitle = {Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence, IJCAI-25},
  pages     = {10621--10631},
  year      = {2025},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  doi       = {10.24963/ijcai.2025/1179}
}
```

Preprint version:

```bibtex
@misc{oh_comprehensive_2025_arxiv,
  title         = {Comprehensive Review of Neural Differential Equations for Time Series Analysis},
  author        = {Oh, YongKyung and Kam, Seungsu and Lee, Jonghun and Lim, Dong-Young and Kim, Sungil and Bui, Alex A. T.},
  year          = {2025},
  eprint        = {2502.09885},
  archivePrefix = {arXiv},
  primaryClass  = {cs.LG},
  publisher     = {arXiv}
}
```

## Contributors

| Name                                                  | Affiliation                                                |
| ----------------------------------------------------- | ---------------------------------------------------------- |
| [YongKyung Oh](https://yongkyung-oh.github.io/)       | University of California, Los Angeles (UCLA)               |
| [Seungsu Kam](https://seungsukam.github.io/)          | Ulsan National Institute of Science and Technology (UNIST) |
| [Jonghun Lee](https://sites.google.com/view/dlim/)    | Ulsan National Institute of Science and Technology (UNIST) |
| [Dong-Young Lim](https://sites.google.com/view/dlim/) | Ulsan National Institute of Science and Technology (UNIST) |
| [Sungil Kim](https://analytics.unist.ac.kr/)          | Ulsan National Institute of Science and Technology (UNIST) |
| [Alex A. T. Bui](https://mii.ucla.edu/)               | University of California, Los Angeles (UCLA)               |

Maintained by [YongKyung Oh](https://yongkyung-oh.github.io/).

## Acknowledgements & License

Built on the [al-folio](https://github.com/alshedivat/al-folio) theme. The site code is released under the [MIT License](LICENSE); curated paper metadata and survey content belong to their respective authors and publishers.
