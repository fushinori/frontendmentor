import { atom, map } from "nanostores";
import { ActiveStep, AddOn, Billing, InfoFormData, Plan } from "../types";

export const activeStep = atom(ActiveStep.Info);
export const submitted = atom(false);

export const info = map<InfoFormData>({ name: "", email: "", phone: "" });

export const billing = atom(Billing.Monthly);
export const plan = atom(Plan.Arcade);
export const addOns = atom<Set<AddOn>>(
  new Set([AddOn.OnlineService, AddOn.LargerStorage])
);
