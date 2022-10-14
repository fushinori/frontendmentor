import Styles from "./styles/Button.module.css";

type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button className={Styles.btn} type="submit" onClick={onClick}>
      {text}
    </button>
  );
}
