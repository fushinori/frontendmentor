import { useRef } from "preact/hooks";

const inputs = ["name", "email", "phone"];

export default function Info() {
  return (
    <form class="flex flex-col gap-4">
      {inputs.map((i) => (
        <Input key={i} name={i} />
      ))}
    </form>
  );
}

interface Props {
  name: string;
}

const Input = ({ name }: Props) => {
  let type;
  let placeholder;
  let label;
  switch (name) {
    case "name":
      type = "text";
      placeholder = "e.g. Stephen King";
      label = "Name";
      break;
    case "email":
      type = "email";
      label = "Email Address";
      placeholder = "e.g. stephenking@lorem.com";
      break;

    case "phone":
      type = "tel";
      placeholder = "e.g. +1 234 567 890";
      label = "Phone Number";
      break;

    default:
      break;
  }

  const ref = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: Event) => {
    if (!ref.current) return;
    if (e.target instanceof HTMLInputElement) {
      if (e.target.value.trim() === "") {
        ref.current.innerText = "This field is required";
        inputRef.current?.classList.add("border-strawberry-red");
      } else {
        ref.current.innerText = "";
        inputRef.current?.classList.remove("border-strawberry-red");
      }
    }
  };
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <label class="text-xs text-marine-blue" for={name}>
          {label}
        </label>
        <p class="text-xs text-strawberry-red font-bold" ref={ref} />
      </div>
      <input
        id={name}
        class="outline-none border-light-gray border-[1px] py-2 px-4 rounded-[0.2rem] w-full placeholder:font-medium focus:border-purplish-blue"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        onInput={handleInput}
      />
    </div>
  );
};
