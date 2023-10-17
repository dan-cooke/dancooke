import { jobFiles } from "@/lib/jobs";
import clsx from "clsx";
import { JobCard } from "./job-card";

export default async function About() {
  const jobs = await jobFiles.listOrdered(
    (job1, job2) =>
      Number(job1.metadata.startDate) - Number(job2.metadata.startDate),
  );
  return (
    <>
      <div
        className={clsx(
          "flex flex-col gap-4 fade-in",
          "text-text-primary-light dark:text-text-primary-dark",
          "prose md:prose-lg lg:prose-xl dark:prose-invert prose-main",
        )}
      >
        <h2 id="about">❓About me</h2>
        <p>
          I'm a software engineer from a small seaside town in Ireland. I've
          been writing computer programs for over 10 years now, my first
          language was Pascal, but throughout school and university I explored
          many different paradigms from Java to Prolog to Assembly.
        </p>
        <p>
          My "professional" experience is in web development, I have been
          working in-depth with <a href="https://reactjs.org/">React</a>{" "}
          frontends and <a href="https://nodejs.org/en">Node</a> backends for
          the past 6-7 years.
        </p>
        <h2 id="tech-cloud">☁️ Tech Cloud</h2>
        <p>
          Here is a little word cloud generated from the skills I have listed in
          my previous work experience posts.
        </p>

        <h2 id="open-source">📖 Open Source work</h2>

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
        <h2 id="open-source">💻 Where I've worked</h2>
      </div>

      <div className="w-full">
        {jobs.map((job) => (
          <JobCard key={job.metadata.company} job={job} />
        ))}
      </div>
    </>
  );
}
