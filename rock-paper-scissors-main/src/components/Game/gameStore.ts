import { atom } from "nanostores";
import { Result } from "./logic";

export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
  None = "None",
}

export const isGameInProgress = atom(false);
export const userChoice = atom<Choice>(Choice.None);
export const computerChoice = atom<Choice>(Choice.None);
export const matchResult = atom<Result>(Result.Draw);
