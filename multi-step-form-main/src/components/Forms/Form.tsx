import { useStore } from "@nanostores/preact";
import Steps from "../Steps/Steps";
import type { JSX } from "preact";
import { ActiveStep, activeStep } from "../store";
import FormLayout from "./FormLayout";
import Info from "./Info";

export interface FormInfo {
  title: string;
  description: string;
}

export interface CompleteForm {
  info: FormInfo;
  component: JSX.Element;
}

const formSteps: CompleteForm[] = [
  {
    info: {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
    },
    component: <Info />,
  },
];

const returnForm = (step: ActiveStep) => {
  return formSteps[step - 1];
};

export default function Form() {
  const $activeStep = useStore(activeStep);
  const form = returnForm($activeStep);
  return (
    <main class="relative" aria-labelledby="main-title">
      <h1 id="main-title" class="sr-only">
        Multi Step Form
      </h1>
      <Steps />
      <FormLayout info={form.info}>{form.component}</FormLayout>
    </main>
  );
}
