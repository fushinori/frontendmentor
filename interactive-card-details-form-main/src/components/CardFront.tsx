import Styles from "./styles/CardFront.module.css";
import { useStore } from "@nanostores/react";
import { cardInfo } from "../formStore";

const { card, cardLogo, image, cardNumber, cardName, expirationDate } = Styles;

export default function CardFront() {
  const $cardInfo = useStore(cardInfo);
  const { number, name, expirationMonth, expirationYear } = $cardInfo;
  return (
    <div className={card}>
      <img src="/bg-card-front.png" className={image} alt="" />
      <img src="/card-logo.svg" className={cardLogo} alt="" />
      <p className={cardNumber}>{number}</p>
      <p className={cardName}>{name}</p>
      <p className={expirationDate}>{`${expirationMonth}/${expirationYear}`}</p>
    </div>
  );
}
