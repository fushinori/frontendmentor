import { writable } from "svelte/store";

interface Age {
  years: number;
  months: number;
  days: number;
}

export const age = writable<Age>({ years: 0, months: 0, days: 0 });
