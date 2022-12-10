import Disk from "./Disk";
import { Choice } from "./gameStore";

const rockStyles =
  "absolute bottom-0 md:bottom-[-50px] hover:scale-110 transition-transform";
const scissorsStyles =
  "absolute top-[-50px] right-0 md:right-[7rem] md:top-[-100px] hover:scale-110 transition-transform";
const paperStyles =
  "absolute top-[-50px] left-0 md:top-[-100px] md:left-[7rem] hover:scale-110 transition-transform";

export default function GameStart() {
  return (
    <section class="relative grid place-items-center px-8 top-10 w-full">
      <h2 class="sr-only">Main Game Section</h2>
      <img
        class="w-full md:w-1/2"
        src="/bg-triangle.svg"
        alt=""
        aria-hidden="true"
      />
      <Disk choice={Choice.Paper} extraStyles={paperStyles} size="big" />
      <Disk choice={Choice.Scissors} extraStyles={scissorsStyles} size="big" />
      <Disk choice={Choice.Rock} extraStyles={rockStyles} size="big" />
    </section>
  );
}
