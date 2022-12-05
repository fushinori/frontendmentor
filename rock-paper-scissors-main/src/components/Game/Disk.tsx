import { Choice, isGameInProgress, userChoice } from "./gameStore";

interface Props {
  choice: Choice;
  extraStyles?: string;
}

const returnDiskClass = (choice: Choice): string => {
  let diskClass;
  switch (choice) {
    case Choice.Rock:
      diskClass = "from-red-400 to-red-500";
      break;
    case Choice.Paper:
      diskClass = "from-blue-400 to-blue-500";
      break;
    case Choice.Scissors:
      diskClass = "from-yellow-400 to-yellow-500";
      break;
    default:
      diskClass = "";
      break;
  }
  return diskClass;
};

export default function Disk({ choice, extraStyles }: Props) {
  const imageSource = `/icon-${choice.toLowerCase()}.svg`;
  let className = `grid place-items-center bg-gradient-to-b shadow-outer-disk rounded-full w-32 h-32 ${returnDiskClass(
    choice
  )}`;

  if (extraStyles) {
    className += ` ${extraStyles}`;
  }

  const handleClick = () => {
    const $isGameInProgress = isGameInProgress.get();
    // Don't let user click disk when they've already made a choice
    if ($isGameInProgress) return;
    userChoice.set(choice);
    isGameInProgress.set(!$isGameInProgress);
  };

  return (
    <div class={className}>
      <div class="grid place-items-center bg-gradient-to-b from-white-300 to-white-500 shadow-inner-top w-24 h-24 rounded-full">
        <button class="" onClick={handleClick}>
          <img src={imageSource} alt={choice} class="w-10" />
        </button>
      </div>
    </div>
  );
}
