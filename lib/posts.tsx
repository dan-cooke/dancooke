import fs from "fs/promises";
import path from "path";

export async function getPostSlugs() {
  const files = await fs.readdir(path.join(process.cwd(), "posts"), {
    encoding: "utf8",
  });
  return files.map((file) => file.replace(/\.md$/, ""));
}
