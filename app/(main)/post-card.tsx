import { TagRow } from "../components/tag-row";
import Link from "next/link";
import clsx from "clsx";
import { formatDate } from "@/lib/date";
import { PostMetadata } from "@/lib/types";

export type PostCardProps = {
  post: PostMetadata;
};
export function PostCard({ post }: PostCardProps) {
  return (
    <div className={clsx("flex flex-col gap-2")}>
      <Link
        href={`/posts/${post.slug}`}
        className={clsx("transition-all", "group")}
      >
        <span className="text-text-secondary-light dark:text-text-secondary-dark">
          {formatDate(post.date)}
        </span>
        <h3
          className={clsx(
            "text-2xl font-bold group-hover:underline group-hover:text-primary-dark group-hover:text-primary dark:text-text-primary-dark  text-text-primary-light ",
            "dark:text-text-primary dark:text-primary-dark dark:text-primary-dark-dark",
          )}
        >
          {post.title}
        </h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-ellipsis line-clamp-2 mb-4">
          {post.description}
        </p>
      </Link>
      <TagRow tags={post.tags} />
      <div className="bg-neutral-1-light dark:bg-neutral-1-dark h-[1px] w-full my-8" />
    </div>
  );
}
