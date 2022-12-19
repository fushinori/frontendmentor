import { useStore } from "@nanostores/preact";
import { getPlanPrice, getTotalPrice } from "../../../logic";
import { ActiveStep, Billing } from "../../../types";
import LinkButton from "../../Buttons/LinkButton";
import { activeStep, addOns, billing, plan } from "../../store";
import AddOnInfo from "./AddOnInfo";
import Divider from "./Divider";

export default function Summary() {
  const $plan = useStore(plan);
  const $billing = useStore(billing);
  const $addOns = useStore(addOns);

  const handleClick = () => {
    activeStep.set(ActiveStep.Plan);
  };

  return (
    <div class="flex flex-col gap-4">
      {/* Plan and add-ons details */}
      <div class="p-4 bg-light-blue bg-opacity-10 rounded-md">
        {/* Plan details */}
        <div class="flex justify-between items-center">
          {/* Plan name and button to change plan */}
          <div class="flex flex-col gap-0">
            <h3 class="text-marine-blue text-sm font-medium">{`${$plan} (${$billing})`}</h3>
            <LinkButton text="Change" extraInfo="plan" onClick={handleClick} />
          </div>
          <p class="text-sm text-marine-blue font-bold">
            {getPlanPrice($plan, $billing)}
          </p>
        </div>
        <Divider />
        {Array.from($addOns).map((addOn) => (
          <AddOnInfo key={addOn} addOn={addOn} />
        ))}
      </div>
      {/* Total price details */}
      <div class="flex justify-between items-center px-4">
        <p class="text-sm text-cool-gray">{`Total (per ${
          $billing === Billing.Monthly ? "month" : "year"
        })`}</p>
        <p class="text-purplish-blue font-bold">{getTotalPrice()}</p>
      </div>
    </div>
  );
}
