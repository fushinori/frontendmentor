import { Plan as PlanEnum } from "../../../types";
import Card from "./Card";

export default function Plan() {
  return (
    <>
      <Card cardPlan={PlanEnum.Arcade} />
      <Card cardPlan={PlanEnum.Advanced} />
      <Card cardPlan={PlanEnum.Pro} />
    </>
  );
}
