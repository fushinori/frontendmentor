import { useStore } from "@nanostores/preact";
import { getAddOnPrice } from "../../../logic";
import type { AddOn } from "../../../types";
import { billing } from "../../store";

interface Props {
  addOn: AddOn;
}

export default function AddOnInfo({ addOn }: Props) {
  const $billing = useStore(billing);
  const price = getAddOnPrice(addOn, $billing);
  return (
    <div class="flex justify-between mb-2">
      <p class="text-sm text-cool-gray">{addOn}</p>
      <p class="text-sm text-marine-blue">{`+${price}`}</p>
    </div>
  );
}
