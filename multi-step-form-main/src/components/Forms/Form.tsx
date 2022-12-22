import { useStore } from "@nanostores/preact";
import Steps from "../Steps/Steps";
import type { JSX } from "preact";
import { activeStep } from "../store";
import FormLayout from "./FormLayout";
import Info from "./Info/Info";
import Strip from "../Buttons/Strip";
import Plan from "./Plan/Plan";
import { ActiveStep } from "../../types";
import AddOns from "./AddOns/AddOns";
import Summary from "./Summary/Summary";
import { useEffect, useRef, useState } from "preact/hooks";
import ThankYou from "./ThankYou/ThankYou";

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
  {
    info: {
      title: "Thank you!",
      description:
        "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
    },
    component: <ThankYou />,
  },
];

const returnForm = (step: ActiveStep) => {
  return formSteps[step - 1];
};

export default function Form() {
  const $activeStep = useStore(activeStep);
  const form = returnForm($activeStep);
  const firstUpdate = useRef(true);

  // Pre-rendered, so can't use window.innerWidth here
  const [width, setWidth] = useState(1024);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // https://stackoverflow.com/a/53254028
    // Manually update width only on the first render
    // Event handler takes care of the rest on other renders
    if (firstUpdate.current) {
      handleResize();
      firstUpdate.current = false;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let mainContent;
  if (width >= 1024) {
    mainContent = (
      <div class="col-span-2 h-full flex flex-col justify-between px-16">
        <FormLayout info={form.info}>{form.component}</FormLayout>
        {$activeStep !== ActiveStep.Done && <Strip />}
      </div>
    );
  } else {
    mainContent = (
      <>
        <FormLayout info={form.info}>{form.component}</FormLayout>
        {$activeStep !== ActiveStep.Done && <Strip />}
      </>
    );
  }

  return (
    <main
      class="relative flex flex-col justify-between items-center min-h-screen
      lg:static lg:grid lg:grid-cols-3 lg:max-w-5xl lg:bg-white lg:min-h-[37.5rem] lg:rounded-xl lg:shadow-xl lg:shadow-[rgba(0,0,0,0.05)] lg:p-4 lg:gap-0"
      aria-labelledby="main-title"
    >
      <h1 id="main-title" class="sr-only">
        Multi Step Form
      </h1>
      <Steps />
      {mainContent}
    </main>
  );
}
