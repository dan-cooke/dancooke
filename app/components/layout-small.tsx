import Link from "next/link";
import { Me } from "./me";

export function LayoutSmall({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex place-items-center  gap-3 mt-8">
        <Me size="small" />
        <Link
          href="/"
          className="text-lg md:text-2xl text-primary  dark:text-primary-dark"
        >
          Daniel Cooke
        </Link>
      </nav>
      <main className="">{children}</main>
    </div>
  );
}
