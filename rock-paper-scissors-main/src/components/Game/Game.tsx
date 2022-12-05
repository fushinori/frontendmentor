import { useStore } from "@nanostores/preact";
import { isGameInProgress } from "./gameStore";
import GameResult from "./GameResult";
import GameStart from "./GameStart";

export default function Game() {
  const $isGameInProgress = useStore(isGameInProgress);

  return <>{$isGameInProgress ? <GameResult /> : <GameStart />}</>;
}
