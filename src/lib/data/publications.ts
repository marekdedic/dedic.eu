import type { PublicationSpec } from "$lib/types/PublicationSpec";

import borisovExperimental2021Bib from "./bib/borisov_experimental_2021.bib?raw";
import dedicAdaptive2022Bib from "./bib/dedic_adaptive_2022.bib?raw";
import dedicBalancing2024Bib from "./bib/dedic_balancing_2024.bib?raw";
import dedicBenchmarking2026Bib from "./bib/dedic_benchmarking_2026.bib?raw";
import dedicHierarchicke2017Bib from "./bib/dedic_hierarchicke_2017.bib?raw";
import dedicLoss2020Bib from "./bib/dedic_loss_2020.bib?raw";
import dedicOptimalization2020Bib from "./bib/dedic_optimalization_2020.bib?raw";
import dedicTowards2026Bib from "./bib/dedic_towards_2026.bib?raw";
import pevnyNested2020Bib from "./bib/pevny_nested_2020.bib?raw";
import prochazkaConvolutional2024Bib from "./bib/prochazka_convolutional_2024.bib?raw";
import prochazkaScalable2022Bib from "./bib/prochazka_scalable_2022.bib?raw";
import prochazkaWhich2023Bib from "./bib/prochazka_which_2023.bib?raw";

export const publications: Array<PublicationSpec> = [
  {
    abstract:
      "Automatický klasifikátor rozpoznávající aktivity malware na úrovni síťových spojení za pomoci multi-instančního učení.",
    authors: ["Marek Dědič"],
    bib: dedicHierarchicke2017Bib,
    date: new Date("2017-08-30"),
    id: "dedic_hierarchicke_2017",
    paperPdf: "publications/papers/dedic_hierarchicke_2017.pdf",
    previewImage:
      "/images/publication-preview-images/dedic_hierarchicke_2017.png",
    tags: ["Thesis"],
    title: "Hierarchické modely síťového provozu",
  },
  {
    abstract:
      "Multi-instance clustering using contrastive predictive coding, triplet and magnet loss.",
    authors: ["Marek Dědič"],
    bib: dedicOptimalization2020Bib,
    date: new Date("2020-01-07"),
    id: "dedic_optimalization_2020",
    paperPdf: "publications/papers/dedic_optimalization_2020.pdf",
    previewImage:
      "/images/publication-preview-images/dedic_optimalization_2020.png",
    tags: ["Thesis"],
    title: "Optimalization of distances for multi-instance clustering",
  },
  {
    abstract:
      "Identification of infected computers in the computer network from their HTTP traffic using recent progress in multiple-instance learning.",
    authors: ["Tomas Pevny", "Marek Dedic"],
    bib: pevnyNested2020Bib,
    date: new Date("2020-02-10"),
    id: "pevny_nested_2020",
    paperPdf: "publications/papers/pevny_nested_2020.pdf",
    previewImage: "/images/publication-preview-images/pevny_nested_2020.png",
    tags: ["arXiv"],
    title:
      "Nested Multiple Instance Learning in Modelling of HTTP network traffic",
  },
  {
    abstract:
      "Multi-instance clustering using contrastive predictive coding, triplet and magnet loss.",
    authors: ["Marek Dědič", "Tomáš Pevný", "Lukáš Bajer", "Martin Holeňa"],
    bib: dedicLoss2020Bib,
    date: new Date("2020-10-30"),
    id: "dedic_loss_2020",
    paperPdf: "publications/papers/dedic_loss_2020.pdf",
    previewImage: "/images/publication-preview-images/dedic_loss_2020.png",
    tags: ["ITAT"],
    title: "Loss Functions for Clustering in Multi-instance Learning",
  },
  {
    abstract:
      "An experimental comparison of four variants of 1-GNN and GIN from the point of view of graph representation for downstream classification.",
    authors: ["Sergej Borisov", "Marek Dědič", "Martin Holeňa"],
    bib: borisovExperimental2021Bib,
    date: new Date("2021-10-02"),
    id: "borisov_experimental_2021",
    paperPdf: "publications/papers/borisov_experimental_2021.pdf",
    tags: ["ITAT"],
    title:
      "Experimental Investigation of Neural and Weisfeiler-Lehman-Kernel Graph Representations for Downstream Classification",
  },
  {
    abstract:
      "A method for studying graph properties from the point of view of a downstream task.",
    authors: [
      "Marek Dědič",
      "Lukáš Bajer",
      "Jakub Repický",
      "Pavel Procházka",
      "Martin Holeňa",
    ],
    bib: dedicAdaptive2022Bib,
    date: new Date("2022-09-29"),
    id: "dedic_adaptive_2022",
    paperPdf: "publications/papers/dedic_adaptive_2022.pdf",
    previewImage: "/images/publication-preview-images/dedic_adaptive_2022.png",
    tags: ["Graph Quality", "ECML"],
    title: "Adaptive graph coarsening in the context of local graph quality",
  },
  {
    abstract:
      "A simple scalable task-aware graph preprocessing procedure allowing us to obtain a reduced graph such that a GNN achieves a given desired performance on a given downstream task.",
    authors: ["Pavel Procházka", "Michal Mareš", "Marek Dědič"],
    bib: prochazkaScalable2022Bib,
    date: new Date("2022-09-30"),
    id: "prochazka_scalable_2022",
    paperPdf: "publications/papers/prochazka_scalable_2022.pdf",
    previewImage:
      "/images/publication-preview-images/prochazka_scalable_2022.png",
    tags: ["ITAT"],
    title: "Scalable Graph Size Reduction for Efficient GNN Application",
  },
  {
    abstract:
      "A methodical way of linking graph properties with the performance of a GNN solving a given task on such graph via a surrogate regression model that is trained to predict the performance of the GNN from the properties of the graph dataset.",
    authors: ["Pavel Procházka", "Michal Mareš", "Marek Dědič"],
    bib: prochazkaWhich2023Bib,
    date: new Date("2023-10-07"),
    id: "prochazka_which_2023",
    paperPdf: "publications/papers/prochazka_which_2023.pdf",
    previewImage: "/images/publication-preview-images/prochazka_which_2023.png",
    tags: ["ITAT"],
    title:
      "Which Graph Properties Affect GNN Performance for a Given Downstream Task?",
  },
  {
    abstract:
      "A method for node classification that allows a user to precisely select the resolution at which the graph in question should be pretrained.",
    authors: ["Marek Dědič", "Lukas Bajer", "Pavel Prochazka", "Martin Holena"],
    bib: dedicBalancing2024Bib,
    date: new Date("2024-05-11"),
    id: "dedic_balancing_2024",
    paperPdf: "publications/papers/dedic_balancing_2024.pdf",
    previewImage: "/images/publication-preview-images/dedic_balancing_2024.png",
    tags: ["ICLR"],
    title:
      "Balancing performance and complexity with adaptive graph coarsening",
  },
  {
    abstract:
      "A simple, scalable and efficient baseline algorithm for classification and retrieval in hypergraphs, based on non-parametric convolution.",
    authors: ["Pavel Procházka", "Marek Dědič", "Lukáš Bajer"],
    bib: prochazkaConvolutional2024Bib,
    date: new Date("2024-09-09"),
    id: "prochazka_convolutional_2024",
    paperPdf: "publications/papers/prochazka_convolutional_2024.pdf",
    previewImage:
      "/images/publication-preview-images/prochazka_convolutional_2024.png",
    tags: ["MLG", "ECML"],
    title:
      "Convolutional Signal Propagation: A Simple Scalable Algorithm for Hypergraphs",
  },
  {
    abstract:
      "A benchmark of hyperparameter optimization algorithms on graph neural networks and a novel, dataset-property-informed hyperparameter optimization algorithm for graph learning.",
    authors: ["Marek Dědič", "Michal Bělohlávek"],
    bib: dedicBenchmarking2026Bib,
    blogpostUrl:
      "/blog/hyperparameter-optimization-for-gnns-with-transfer-learning",
    date: new Date("2026-03-08"),
    id: "dedic_benchmarking_2026",
    paperPdf: "publications/papers/dedic_benchmarking_2026.pdf",
    posterPdf: "publications/posters/dedic_benchmarking_2026.pdf",
    previewImage:
      "/images/publication-preview-images/dedic_benchmarking_2026.png",
    tags: ["ICAART", "COSEAL", "MLG", "ECML"],
    title:
      "Benchmarking and Transfer Learning for Hyperparameter Optimization of Graph Neural Networks",
  },
  {
    abstract:
      "An exploration of the viability of using synthetic datasets for pretraining of hyper-parameter optimization for graph learning.",
    authors: ["Marek Dědič", "Martin Holeňa"],
    bib: dedicTowards2026Bib,
    id: "dedic_towards_2026",
    paperPdf: "publications/papers/dedic_towards_2026.pdf",
    tags: ["ITAT"],
    title:
      "Towards Synthetic Data Pretraining for Hyperparameter Optimization in Graph Learning",
  },
];
