import { TagRow } from "@/app/components/tag-row";
import { getPost, getPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type BlogPostProps = {
  params: { slug: string };
};
export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug);
  return (
    <div className="flex flex-col">
      <section className="mb-8">
        <h1 className="text-2xl md:text-6xl font-bold mb-5">
          {post.metadata.title}
        </h1>
        <TagRow tags={post.metadata.tags} />
      </section>
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}
