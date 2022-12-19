interface Props {
  text: string;
  extraInfo?: string;
  onClick: () => void;
}

export default function LinkButton({ text, onClick, extraInfo }: Props) {
  return (
    <button
      class="underline text-cool-gray text-sm hover:text-purplish-blue focus:text-purplish-blue outline-none self-start"
      onClick={onClick}
    >
      {text}
      <span class="sr-only">{extraInfo}</span>
    </button>
  );
}
