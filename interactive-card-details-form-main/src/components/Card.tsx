import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Styles from "./styles/Card.module.css";

const { cards } = Styles;
export default function Card() {
  return (
    <div className={cards} aria-hidden="true">
      <CardFront />
      <CardBack />
    </div>
  );
}
