import { useEffect, useState } from "preact/hooks";
import Disk from "./Disk";
import { userChoice, Choice, computerChoice, matchResult } from "./gameStore";
import { setComputerChoice, getResult, calculateAndSaveScore } from "./logic";
import ResultScreen from "./ResultScreen";

export default function GameResult() {
  const [computerDidChoose, setComputerDidChoose] = useState(false);
  const [matchOver, setMatchOver] = useState(false);
  const $computerChoice = computerChoice.get();

  useEffect(() => {
    setTimeout(() => {
      setComputerChoice();
      setComputerDidChoose(!computerDidChoose);
    }, 2000);

    setTimeout(() => {
      const result = getResult(userChoice.get(), computerChoice.get());
      calculateAndSaveScore(result);
      matchResult.set(result);
      setMatchOver(!matchOver);
    }, 3000);
    // Only run after first render
    // eslint-disable-next-line
  }, []);

  return (
    <section class="flex flex-col items-center w-full gap-20">
      <h2 class="sr-only">Main Game Section</h2>
      <div class="flex justify-between w-full">
        <ChoiceComponent choice={userChoice.get()} text="You Picked" />
        {computerDidChoose ? (
          <ChoiceComponent choice={$computerChoice} text="The House Picked" />
        ) : (
          <ChoiceComponent choice={null} text="The House Picked" />
        )}
      </div>
      {matchOver && <ResultScreen result={matchResult.get()} />}
    </section>
  );
}

const PlaceHolder = () => {
  return (
    // Outer div same size as Game Disk so no displacement
    <div class="w-32 h-32 rounded-full grid place-items-center">
      <div className="bg-black opacity-10 w-28 h-28 rounded-full" />
    </div>
  );
};

interface ChoiceProps {
  choice: Choice | null;
  text: string;
}

const ChoiceComponent = ({ choice, text }: ChoiceProps) => {
  return (
    <div class="flex flex-col items-center justify-center gap-6">
      {choice ? <Disk choice={choice} /> : <PlaceHolder />}
      <p class="uppercase tracking-widest text-white-100 font-bold">{text}</p>
    </div>
  );
};
