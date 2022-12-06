import { score } from "../scoreStore";
import { useStore } from "@nanostores/preact";

export default function Scoreboard() {
  const $score = useStore(score);
  return (
    <div class="bg-white-100 flex flex-col items-center rounded md:rounded-lg w-1/4 md:w-[22%] py-2 md:py-3">
      <h2 class="text-blue-100 font-semibold uppercase text-[0.6rem] md:text-lg tracking-widest">
        Score
      </h2>
      <p class="text-indigo-400 text-4xl font-bold md:text-6xl">{$score}</p>
    </div>
  );
}
