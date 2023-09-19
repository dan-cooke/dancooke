export type Post = {
  metadata: PostMetadata;
  content: string;
};
export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: PostTag[];
};
export type PostTag = {
  label: string;
  slug: string;
};
