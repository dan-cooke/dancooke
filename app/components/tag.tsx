import { PostTag } from "@/lib/types";
import Link from "next/link";

export type TagProps = {
  tag: PostTag;
};
export function Tag({ tag }: TagProps) {
  return (
    <span>
      <Link href={`/posts?tag=${tag.slug}`}>{tag.label}</Link>
    </span>
  );
}
