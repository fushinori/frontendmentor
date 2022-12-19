import { useStore } from "@nanostores/preact";
import { ActiveStep } from "../../types";
import { activeStep } from "../store";
import Button from "./Button";

export default function Strip() {
  const $activeStep = useStore(activeStep);

  let flexDirection;
  if ($activeStep === ActiveStep.Info) {
    // Align next step button to the right if go back button isn't present
    flexDirection = "flex-row-reverse";
  } else {
    flexDirection = "flex-row";
  }

  let form;
  switch ($activeStep) {
    case ActiveStep.Info:
      form = "personal-info";
      break;

    default:
      break;
  }

  const handlePrevious = () => {
    activeStep.set($activeStep - 1);
  };

  const handleNext = () => {
    activeStep.set($activeStep + 1);
  };

  return (
    <div class={`flex ${flexDirection} justify-between w-full bg-white p-4`}>
      {$activeStep > ActiveStep.Info && (
        <Button type="previous" handleClick={handlePrevious} />
      )}
      {$activeStep === ActiveStep.Info && <Button type="next" form={form} />}
      {$activeStep > ActiveStep.Info && $activeStep != ActiveStep.Summary && (
        <Button type="next" handleClick={handleNext} />
      )}
      {$activeStep === ActiveStep.Summary && <Button type="confirm" />}
    </div>
  );
}
