import type { BlogPostSpec } from "#lib/types/BlogPostSpec.js";

import { blogPosts } from "#lib/data/blog.js";

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
