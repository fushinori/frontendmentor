import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { Region } from "$lib/types";

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
export const region = writable<Region>("All");
export const country = writable("");
