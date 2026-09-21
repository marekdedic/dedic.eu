import type { BlogPostMeta } from "$lib/types/BlogPostSpec";

export const _meta: BlogPostMeta = {
  date: new Date("2026-03-06"),
  description:
    "Benchmarking five hyperparameter optimization methods for graph neural networks across nine datasets, and a meta-learning approach that transfers tuning knowledge between them to warm-start the search.",
  ogType: "article",
  tags: ["meta-learning", "GNNs", "research"],
  title:
    "hyperparameter optimization for graph neural networks with transfer learning",
};

export const load = (): {
  description: string;
  ogType: "article";
  title: string;
} => ({
  description: _meta.description,
  ogType: _meta.ogType,
  title: _meta.title,
});
