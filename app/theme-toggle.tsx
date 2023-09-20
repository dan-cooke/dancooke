"use client";

import { IoSunny } from "react-icons/io5";
export function ThemeToggle() {
  return (
    <div className="w-full flex place-content-end mt-3">
      <button className="p-2 text-text-primary-light dark:text-text-primary-dark text-3xl">
        <IoSunny />
      </button>
    </div>
  );
}
