import { useStore } from "@nanostores/preact";
import { activeStep } from "../store";

interface Props {
  stepNumber: number;
}

export default function StepNumber({ stepNumber }: Props) {
  const $activeStep = useStore(activeStep);

  let styles = "grid place-items-center rounded-full h-8 w-8";

  if ($activeStep === stepNumber) {
    styles += " text-marine-blue bg-light-blue";
  } else {
    styles += " text-white border-white border-[1px]";
  }

  return (
    <div class={styles}>
      <p class="font-semibold text-sm">{stepNumber}</p>
    </div>
  );
}
