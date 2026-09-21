import type { BlogPostMeta, BlogPostSpec } from "$lib/types/BlogPostSpec";

const postMetas = import.meta.glob<BlogPostMeta>(
  "/src/routes/blog/*/+page.ts",
  { eager: true, import: "_meta" },
);

const postRe = /^\/src\/routes\/blog\/([^/]+)\/\+page\.ts$/u;

function buildBlogSpec(): Array<BlogPostSpec> {
  return Object.entries(postMetas)
    .flatMap(([path, meta]): Array<BlogPostSpec> => {
      const match = postRe.exec(path);
      if (match === null) {
        return [];
      }
      const [, slug] = match;
      return [{ ...meta, slug }];
    })
    .sort((left, right) => right.date.getTime() - left.date.getTime());
}

export const blogPosts: Array<BlogPostSpec> = buildBlogSpec();
