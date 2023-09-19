import Link from "next/link";
import { Me } from "../components/me";

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
