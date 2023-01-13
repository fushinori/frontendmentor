import { derived, writable } from "svelte/store";
import { browser } from "$app/environment";
import lightArrow from "$lib/assets/arrow-light.svg";
import darkArrow from "$lib/assets/arrow-dark.svg";

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
export const arrow = derived(dark, ($isDark) =>
  $isDark ? lightArrow : darkArrow
);
