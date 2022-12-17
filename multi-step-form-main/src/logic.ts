import { AddOn, Billing, Plan } from "./types";

// A bit ugly but ensures that nothing changes even if the order of the
// enum members are shifted around
const prices = {
  [Plan.Arcade]: { [Billing.Monthly]: 9, [Billing.Yearly]: 90 },
  [Plan.Advanced]: { [Billing.Monthly]: 12, [Billing.Yearly]: 120 },
  [Plan.Pro]: { [Billing.Monthly]: 15, [Billing.Yearly]: 150 },
};

const addOnPrices = {
  [AddOn.OnlineService]: { [Billing.Monthly]: 1, [Billing.Yearly]: 10 },
  [AddOn.LargerStorage]: { [Billing.Monthly]: 2, [Billing.Yearly]: 20 },
  [AddOn.CustomizableProfile]: { [Billing.Monthly]: 2, [Billing.Yearly]: 20 },
};

export const getPrice = (plan: Plan, billing: Billing) => {
  return prices[plan][billing];
};

export const getAddOnPrice = (addOn: AddOn, billing: Billing) => {
  return addOnPrices[addOn][billing];
};
