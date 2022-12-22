interface Props {
  type: "next" | "previous" | "confirm";
  form?: string;
  handleClick?: () => void;
}

export default function Button({ type, form, handleClick }: Props) {
  let text;
  let styles =
    "text-sm font-medium py-2 px-4 rounded-[0.2rem] lg:text-base lg:rounded-lg lg:py-3 lg:px-7";

  switch (type) {
    case "next":
      text = "Next Step";
      styles += " bg-marine-blue text-white hover:bg-opacity-80";
      break;

    case "previous":
      text = "Go Back";
      styles += " text-cool-gray hover:text-marine-blue";
      break;

    case "confirm":
      text = "Confirm";
      styles += " bg-purplish-blue text-white hover:bg-opacity-80";
      break;

    default:
      break;
  }
  return (
    <button form={form} class={styles} onClick={handleClick}>
      {text}
    </button>
  );
}
