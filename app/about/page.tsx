import clsx from "clsx";
import Link from "next/link";

const AboutLink = (props: JSX.IntrinsicElements["a"]) => (
  <a {...props} className="underline text-primary dark:text-primary-dark" />
);
export default function About() {
  return (
    <div className={clsx("flex flex-col gap-4 fade-in")}>
      <p className="md:text-4xl font-bold">About me</p>
      <p>
        I'm a software engineer from Ireland who likes to travel quite a bit -
        I'm currently taking a bit of a break from paid work to build some
        personal projects and travel around Europe in my van 🚐. But I'm always
        open to new opportunities, so feel free to reach out!
      </p>
      <p>
        My "professional" experience is in web development, I have been working
        in-depth with <AboutLink href="https://reactjs.org/">React</AboutLink>{" "}
        frontends and <AboutLink href="https://nodejs.org/en">Node</AboutLink>{" "}
        backends for the past 6-7 years. Working with a variety of Database
        technologies, MongoDB, Postgres, Redis, DynamoDB, etc.
      </p>
      <p>
        In my sparetime I am constantly hacking and reading about auxiliary
        technologies{" "}
        <Link
          href="/reading-list"
          className="underline text-primary dark:text-primary-dark"
        >
          (check out my reading list){" "}
        </Link>
        , I have worked on several open source projects, like{" "}
        <AboutLink href="https://github.com/dan-cooke/remix-sse">
          remix-sse
        </AboutLink>{" "}
        and most recently{" "}
        <AboutLink href="https://github.com/dan-cooke/omni">omni</AboutLink>.
      </p>

      <p>
        I recently founded a small startup called{" "}
        <AboutLink href="https://joinwillow.co.uk">Willow</AboutLink> our goal
        is to make investing eco-friendly and easy for everyone. 🌳
      </p>
      <p>
        My heart lies with{" "}
        <AboutLink
          href="https://www.rust-lang.org/"
          className="underline text-primary dark:text-primary-dark"
        >
          Rust
        </AboutLink>
        🦀 though. For years I have been trying to find a way to use it in my
        day-to-day work, but it's not always possible. So that's why I am taking
        some time off to work on Omni. A WASM based IDL for generating
        Client/Server code written in Rust. It will be 99% a learning experience
        for me, but I will be posting about my journey on this blog.
      </p>
      <p className="md:text-3xl font-bold mt-8">Tech Cloud</p>
      <p>
        Here is a little word cloud generated from the skills I have listed in
        my previous work experience posts.
      </p>
    </div>
  );
}
