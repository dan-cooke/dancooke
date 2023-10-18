import { formatDistance } from "@/lib/date";
import { JobMetadata, Mattered } from "@/lib/types";
import Image from "next/image";
import { TagRow } from "../components/tag-row";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "../components/button";
import { BiSolidChevronRight } from "react-icons/bi";
import ReactMarkdown from "react-markdown";

export type JobCardProps = {
  job: Mattered<JobMetadata>;
};
export function JobCard({ job }: JobCardProps) {
  return (
    <div className="flex flex-col">
      <section className="mb-8">
        <div className="flex gap-8 mb-8">
          <div className="relative w-16 h-16 lg:w-32 lg:h-32 rounded-full">
            <Image
              src={job.metadata.logoUrl}
              alt={job.metadata.company}
              fill
              className="rounded-xl object-fill aspect-square"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-text-secondary-light dark:text-text-secondary-dark">
              {job.metadata.role}
            </h3>
            <h1 className="text-2xl md:text-4xl font-bold mb-5 text-text-primary dark:text-text-primary-dark">
              {job.metadata.company}
            </h1>
            <h3 className="text-text-secondary-light dark:text-text-secondary-dark">
              {formatDistance(job.metadata.startDate, job.metadata.endDate)}
            </h3>
          </div>
        </div>
        <TagRow tags={job.metadata.skills} />
      </section>

      <section
        className={clsx(
          "prose md:prose-lg lg:prose-xl dark:prose-invert prose-main",
        )}
      >
        <ReactMarkdown>{job.contentPreview}</ReactMarkdown>
      </section>
      <Button className="py-3 ml-auto print:hidden">
        <Link
          href={`/jobs/${job.metadata.slug}`}
          className="flex place-items-center place-content-end"
        >
          Read More <BiSolidChevronRight />
        </Link>
      </Button>
    </div>
  );
}
