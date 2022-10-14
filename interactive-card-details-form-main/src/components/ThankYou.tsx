import Button from "./Button";
import Styles from "./styles/ThankYou.module.css";
import { isSubmitted } from "../formStore";
import { useStore } from "@nanostores/react";
const { container } = Styles;

export default function ThankYou() {
  const $isSubmitted = useStore(isSubmitted);
  function handleClick() {
    isSubmitted.set(!$isSubmitted);
    console.log($isSubmitted);
  }
  return (
    <div className={container}>
      <img src="/icon-complete.svg" alt="" />
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <Button text="Continue" onClick={handleClick} />
    </div>
  );
}
