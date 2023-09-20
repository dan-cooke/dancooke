import Link, { LinkProps } from "next/link";
import { Me } from "../components/me";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const LinkButton = (props: JSX.IntrinsicElements["a"]) => (
  <a
    {...props}
    className={clsx(
      "text-text-primary dark:text-primary-dark dark:text-primary-dark-light dark:text-text-primary-dark hover:text-text-secondary-light border border-neutral-2-light rounded-md p-1"
    )}
  />
);

const NavButton = (props: PropsWithChildren<LinkProps>) => (
  <Link
    {...props}
    className={clsx(
      "text-text-primary dark:text-primary-dark dark:text-primary-dark-light dark:text-text-primary-dark ",
      "dark:bg-neutral-2-dark bg-neutral-2-light",
      "hover:bg-neutral-3-light dark:hover:bg-neutral-3-dark",
      "px-5 py-2 rounded-xl"
    )}
  />
);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 lg:mt-32">
      <section className="flex flex-col place-items-center ">
        <Me />
        <h1 className="text-2xl font-black mt-4 text-text-primary dark:text-text-primary-dark">
          Daniel Cooke
        </h1>
        <h2 className="text-text-secondary-light dark:text-text-secondary-dark">
          A blog about software
        </h2>
        <div className="text-3xl flex w-full place-content-center gap-3 py-3">
          <LinkButton href="https://github.com/dan-cooke" target="_blank">
            <BiLogoGithub />
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/daniel-cooke-a6a8b7111/"
            target="_blank"
          >
            <BiLogoLinkedin />
          </LinkButton>
        </div>
      </section>
      <nav className="mt-6">
        <ul className="flex flex-row place-items-center place-content-around  text-center md:translate-x-4">
          <li>
            <NavButton href="/about">About</NavButton>
          </li>
          <li>
            <NavButton href="/posts">All Posts</NavButton>
          </li>
          <li>
            <NavButton href="/subscribe">Subscribe</NavButton>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
