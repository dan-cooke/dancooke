export type Post = {
  metadata: PostMetadata;
  content: string;
};
export type PostMetadata = {
  title: string;
  description: string;
  date: Date;
  slug: string;
  tags: string[];
};
