import { AddOn } from "../../../types";
import Option from "./Option";

export default function AddOns() {
  return (
    <div class="flex flex-col gap-3">
      <Option addOn={AddOn.OnlineService} />
      <Option addOn={AddOn.LargerStorage} />
      <Option addOn={AddOn.CustomizableProfile} />
    </div>
  );
}
