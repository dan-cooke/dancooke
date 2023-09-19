import clsx from "clsx";
import Link from "next/link";

export type TagProps = {
  children: string;
};
export function Tag({ children }: TagProps) {
  return (
    <span
      className={clsx(
        "bg-neutral-1-light dark:bg-neutral-1-dark",
        "text-text-secondary-light dark:text-text-secondary-dark",
        "px-4 py-1 rounded-md",
        "hover:bg-neutral-2-light dark:hover:bg-neutral-2-dark"
      )}
    >
      <Link href={`/posts?tag=${children}`}>{children}</Link>
    </span>
  );
}
