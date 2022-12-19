import { useStore } from "@nanostores/preact";
import Steps from "../Steps/Steps";
import type { JSX } from "preact";
import { activeStep } from "../store";
import FormLayout from "./FormLayout";
import Info from "./Info";
import Strip from "../Buttons/Strip";
import Plan from "./Plan/Plan";
import { ActiveStep } from "../../types";
import AddOns from "./AddOns/AddOns";
import Summary from "./Summary/Summary";

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
  {
    info: {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
    },
    component: <Plan />,
  },
  {
    info: {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience",
    },
    component: <AddOns />,
  },
  {
    info: {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming.",
    },
    component: <Summary />,
  },
];

const returnForm = (step: ActiveStep) => {
  return formSteps[step - 1];
};

export default function Form() {
  const $activeStep = useStore(activeStep);
  const form = returnForm($activeStep);
  return (
    <main
      class="relative flex flex-col justify-between items-center min-h-screen"
      aria-labelledby="main-title"
    >
      <h1 id="main-title" class="sr-only">
        Multi Step Form
      </h1>
      <Steps />
      <FormLayout info={form.info}>{form.component}</FormLayout>
      {$activeStep !== ActiveStep.Done && <Strip />}
    </main>
  );
}
