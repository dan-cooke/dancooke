import { TagRow } from "@/app/components/tag-row";
import { formatDistance } from "@/lib/date";
import { jobFiles } from "@/lib/jobs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type JobPostProps = {
  params: { slug: string };
};
export default async function JobPost({ params }: JobPostProps) {
  const post = await jobFiles.get(params.slug);
  return (
    <div className="flex flex-col">
      <section className="mb-8">
        <div className="flex gap-8 mb-8">
          <div className="relative w-32 h-32 rounded-full">
            <Image
              src={post.metadata.logoUrl}
              alt={post.metadata.company}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-text-secondary-light dark:text-text-secondary-dark">
              {post.metadata.role}
            </h3>
            <h1 className="text-2xl md:text-6xl font-bold mb-5 text-text-primary dark:text-text-primary-dark">
              {post.metadata.company}
            </h1>
            <h3 className="text-text-secondary-light dark:text-text-secondary-dark">
              {formatDistance(post.metadata.startDate, post.metadata.endDate)}
            </h3>
          </div>
        </div>
        <TagRow tags={post.metadata.skills} />
      </section>
      <article className="prose lg:prose-xl dark:prose-invert prose-main">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
export async function generateStaticParams() {
  const slugs = await jobFiles.getSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
