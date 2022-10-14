import Styles from "./styles/CardBack.module.css";
import { useStore } from "@nanostores/react";
import { cardInfo } from "../formStore";
const { card, cvvClass } = Styles;

export default function CardBack() {
  const $cardInfo = useStore(cardInfo);
  const { cvv } = $cardInfo;
  return (
    <div className={card}>
      <img src="/bg-card-back.png" alt="" />
      <p className={cvvClass}>{cvv}</p>
    </div>
  );
}
