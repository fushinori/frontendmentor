import { useStore } from "@nanostores/preact";
import { Billing } from "../../../types";
import { billing } from "../../store";

interface Props {
  extraStyles?: string;
}

export default function Toggle({ extraStyles }: Props) {
  const $billing = useStore(billing);

  const handleClick = () => {
    toggleBilling($billing);
  };

  let toggleStyles = "rounded-full w-3 h-3 bg-white m-1 transition-transform";
  if ($billing === Billing.Yearly) {
    toggleStyles += " translate-x-5";
  }

  let containerStyles =
    "flex justify-center gap-6 bg-light-blue bg-opacity-[0.15] rounded-md p-4";
  if (extraStyles) {
    containerStyles += ` ${extraStyles}`;
  }

  return (
    <div class={containerStyles}>
      {returnParagraph(Billing.Monthly)}
      <button class="bg-marine-blue w-10 rounded-3xl" onClick={handleClick}>
        <div class={toggleStyles} />
        <span class="sr-only">Toggle between monthly and yearly billing</span>
      </button>
      {returnParagraph(Billing.Yearly)}
    </div>
  );
}

const toggleBilling = ($billing: Billing) => {
  switch ($billing) {
    case Billing.Monthly:
      billing.set(Billing.Yearly);
      break;
    case Billing.Yearly:
      billing.set(Billing.Monthly);
      break;
    default:
      break;
  }
};

const returnParagraph = ($billing: Billing) => {
  if (billing.get() === $billing) {
    return (
      <p class="text-sm font-medium text-marine-blue">
        <span class="sr-only">Currently selected billing: </span>
        {$billing}
      </p>
    );
  }
  return <p class="text-sm font-medium text-cool-gray">{$billing}</p>;
};
