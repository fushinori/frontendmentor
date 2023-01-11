import { writable } from "svelte/store";
import { browser } from "$app/environment";

const prefersDarkTheme = () => {
  // Just return during SSR
  if (!browser) return false;
  const theme = localStorage.getItem("theme");
  if (theme === null) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return theme === "dark";
};

const syncTheme = () => {
  // Just return during SSR
  if (!browser) return;
  dark.subscribe((isDark) =>
    localStorage.setItem("theme", isDark ? "dark" : "light")
  );
};

export const dark = writable(prefersDarkTheme());
syncTheme();
