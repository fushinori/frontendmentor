import { useStore } from "@nanostores/preact";
import type { ComponentChildren } from "preact";
import { submitted } from "../store";
import type { FormInfo } from "./Form";

interface Props {
  info: FormInfo;
  children: ComponentChildren;
}

export default function FormLayout({ info, children }: Props) {
  const $submitted = useStore(submitted);
  return (
    <section
      class="absolute flex flex-col gap-2 bg-white mx-4 px-6 py-8 rounded-lg top-24 shadow-xl shadow-[rgba(0,0,0,0.05)]"
      aria-labelledby="form-title"
    >
      {!$submitted && (
        <>
          <h2 id="form-title" class="text-2xl font-bold text-marine-blue">
            {info.title}
          </h2>
          <p class="text-cool-gray mb-3">{info.description}</p>
        </>
      )}
      {children}
    </section>
  );
}
