import { PostCard } from "../(main)/post-card";
import { postFiles } from "@/lib/posts";

export default async function Posts() {
  const posts = await postFiles.listOrdered((a, b) => {
    return a.metadata.date > b.metadata.date ? -1 : 1;
  });
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.metadata.slug} post={post.metadata} />
      ))}
    </div>
  );
}
