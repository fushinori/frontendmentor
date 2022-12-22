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
    <div class="flex flex-col gap-4 lg:gap-6">
      {/* Plan and add-ons details */}
      <div class="p-4 lg:px-6 bg-light-blue bg-opacity-[0.15] rounded-md">
        {/* Plan details */}
        <div class="flex justify-between items-center lg:gap-56">
          {/* Plan name and button to change plan */}
          <div class="flex flex-col">
            <h3 class="text-marine-blue text-sm lg:text-base font-medium">{`${$plan} (${$billing})`}</h3>
            <LinkButton text="Change" extraInfo="plan" onClick={handleClick} />
          </div>
          <p class="text-sm lg:text-base text-marine-blue font-bold">
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
        <p class="text-purplish-blue font-bold lg:text-xl">{`+${getTotalPrice()}`}</p>
      </div>
    </div>
  );
}
