import StepNumber from "./StepNumber";

const steps = [1, 2, 3, 4];

export default function Steps() {
  return (
    <aside class="bg-no-repeat bg-cover bg-sidebar-mobile lg:bg-sidebar-desktop flex gap-4 justify-center pt-8 pb-28">
      {steps.map((i) => (
        <StepNumber key={i} stepNumber={i} />
      ))}
    </aside>
  );
}
