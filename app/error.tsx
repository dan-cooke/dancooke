"use client";

import Link from "next/link";
import { Me } from "./components/me";

type ErrorProps = {
  error: Error;
};
export default function Error({ error }: ErrorProps) {
  return (
    <div className="flex flex-col place-items-center mt-8">
      <Me />
      <div className="prose lg:prose-xl flex flex-col place-items-center mt-8">
        <h1>Oops</h1>
        <p>Something went wrong</p>
      </div>
      <Link href="/" className="text-primary dark:text-primary  underline">
        Go back home
      </Link>
    </div>
  );
}
