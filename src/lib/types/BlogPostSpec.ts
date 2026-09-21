// Per-post metadata co-located with each post's route folder
// (`blog/<slug>/+page.ts`), exported as `meta`.
export interface BlogPostMeta {
  date: Date;
  description: string;
  ogType: "article";
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}

export interface BlogPostSpec extends BlogPostMeta {
  slug: string;
}
