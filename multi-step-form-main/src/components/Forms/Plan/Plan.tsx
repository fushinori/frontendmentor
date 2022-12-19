import { Plan as PlanEnum } from "../../../types";
import Card from "./Card";
import Toggle from "./Toggle";

export default function Plan() {
  return (
    <>
      <div class="flex flex-col gap-3 mb-5">
        <Card cardPlan={PlanEnum.Arcade} />
        <Card cardPlan={PlanEnum.Advanced} />
        <Card cardPlan={PlanEnum.Pro} />
      </div>
      <Toggle />
    </>
  );
}
