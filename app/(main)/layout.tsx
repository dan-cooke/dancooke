import Link from "next/link";
import { Me } from "../components/me";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 lg:mt-32">
      <section className="flex flex-col place-items-center ">
        <Me />
        <h1 className="text-2xl font-black mt-4">Daniel Cooke</h1>
        <h2 className="text-text-secondary-light dark:text-text-secondary-dark">
          A blog about software
        </h2>
        <div className="text-3xl flex gap-3 py-3">
          <a
            href="https://github.com/dan-cooke"
            target="_blank"
            className="text-text-primary-light hover:text-text-secondary-light border border-neutral-2-light rounded-md p-1"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-cooke-a6a8b7111/"
            target="_blank"
            className="text-text-primary-light hover:text-text-secondary-light border border-neutral-2-light rounded-md p-1"
          >
            <BiLogoLinkedin />
          </a>
        </div>
      </section>
      <nav className="mt-6 hidden md:block">
        <ul className="flex flex-row place-items-center place-content-between underline text-center ">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">All Posts</Link>
          </li>
          <li>
            <Link href="/subscribe">Subscribe</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
