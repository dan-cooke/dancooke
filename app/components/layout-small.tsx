import Link from "next/link";
import { Me } from "./me";

export function LayoutSmall({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex place-items-center  gap-3 md:gap-8 mt-8 md:mt-32 mb-8 xl:-ml-32">
        <Me size="small" />
        <Link href="/" className="text-lg md:text-2xl text-primary">
          Daniel Cooke
        </Link>
      </nav>
      <main className="">{children}</main>
    </div>
  );
}
