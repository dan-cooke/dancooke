import { getPost, getPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

type BlogPostProps = {
  params: { slug: string };
};
export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug);
  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown>{post}</ReactMarkdown>
    </article>
  );
}
export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}
