import Image from "next/image";
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
        <h1 className="text-2xl mt-4">Dan Cooke Codes</h1>
        <h2 className="text-text-secondary-light dark:text-text-secondary-dark">
          A blog about software
        </h2>
      </section>
      <nav className="mt-6">
        <ul className="flex flex-row place-items-center place-content-between">
          <li className="mr-4">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link href="/about">Subscribe</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
