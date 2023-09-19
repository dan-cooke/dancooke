import { Tag } from "@/app/components/tag";
import { getPost, getPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type BlogPostProps = {
  params: { slug: string };
};
export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug);
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">{post.metadata.title}</h1>
      <div className="flex flex-row">
        {post.metadata.tags?.map((tag) => (
          <Tag key={tag.slug} tag={tag} />
        ))}
      </div>
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}
