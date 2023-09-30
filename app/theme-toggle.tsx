"use client";

import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { IoMoon, IoSettings, IoSunny } from "react-icons/io5";
import { setTheme } from "./actions";

const themeOptions = [
  { name: "Light", value: "light", icon: <IoSunny /> },
  { name: "Dark", value: "dark", icon: <IoMoon /> },
  { name: "System", value: "system", icon: <IoSettings /> },
];

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export type ThemeToggleProps = {
  theme: Theme;
};

export function ThemeToggle({ theme = Theme.Light }: ThemeToggleProps) {
  return (
    <div
      className={clsx(
        "w-full flex place-content-end mt-3",
        "text-text-secondary-light",
        "dark:text-text-secondary-dark",
      )}
    >
      <Listbox name="theme" onChange={(theme) => setTheme(theme as Theme)}>
        <Listbox.Button className={clsx("")}>{theme}</Listbox.Button>
        <Listbox.Options>
          {themeOptions.map((theme) => (
            <Listbox.Option key={theme.value} value={theme.value}>
              {theme.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
