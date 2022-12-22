import { Plan as PlanEnum } from "../../../types";
import Card from "./Card";
import Toggle from "./Toggle";

export default function Plan() {
  return (
    <>
      {/* Mobile */}
      <div class="lg:hidden flex flex-col gap-3 mb-5">
        <Card cardPlan={PlanEnum.Arcade} />
        <Card cardPlan={PlanEnum.Advanced} />
        <Card cardPlan={PlanEnum.Pro} />
      </div>
      <Toggle extraStyles="lg:hidden" />
      {/* Desktop */}
      <div class="hidden lg:grid grid-cols-3 gap-4 mb-8">
        <Card cardPlan={PlanEnum.Arcade} />
        <Card cardPlan={PlanEnum.Advanced} />
        <Card cardPlan={PlanEnum.Pro} />
      </div>
      <Toggle extraStyles="hidden lg:flex" />
    </>
  );
}
