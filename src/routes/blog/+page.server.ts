import type { BlogPostSpec } from "$lib/types/BlogPostSpec";

import { blogPosts } from "$lib/data/blog";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  description: string;
  posts: Array<BlogPostSpec>;
  title: string;
}> = () => ({
  description:
    "Blog posts by Marek Dědič on graph neural networks, machine learning research, and related topics.",
  posts: blogPosts,
  title: "Blog",
});
