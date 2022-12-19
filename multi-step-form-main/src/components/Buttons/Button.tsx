interface Props {
  type: "next" | "previous" | "confirm";
  form?: string;
  handleClick?: () => void;
}

export default function Button({ type, form, handleClick }: Props) {
  let text;
  let styles = "text-sm font-medium py-2 px-4 rounded-[0.2rem]";

  switch (type) {
    case "next":
      text = "Next Step";
      styles += " bg-marine-blue text-white";
      break;

    case "previous":
      text = "Go Back";
      styles += " text-cool-gray";
      break;

    case "confirm":
      text = "Confirm";
      styles += " bg-purplish-blue text-white";
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
