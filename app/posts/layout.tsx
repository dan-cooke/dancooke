import Link from "next/link";
import { Me } from "../components/me";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex place-items-center  gap-8 mt-32 md:-ml-32">
        <Me size="small" />
        <Link href="/" className="text-2xl text-primary">
          Daniel Cooke&apos;s posts
        </Link>
      </nav>
      <main className="">{children}</main>
    </div>
  );
}
