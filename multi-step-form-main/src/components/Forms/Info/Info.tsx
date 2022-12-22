import { useForm } from "react-hook-form";
// Importing types so eslint shouldn't complain but oh well
// eslint-disable-next-line no-duplicate-imports
import type { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { activeStep, info } from "../../store";
import type { InfoFormData } from "../../../types";

type Inputs = "name" | "email" | "phone";
const inputs: Inputs[] = ["name", "email", "phone"];

export default function Info() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoFormData>();

  const onSubmit = handleSubmit((data) => {
    info.set(data);
    activeStep.set(activeStep.get() + 1);
  });

  return (
    <form id="personal-info" class="flex flex-col gap-4" onSubmit={onSubmit}>
      {inputs.map((i) => (
        <Input key={i} name={i} register={register} errors={errors} />
      ))}
    </form>
  );
}

interface Props {
  name: Inputs;
  register: UseFormRegister<InfoFormData>;
  errors: Partial<FieldErrorsImpl<InfoFormData>>;
}

const Input = ({ name, register, errors }: Props) => {
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

  let inputStyles =
    "outline-none border-[1px] py-2 px-4 rounded-[0.2rem] lg:py-3 lg:rounded-[0.4rem] lg:mb-2 w-full placeholder:font-medium focus:border-purplish-blue";

  if (errors[name]) {
    inputStyles += " border-strawberry-red";
  } else {
    inputStyles += " border-light-gray";
  }

  const handleInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const { name } = e.target;
      // We know that the input names are all keys included in InfoFormData
      info.setKey(name as keyof InfoFormData, e.target.value);
    }
  };

  return (
    <div class="flex flex-col gap-1 lg:gap-2">
      <div class="flex justify-between">
        <label class="text-xs text-marine-blue lg:text-sm" for={name}>
          {label}
        </label>
        {errors[name]?.type === "required" && (
          <p class="text-xs text-strawberry-red font-bold lg:text-sm">
            This field is required
          </p>
        )}
      </div>
      <input
        id={name}
        class={inputStyles}
        type={type}
        placeholder={placeholder}
        value={info.get()[name]}
        onInput={handleInput}
        {...register(name, { required: true })}
      />
    </div>
  );
};
