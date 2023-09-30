import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "./theme-toggle";
import { getTheme } from "./actions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Daniel Cooke",
  description: "A blog about software",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();

  return (
    <html lang="en" className={clsx(theme === "dark" ? "dark" : null)}>
      <body
        className={clsx(
          inter.className,
          "dark:bg-bg-dark dark:text-text-dark ",
          "bg-bg-light text-text-light",
          "max-w-xs md:max-w-2xl lg:max-w-4xl ml-auto mr-auto",
        )}
      >
        <ThemeToggle theme={theme} />
        {children}
      </body>
    </html>
  );
}
