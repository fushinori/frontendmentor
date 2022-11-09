import { Choice, userChoice } from "./gameStore";

interface Props {
  choice: Choice;
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

export default function Disk({ choice }: Props) {
  const imageSource = `/icon-${choice.toLowerCase()}.svg`;

  const handleClick = () => {
    userChoice.set(choice);
    console.log(userChoice.get());
  };

  return (
    <div
      class={`grid place-items-center bg-gradient-to-b shadow-inner-bottom rounded-full w-[6.5rem] h-[6.5rem] ${returnDiskClass(
        choice
      )}`}
    >
      <div class="grid place-items-center bg-gradient-to-b from-white-300 to-white-500 shadow-inner-top shadow-slate-400 h-20 w-20 rounded-full">
        <button class="" onClick={handleClick}>
          <img src={imageSource} alt={choice} class="w-10" />
        </button>
      </div>
    </div>
  );
}
