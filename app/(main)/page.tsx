import { postFiles } from "@/lib/posts";
import { PostCard } from "./post-card";

export default async function Home() {
  const posts = await postFiles.listOrdered((a, b) => {
    return a.metadata.date > b.metadata.date ? -1 : 1;
  });

  return (
    <main className="dark:bg-bg-dark bg-bg-light flex flex-col place-items-center mt-16">
      {posts.map((post) => (
        <PostCard key={post.metadata.slug} post={post.metadata} />
      ))}
    </main>
  );
}
