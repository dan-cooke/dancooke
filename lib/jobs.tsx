import { MarkdownDirectory } from "./md";
import { JobMetadata } from "./types";

export const jobFiles = new MarkdownDirectory<JobMetadata>("jobs");
