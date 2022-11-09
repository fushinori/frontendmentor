import { Choice, userChoice } from "./gameStore";

interface Props {
  choice: Choice;
  extraStyles?: string;
}

const returnDiskClass = (choice: Choice): string => {
  let diskClass;
  switch (choice) {
    case Choice.Rock:
      diskClass = "from-red-400 to-red-500 shadow-red-900";
      break;
    case Choice.Paper:
      diskClass = "from-blue-400 to-blue-500 shadow-blue-900";
      break;
    case Choice.Scissors:
      diskClass = "from-yellow-400 to-yellow-500 shadow-yellow-900";
      break;
  }
  return diskClass;
};

export default function Disk({ choice, extraStyles }: Props) {
  const imageSource = `/icon-${choice.toLowerCase()}.svg`;
  let className = `grid place-items-center bg-gradient-to-b shadow-inner-bottom rounded-full w-32 h-32 ${returnDiskClass(
    choice
  )}`;

  if (extraStyles) {
    className += ` ${extraStyles}`;
  }

  const handleClick = () => {
    userChoice.set(choice);
    console.log(userChoice.get());
  };

  return (
    <div class={className}>
      <div class="grid place-items-center bg-gradient-to-b from-white-300 to-white-500 shadow-inner-top shadow-slate-400 w-24 h-24 rounded-full">
        <button class="" onClick={handleClick}>
          <img src={imageSource} alt={choice} class="w-10" />
        </button>
      </div>
    </div>
  );
}
