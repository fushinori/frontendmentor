import { atom } from "nanostores";

export enum ActiveStep {
  Info = 1,
  Plan,
  AddOns,
  Summary,
}

export const activeStep = atom(ActiveStep.Info);
export const submitted = atom(false);
