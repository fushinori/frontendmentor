import { score } from "../scoreStore";
import { useStore } from "@nanostores/preact";

export default function Scoreboard() {
  const $score = useStore(score);
  return (
    <div class="bg-white-100 flex flex-col items-center rounded w-1/4 p-2">
      <h2 class="text-blue-100 font-semibold uppercase text-[0.6rem] tracking-widest">
        Score
      </h2>
      <p class="text-indigo-400 text-4xl font-bold">{$score}</p>
    </div>
  );
}
