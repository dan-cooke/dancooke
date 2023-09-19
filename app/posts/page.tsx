import { getOrderedPosts } from "@/lib/posts";
import { PostCard } from "../(main)/post-card";

export default async function Posts() {
  const posts = await getOrderedPosts();
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.metadata.slug} post={post} />
      ))}
    </div>
  );
}
