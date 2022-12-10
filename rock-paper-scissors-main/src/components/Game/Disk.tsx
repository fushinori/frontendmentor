import { Choice, isGameInProgress, userChoice } from "./gameStore";

interface Props {
  choice: Choice;
  extraStyles?: string;
  size?: "big" | "large";
  isWinner?: boolean;
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

export default function Disk({ choice, extraStyles, size, isWinner }: Props) {
  const imageSource = `/icon-${choice.toLowerCase()}.svg`;
  let outerSize = "";
  let innerSize = "";
  let imageClass = "";
  let shadowClass = "";
  if (size === "big") {
    outerSize = "md:w-48 md:h-48 md:shadow-outer-disk-md";
    innerSize = "md:w-36 md:h-36 md:shadow-inner-top-md";
    imageClass = "w-10 md:w-16";
    shadowClass = "shadow-outer-disk";
    if (isWinner) {
      shadowClass = "shadow-winner-sm";
    } else {
      shadowClass = "shadow-outer-disk md:shadow-outer-disk-md";
    }
  } else if (size === "large") {
    outerSize = "md:w-72 md:h-72 md:shadow-outer-disk-lg";
    innerSize = "md:w-56 md:h-56 md:shadow-inner-top-lg";
    imageClass = "w-10 md:w-24";
    if (isWinner) {
      shadowClass = "md:shadow-winner-lg";
    } else {
      shadowClass = "md:shadow-outer-disk-lg";
    }
  }

  let outerClass = `grid place-items-center bg-gradient-to-b ${shadowClass} hover:cursor-pointer rounded-full w-32 h-32 ${outerSize} ${returnDiskClass(
    choice
  )}`;
  const innerClass = `grid place-items-center bg-gradient-to-b from-white-300 to-white-500 shadow-inner-top w-24 h-24 ${innerSize} rounded-full`;

  if (extraStyles) {
    outerClass += ` ${extraStyles}`;
  }

  const handleClick = () => {
    const $isGameInProgress = isGameInProgress.get();
    // Don't let user click disk when they've already made a choice
    if ($isGameInProgress) return;
    userChoice.set(choice);
    isGameInProgress.set(!$isGameInProgress);
  };

  return (
    <div class={outerClass} onClick={handleClick}>
      <div class={innerClass}>
        <button>
          <img src={imageSource} alt={choice} class={imageClass} />
        </button>
      </div>
    </div>
  );
}
