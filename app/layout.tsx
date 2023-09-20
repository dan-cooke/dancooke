import clsx from "clsx";
import "./globals.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "./theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Daniel Cooke",
  description: "A blog about software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();

  const prefersDark = headersList.get("sec-ch-prefers-color-scheme") === "dark";
  return (
    <html lang="en" className={clsx(prefersDark && "dark")}>
      <body
        className={clsx(
          inter.className,
          "dark:bg-bg-dark dark:text-text-dark ",
          "bg-bg-light text-text-light",
          "max-w-xs md:max-w-2xl lg:max-w-4xl ml-auto mr-auto"
        )}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
