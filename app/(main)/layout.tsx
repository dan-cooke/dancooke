import Image from "next/image";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 lg:mt-32">
      <section className="flex flex-col place-items-center ">
        <div className="w-32 h-32 lg:w-48 lg:h-48 relative block dark:hidden">
          <Image src="/svg/me_light.svg" fill alt="Daniel Cooke" />
        </div>
        <div className="w-32 h-32 lg:w-48 lg:h-48 relative dark:block hidden">
          <Image src="/svg/me_dark.svg" fill alt="Daniel Cooke" />
        </div>
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
