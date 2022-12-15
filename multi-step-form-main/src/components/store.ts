import { atom, map } from "nanostores";

export enum ActiveStep {
  Info = 1,
  Plan,
  AddOns,
  Summary,
  Done,
}

export interface InfoFormData {
  name: string;
  email: string;
  phone: string;
}

export const activeStep = atom(ActiveStep.Info);
export const submitted = atom(false);
export const info = map<InfoFormData>({ name: "", email: "", phone: "" });
