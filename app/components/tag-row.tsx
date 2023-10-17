import { Tag } from "./tag";

export type TagRowProps = {
  tags: string[];
};
export function TagRow({ tags }: TagRowProps) {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </div>
  );
}
