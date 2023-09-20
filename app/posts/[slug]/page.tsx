import { TagRow } from "@/app/components/tag-row";
import { postFiles } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type BlogPostProps = {
  params: { slug: string };
};
export default async function BlogPost({ params }: BlogPostProps) {
  const post = await postFiles.get(params.slug);
  return (
    <div className="flex flex-col">
      <section className="mb-8">
        <h1 className="text-2xl md:text-6xl font-bold mb-5 text-text-primary dark:text-text-primary-dark">
          {post.metadata.title}
        </h1>
        <TagRow tags={post.metadata.tags} />
      </section>
      <article className="prose lg:prose-xl dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
export async function generateStaticParams() {
  const slugs = await postFiles.getSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
