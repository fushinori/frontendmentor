import Disk from "./Disk";
import { Choice } from "./gameStore";

const rockStyles = "absolute bottom-0";
const scissorsStyles = "absolute top-[-50px] right-0";
const paperStyles = "absolute top-[-50px] left-0";

export default function GameStart() {
  return (
    <section class="relative grid place-items-center px-8 top-10">
      <h2 class="sr-only">Main Game Section</h2>
      <img class="w-full" src="/bg-triangle.svg" alt="" aria-hidden="true" />
      <Disk choice={Choice.Paper} extraStyles={paperStyles} />
      <Disk choice={Choice.Scissors} extraStyles={scissorsStyles} />
      <Disk choice={Choice.Rock} extraStyles={rockStyles} />
    </section>
  );
}
