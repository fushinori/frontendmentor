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

export const dark = writable(prefersDarkTheme());
