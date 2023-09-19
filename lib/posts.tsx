import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

export async function getPostSlugs() {
  const files = await fs.readdir(path.join(process.cwd(), "posts"), {
    encoding: "utf8",
  });
  return files.map((file) => file.replace(/\.md$/, ""));
}

export async function getPost(slug: string) {
  const validSlugRegex = /^[a-z0-9-]+$/;

  // Protect against directory traversal
  if (!validSlugRegex.test(slug)) {
    notFound();
  }

  try {
    return await fs.readFile(path.join(process.cwd(), "posts", `${slug}.md`), {
      encoding: "utf8",
    });
  } catch (e) {
    console.log(e);
    notFound();
  }
}
