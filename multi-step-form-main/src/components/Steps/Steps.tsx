import StepNumber from "./StepNumber";

const steps = [1, 2, 3, 4];
const stepNames = ["Your Info", "Select Plan", "Add-ons", "Summary"];

export default function Steps() {
  return (
    <>
      {/* Mobile */}
      <aside class="bg-no-repeat bg-cover w-full bg-sidebar-mobile flex gap-4 justify-center pt-8 pb-28 h-max lg:hidden">
        {steps.map((i) => (
          <StepNumber key={i} stepNumber={i} />
        ))}
      </aside>
      {/* Desktop */}
      <aside class="hidden lg:block bg-no-repeat bg-sidebar-desktop p-8 rounded-lg">
        {steps.map((i) => (
          <div key={i} class="flex items-center gap-4 mb-6">
            <StepNumber stepNumber={i} />
            <div class="uppercase">
              <p class="text-xs text-light-gray">Step {i}</p>
              <p class="text-alabaster text-sm font-bold tracking-widest">
                {stepNames[i - 1]}
              </p>
            </div>
          </div>
        ))}
      </aside>
    </>
  );
}
