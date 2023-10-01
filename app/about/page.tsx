import clsx from "clsx";
import Link from "next/link";

export default function About() {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 fade-in",
        "text-text-primary-light dark:text-text-primary-dark",
        "prose md:prose-lg lg:prose-xl dark:prose-invert prose-main",
      )}
    >
      <h2 id="about">❓About me</h2>
      <p>
        I'm a software engineer from a small seaside town in Ireland. Although
        I'm hoping to move to Amsterdam very soon.
      </p>
      <p>
        I've been writing computer programs for over 10 years now, my first
        language was Pascal, but throughout school and university I explored
        many different paradigms from Java to Prolog to Assembly.
      </p>
      <p>
        My "professional" experience is in web development, I have been working
        in-depth with <a href="https://reactjs.org/">React</a> frontends and{" "}
        <a href="https://nodejs.org/en">Node</a> backends for the past 6-7
        years.
      </p>
      <p>
        I cut my teeth at IBM where I learnt from some fantastic engineers,
        since then I have worked as a consultant for startups of various sizes
        helping them build their products, and scale their teams.
      </p>
      <p>
        Recently I have been toying around with Rust, and I will be using this
        blog as a bit of a learning journal.
      </p>
      <h2 id="tech-cloud">☁️ Tech Cloud</h2>
      <p>
        Here is a little word cloud generated from the skills I have listed in
        my previous work experience posts.
      </p>

      <h2 id="open-source">📖 Open Source work</h2>
    </div>
  );
}
