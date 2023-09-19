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
        <h1>Not found</h1>
        <p className="text-center">Are you trying to hack me or something?</p>
      </div>
      <Link href="/" className="text-primary underline mt-8">
        Go back home
      </Link>
    </div>
  );
}
