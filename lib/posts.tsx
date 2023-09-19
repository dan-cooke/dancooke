import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Post } from "./types";

export async function getPostSlugs() {
  const files = await fs.readdir(path.join(process.cwd(), "posts"), {
    encoding: "utf8",
  });
  return files.map((file) => file.replace(/\.md$/, ""));
}

export async function getOrderedPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPost(slug);
      return { slug, post };
    })
  );
  return posts.sort((a, b) => {
    return (
      new Date(b.post.metadata.date).getTime() -
      new Date(a.post.metadata.date).getTime()
    );
  });
}

/**
 * Posts are stored in the `posts` directory.
 * They will use frontmatter to store metadata.
 * So we will need to parse the frontmatter and the content.
 * */
export async function getPost(slug: string): Promise<Post> {
  const validSlugRegex = /^[a-z0-9-]+$/;

  // Protect against directory traversal
  if (!validSlugRegex.test(slug)) {
    notFound();
  }

  try {
    const file = await fs.readFile(
      path.join(process.cwd(), "posts", `${slug}.md`),
      {
        encoding: "utf8",
      }
    );

    const { content, data } = matter(file);

    // Proably a better way to do this
    return { content, metadata: data } as Post;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
