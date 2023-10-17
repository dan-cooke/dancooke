import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Mattered } from "./types";

// This is a generic util for readnig markdown files from
// a specified dir
export class MarkdownDirectory<T> {
  private dir: string;

  /**
   * @param dir The directory to read markdown files from, relativve to project root
   * */
  constructor(dir: string) {
    this.dir = dir;
  }

  async getSlugs() {
    const files = await fs.readdir(path.join(process.cwd(), this.dir), {
      encoding: "utf8",
    });
    return files.map((file) => file.replace(/\.md$/, ""));
  }

  async listOrdered(sortFn: (a: Mattered<T>, b: Mattered<T>) => number) {
    const slugs = await this.getSlugs();
    const files = await Promise.all(slugs.map(async (slug) => this.get(slug)));
    return files.sort(sortFn);
  }

  /**
   * Posts are stored in the `posts` directory.
   * They will use frontmatter to store metadata.
   * So we will need to parse the frontmatter and the content.
   * */
  async get(slug: string): Promise<Mattered<T>> {
    const validSlugRegex = /^[a-z0-9-]+$/;

    // Protect against directory traversal
    if (!validSlugRegex.test(slug)) {
      notFound();
    }

    try {
      const file = await fs.readFile(
        path.join(process.cwd(), this.dir, `${slug}.md`),
        {
          encoding: "utf8",
        },
      );

      const { content, data } = matter(file);

      // extract the PREVIEW_END markers and put it into content preview

      // Proably a better way to do this
      return {
        content: content.replace("<!-- PREVIEW_END -->", ""),
        contentPreview: content.split("<!-- PREVIEW_END -->")[0],
        metadata: {
          ...data,
          slug,
        },
      } as Mattered<T>;
    } catch (e) {
      console.error(e);
      notFound();
    }
  }
}
