import { useEffect, useState } from "react";
import Styles from "./AdviceCard.module.css";

const { adviceCard } = Styles;

interface Advice {
  id: number;
  advice: string;
}

const defaultAdvice: Advice = {
  id: 69,
  advice: "Loading...",
};

const errorAdvice: Advice = {
  id: 404,
  advice: "Failed to load advice. Please try again.",
};

export default function AdviceCard() {
  const [advice, setAdvice] = useState<Advice>(defaultAdvice);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const advice = await fetchAdvice();
      if (!ignore) {
        setAdvice(advice);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  const handleClick = async () => {
    setAdvice(defaultAdvice);
    const newAdvice = await fetchAdvice();
    setAdvice(newAdvice);
  };

  const fetchAdvice = async (): Promise<Advice> => {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    if (!response.ok) {
      return errorAdvice;
    }
    const adviceSlip = await response.json();
    return adviceSlip.slip as Advice;
  };

  return (
    <div className={adviceCard}>
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>
      <picture aria-hidden="true">
        <source
          srcSet="/pattern-divider-desktop.svg"
          media="(min-width: 40em)"
        />
        <img src="/pattern-divider-mobile.svg" alt="" />
      </picture>
      <button onClick={handleClick}>
        <img src="/icon-dice.svg" alt="Generate new advice" />
      </button>
    </div>
  );
}
