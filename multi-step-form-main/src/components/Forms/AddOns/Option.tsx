import { useStore } from "@nanostores/preact";
import { useRef } from "preact/hooks";
import { getAddOnPrice } from "../../../logic";
import { AddOn } from "../../../types";
import { addOns, billing } from "../../store";

interface Props {
  addOn: AddOn;
}
export default function Option({ addOn }: Props) {
  const $addOns = useStore(addOns);
  const $billing = useStore(billing);
  const price = getAddOnPrice(addOn, $billing);

  const isAddOnAdded = (addOn: AddOn): boolean => {
    return $addOns.has(addOn);
  };

  let description;

  switch (addOn) {
    case AddOn.OnlineService:
      description = "Access to multiplayer games";

      break;
    case AddOn.LargerStorage:
      description = "Extra 1TB of cloud save";
      break;

    case AddOn.CustomizableProfile:
      description = "Custom theme on your profile";
      break;

    default:
      break;
  }

  const toggleAddOn = () => {
    if (isAddOnAdded(addOn)) {
      $addOns.delete(addOn);
    } else {
      $addOns.add(addOn);
    }
    addOns.set($addOns);
  };

  const handleClick = (e: MouseEvent) => {
    // Don't propagate to the card if the checkbox is clicked
    e.stopPropagation();
    toggleAddOn();
  };

  let checkBoxStyles =
    "grid place-items-center w-5 h-5 rounded-[0.25rem] outline-none";
  let optionStyles =
    "flex items-center gap-4 border-[1px] px-4 py-3 rounded-md hover:border-purplish-blue cursor-pointer transition-[border-color] duration-200";
  if (isAddOnAdded(addOn)) {
    checkBoxStyles += " bg-purplish-blue";
    optionStyles += " bg-pastel-blue bg-opacity-10 border-purplish-blue";
  } else {
    checkBoxStyles += " border-[1px] border-light-gray";
    optionStyles += " border-light-gray";
  }

  const ref = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    if (ref.current) {
      ref.current.classList.add("border-purplish-blue");
    }
  };

  const handleBlur = () => {
    if (ref.current && !isAddOnAdded(addOn)) {
      ref.current.classList.remove("border-purplish-blue");
    }
  };

  return (
    <div class={optionStyles} ref={ref} onClick={handleClick}>
      <button
        type="button"
        class={checkBoxStyles}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {isAddOnAdded(addOn) && (
          <img src="/icon-checkmark.svg" aria-hidden="true" />
        )}
        <span class="sr-only">{`${
          isAddOnAdded(addOn) ? "Remove" : "Add"
        } ${addOn} add-on`}</span>
      </button>
      <div class="flex justify-between items-center w-full">
        <div>
          <h3 class="text-marine-blue font-medium text-sm">{addOn}</h3>
          <p class="text-cool-gray text-xs">{description}</p>
        </div>
        <p class="text-xs text-purplish-blue">{price}</p>
      </div>
    </div>
  );
}
