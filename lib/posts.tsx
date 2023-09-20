import { MarkdownDirectory } from "./md";
import { PostMetadata } from "./types";

export const postFiles = new MarkdownDirectory<PostMetadata>("posts");
