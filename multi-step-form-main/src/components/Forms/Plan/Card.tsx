import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import { getPrice } from "../../../logic";
import { Billing, Plan } from "../../../types";
import { billing, plan } from "../../store";

interface Props {
  cardPlan: Plan;
}

export default function Card({ cardPlan }: Props) {
  const $plan = useStore(plan);
  const $billing = useStore(billing);
  const price = `$${getPrice(cardPlan, $billing)}/${
    $billing === Billing.Monthly ? "mo" : "yr"
  }`;

  let extraStyles;
  if ($plan === cardPlan) {
    extraStyles = "bg-pastel-blue bg-opacity-10 border-purplish-blue";
  } else {
    extraStyles = "border-light-gray";
  }

  const handleClick = () => {
    plan.set(cardPlan);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const { code } = e;
    if (["Enter", "Space"].includes(code)) {
      plan.set(cardPlan);
    }
  };

  const ref = useRef<HTMLDivElement>(null);

  // Focus on the Arcade Plan
  useEffect(() => {
    if (cardPlan === Plan.Arcade) ref.current?.focus();
  }, [cardPlan]);

  return (
    <div
      class={`flex gap-4 ${extraStyles} outline-none border-[1px] rounded-lg p-4 focus:border-purplish-blue hover:border-purplish-blue cursor-pointer`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      <div class="w-1/6">
        <img
          src={`/icon-${cardPlan.toLowerCase()}.svg`}
          alt=""
          aria-hidden={true}
        />
      </div>
      <div>
        <h3 class="text-marine-blue font-medium">
          {$plan === cardPlan && (
            <span class="sr-only">Currently selected plan: </span>
          )}
          {cardPlan}
        </h3>
        <p class="text-cool-gray text-sm">{price}</p>
        {$billing === Billing.Yearly && (
          <p class="text-xs text-marine-blue mt-1">2 months free</p>
        )}
      </div>
    </div>
  );
}
