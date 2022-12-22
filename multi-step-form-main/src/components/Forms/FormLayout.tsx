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

  let styles =
    "absolute flex flex-col gap-2 bg-white mx-4 lg:mx-0 px-6 rounded-lg top-24 shadow-xl shadow-[rgba(0,0,0,0.05)]";

  styles += " lg:static lg:shadow-none lg:px-0 ";
  if ($submitted) {
    styles += " items-center text-center py-20 leading-relaxed lg:px-10";
  } else {
    styles += " py-8";
  }

  return (
    <section class={styles} aria-labelledby="form-title">
      {$submitted && children}
      <h2
        id="form-title"
        class="text-2xl font-bold text-marine-blue lg:text-3xl lg:mb-1"
      >
        {info.title}
      </h2>
      <p class="text-cool-gray mb-3 lg:mb-6">{info.description}</p>
      {!$submitted && children}
    </section>
  );
}
