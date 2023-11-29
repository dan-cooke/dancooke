import { jobFiles } from "@/lib/jobs";
import clsx from "clsx";
import { JobCard } from "./job-card";
import { SkillRadar } from "../components/skill-radar";

export default async function About() {
  const jobs = await jobFiles.listOrdered(
    (job1, job2) =>
      Number(job2.metadata.endDate) - Number(job1.metadata.endDate),
  );
  return (
    <>
      <div
        className={clsx(
          "flex flex-col  fade-in",
          "text-text-primary-light dark:text-text-primary-dark",
          "pt-8",
          "prose md:prose-lg lg:prose-xl dark:prose-invert prose-main print:prose-sm",
        )}
      >
        <h2 id="about">About me</h2>
        <p>
          I'm a software engineer from a small seaside town in Ireland. I've
          been writing computer programs for over 10 years now, my first
          language was{" "}
          <a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)">
            Pascal
          </a>
          , but throughout school and university I explored many different
          paradigms from{" "}
          <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">
            Java
          </a>{" "}
          to <a href="https://en.wikipedia.org/wiki/Prolog">Prolog</a> to{" "}
          <a href="https://en.wikipedia.org/wiki/X86_assembly_language">
            x86 Assembly
          </a>
          .
        </p>
        <p>
          My "professional" experience is in web development, I have been
          working in-depth with <a href="https://reactjs.org/">React</a>{" "}
          frontends and <a href="https://nodejs.org/en">Node</a> backends for
          the past 6-7 years.
        </p>
        <h2 id="open-source">Open Source work</h2>

        <ul>
          <li>
            <a href="https://github.com/dan-cooke/remix-sse">remix-sse</a>
          </li>
          <li>
            <a href="https://github.com/dan-cooke/remix-wizard">remix-wizard</a>
          </li>
          <li>
            <a href="https://github.com/dan-cooke/omni">omni</a>
          </li>
          <li>
            <a href="https://github.com/dan-cooke/cypress-autostub">
              cypress-autostub
            </a>
          </li>
        </ul>

        <h2>Skill Breakdown</h2>
        <SkillRadar />
        <h2 id="open-source" style={{ pageBreakBefore: "always" }}>
          Where I've worked
        </h2>
      </div>

      <div className="w-full flex flex-col gap-16 mt-8  print:gap-8">
        {jobs.map((job, index) => (
          <>
            <JobCard key={job.metadata.company} job={job} />
            {index !== jobs.length - 1 && (
              <div
                className="h-[1px] bg-neutral-2-light dark:bg-neutral-2-dark w-full "
                style={{ pageBreakBefore: "always" }}
              />
            )}
          </>
        ))}
      </div>
    </>
  );
}
