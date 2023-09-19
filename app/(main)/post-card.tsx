import { Post } from "@/lib/types";
import { TagRow } from "../components/tag-row";
import Link from "next/link";
import clsx from "clsx";
import { formatDate } from "@/lib/date";

export type PostCardProps = {
  post: Post;
};
export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.metadata.slug}`}
      className={clsx("flex flex-col gap-2", "transition-all", "group")}
    >
      <span className="text-text-secondary-light dark:text-text-secondary-dark">
        {formatDate(post.metadata.date)}
      </span>
      <h3 className="text-2xl font-bold group-hover:underline group-hover:text-primary">
        {post.metadata.title}
      </h3>
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-ellipsis line-clamp-2">
        {post.metadata.description}
      </p>
      <TagRow tags={post.metadata.tags} />
      <div className="bg-neutral-1-light dark:bg-neutral-1-dark h-[1px] w-full my-8" />
    </Link>
  );
}
