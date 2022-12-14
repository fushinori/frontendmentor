import { useEffect, useState } from "preact/hooks";
import Disk from "./Disk";
import { userChoice, Choice, computerChoice, matchResult } from "./gameStore";
import {
  setComputerChoice,
  getResult,
  calculateAndSaveScore,
  returnWinners,
} from "./logic";
import ResultScreen from "./ResultScreen";

export default function GameResult() {
  const [computerDidChoose, setComputerDidChoose] = useState(false);
  const [matchOver, setMatchOver] = useState(false);
  const [winners, setWinners] = useState([false, false]);
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
      setWinners(returnWinners(result));
      setMatchOver(!matchOver);
    }, 3000);
    // Only run after first render
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Mobile result section */}
      <section
        aria-labelledby="game-title"
        class="flex flex-col items-center w-full gap-20 md:hidden"
      >
        <h2 id="game-title" class="sr-only">
          Main Game Section
        </h2>
        <div class="flex justify-between gap-10">
          <ChoiceComponent
            choice={userChoice.get()}
            text="You Picked"
            isWinner={winners[0]}
          />
          {computerDidChoose ? (
            <ChoiceComponent
              choice={$computerChoice}
              text="The House Picked"
              isWinner={winners[1]}
            />
          ) : (
            <ChoiceComponent choice={null} text="The House Picked" />
          )}
        </div>
        {matchOver && <ResultScreen result={matchResult.get()} />}
      </section>
      {/* Desktop result section */}
      <section
        aria-labelledby="game-title"
        class="hidden md:flex items-center gap-20"
      >
        <h2 id="game-title" class="sr-only">
          Main Game Section
        </h2>
        <ChoiceComponent
          choice={userChoice.get()}
          text="You Picked"
          isWinner={winners[0]}
        />
        {matchOver && <ResultScreen result={matchResult.get()} />}
        {computerDidChoose ? (
          <ChoiceComponent
            choice={$computerChoice}
            text="The House Picked"
            isWinner={winners[1]}
          />
        ) : (
          <ChoiceComponent choice={null} text="The House Picked" />
        )}
      </section>
    </>
  );
}

const PlaceHolder = () => {
  return (
    // Outer div same size as Game Disk so no displacement
    <div class="w-32 h-32 md:w-72 md:h-72 rounded-full grid place-items-center">
      <div className="bg-black opacity-10 w-28 h-28 md:w-56 md:h-56 rounded-full" />
    </div>
  );
};

interface ChoiceProps {
  choice: Choice | null;
  text: string;
  isWinner?: boolean;
}

const ChoiceComponent = ({ choice, text, isWinner }: ChoiceProps) => {
  return (
    <>
      {/* Mobile */}
      <div class="flex flex-col items-center justify-center gap-6 md:hidden">
        {choice ? (
          <Disk
            choice={choice}
            size="big"
            isWinner={isWinner}
            // So shadow doesn't overlap
            extraStyles={!isWinner ? "relative z-10" : ""}
            isDisabled={true}
          />
        ) : (
          <PlaceHolder />
        )}
        <p class="uppercase tracking-widest text-white-100 font-bold">{text}</p>
      </div>

      {/* Desktop */}
      <div class="hidden md:flex flex-col items-center justify-center gap-16">
        <p class="uppercase tracking-widest text-white-100 font-bold text-2xl">
          {text}
        </p>
        {choice ? (
          <Disk
            choice={choice}
            size="large"
            isWinner={isWinner}
            isDisabled={true}
          />
        ) : (
          <PlaceHolder />
        )}
      </div>
    </>
  );
};
