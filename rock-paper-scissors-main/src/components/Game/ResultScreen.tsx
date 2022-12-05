import { isGameInProgress } from "./gameStore";
import { Result } from "./logic";

interface Props {
  result: Result;
}

export default function ResultScreen({ result }: Props) {
  let text;
  switch (result) {
    case Result.Win:
      text = "You win";
      break;

    case Result.Loss:
      text = "You Lose";
      break;

    case Result.Draw:
      text = "It's a draw";
      break;
    default:
      break;
  }

  const handleClick = () => {
    isGameInProgress.set(!isGameInProgress.get());
  };

  return (
    <div class="flex flex-col gap-6">
      <p class="uppercase text-white-100 font-bold text-6xl">{text}</p>
      <button
        class="text-indigo-400 tracking-widest uppercase bg-white-100 rounded-lg py-3"
        onClick={handleClick}
      >
        Play Again
      </button>
    </div>
  );
}
