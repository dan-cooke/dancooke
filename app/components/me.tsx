import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type MeProps = {
  size?: "small" | "normal";
};
export function Me({ size = "normal" }: MeProps) {
  return (
    <>
      <Link
        href="/"
        className={clsx(
          "relative block dark:hidden",
          size === "small"
            ? "w-16 h-16 lg:w-24 lg:h-24"
            : "w-32 h-32 lg:w-48 lg:h-48",
        )}
      >
        <Image src="/svg/me_light.svg" fill alt="Daniel Cooke" />
      </Link>
      <Link
        href="/"
        className={clsx(
          "relative dark:block hidden",
          size === "small"
            ? "w-16 h-16 lg:w-24 lg:h-24"
            : "w-32 h-32 lg:w-48 lg:h-48",
        )}
      >
        <Image src="/svg/me_dark.svg" fill alt="Daniel Cooke" />
      </Link>
    </>
  );
}
