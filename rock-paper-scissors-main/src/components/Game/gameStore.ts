import { atom } from "nanostores";

export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export const hasGameStarted = atom(false);
export const userChoice = atom<Choice | null>(null);
