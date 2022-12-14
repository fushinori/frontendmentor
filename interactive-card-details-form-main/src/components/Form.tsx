import Button from "./Button";
import ThankYou from "./ThankYou";
import Styles from "./styles/Form.module.css";
import { useStore } from "@nanostores/react";
import { isSubmitted, cardInfo, defaultInfo, CardInfo } from "../formStore";
import type { ChangeEvent } from "react";

const {
  margin,
  name,
  number,
  cvv,
  error,
  inputError,
  hidden,
  expirationDate,
  expirationMonth,
  expirationYear,
} = Styles;

const addSpaces = function (cardNumber: string): string {
  const chars = cardNumber
    .replace(/\s/g, "")
    .split(""); /* Remove existing spaces */
  const newChars: string[] = [];
  chars.forEach((d, i) => {
    if (i % 4 === 0) {
      newChars.push(` ${d}`);
    } else {
      newChars.push(d);
    }
  });
  return newChars
    .join("")
    .slice(0, 20); /* Return only 19 characters including three spaces */
};

const validateInfo = function (name: string, value: string): string {
  const onlyNumbers = /^\d+$/;
  let output = "";
  if (value === "") {
    return "Can't be blank";
  }
  switch (name) {
    case "number":
    case "cvv":
    case "expirationMonth":
    case "expirationYear":
      if (!onlyNumbers.test(value.replace(/\s/g, ""))) {
        output = "Wrong format, numbers only";
      }
      break;

    default:
      break;
  }
  return output;
};

const handleError = function (element: HTMLInputElement): boolean {
  const { name, value } = element;
  const output = validateInfo(name, value);
  const elementClass = element.classList[0];
  const paragraph = document.querySelector(
    `p.${elementClass}`
  ) as HTMLParagraphElement;
  return addError(output, paragraph, element);
};

const addError = function (
  message: string,
  paragraph: HTMLParagraphElement,
  input: HTMLInputElement
): boolean {
  if (message == "") {
    input.classList.remove(inputError);
    paragraph.textContent = "";
    paragraph.classList.add(hidden);
    changeMargin(input, paragraph, "remove");
    return false;
  } else {
    input.classList.add(inputError);
    paragraph.classList.remove(hidden);
    paragraph.textContent = message;
    changeMargin(input, paragraph, "add");
    return true;
  }
};

const changeMargin = function (
  element: HTMLInputElement,
  paragraph: HTMLParagraphElement,
  action: "add" | "remove"
) {
  if (["name", "number"].includes(element.name)) {
    if (action === "add") {
      element.classList.remove(margin);
      paragraph.classList.add(margin);
    } else {
      element.classList.add(margin);
      paragraph.classList.remove(margin);
    }
  }
};

export default function Form() {
  const $isSubmitted = useStore(isSubmitted);
  const $cardInfo = useStore(cardInfo);

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    const inputElements = e.currentTarget.querySelectorAll("input");
    let isError = false;
    for (const i of inputElements) {
      // Check if at least one invalid user input
      if (handleError(i)) {
        isError = true;
      }
    }
    // Don't submit if there's at least one invalid user input
    if (isError) {
      return;
    }
    isSubmitted.set(!$isSubmitted);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    let { value } = e.target;
    const { name } = e.target;
    switch (name) {
      case "name":
        value = value.toUpperCase();
        break;
      case "number":
        value = addSpaces(value);
        break;
      case "expirationMonth":
      case "expirationYear":
        value = value.slice(0, 2);
        break;
      case "cvv":
        value = value.slice(0, 3);
        break;
      default:
        break;
    }
    // Set back to default value if user deletes input value
    if (value === "") {
      value = defaultInfo[name as keyof CardInfo];
    }
    cardInfo.set({
      ...$cardInfo,
      [name]: value,
    });
  }

  return $isSubmitted ? (
    <ThankYou />
  ) : (
    <form onSubmit={handleSubmit}>
      <label className={name} htmlFor="name">
        Cardholder Name
      </label>
      <input
        className={`${name} ${margin}`}
        name="name"
        type="text"
        id="name"
        placeholder="e.g. Jane Appleseed"
        onChange={handleChange}
        value={$cardInfo.name === defaultInfo.name ? "" : $cardInfo.name}
      />
      <p className={`${name} ${error} ${hidden}`}></p>
      <label htmlFor="number" className={number}>
        Card Number
      </label>
      <input
        type="text"
        id="number"
        name="number"
        inputMode="numeric"
        placeholder="e.g. 1234 5678 9123 0000"
        className={`${number} ${margin}`}
        onChange={handleChange}
        value={$cardInfo.number === defaultInfo.number ? "" : $cardInfo.number}
      />
      <p className={`${number} ${error} ${hidden}`}></p>
      <label htmlFor="expiration-date" className={expirationDate}>
        Exp. Date (MM/YY)
      </label>
      <label htmlFor="cvv" className={cvv}>
        Cvv
      </label>
      <input
        type="text"
        id="expiration-date"
        className={expirationMonth}
        name="expirationMonth"
        inputMode="numeric"
        placeholder="MM"
        onChange={handleChange}
        value={
          $cardInfo.expirationMonth === defaultInfo.expirationMonth
            ? ""
            : $cardInfo.expirationMonth
        }
      />
      <input
        type="text"
        inputMode="numeric"
        name="expirationYear"
        className={expirationYear}
        placeholder="YY"
        onChange={handleChange}
        value={
          $cardInfo.expirationYear === defaultInfo.expirationYear
            ? ""
            : $cardInfo.expirationYear
        }
      />
      <input
        type="text"
        inputMode="numeric"
        name="cvv"
        id="cvv"
        placeholder="e.g. 123"
        className={cvv}
        onChange={handleChange}
        value={$cardInfo.cvv === defaultInfo.cvv ? "" : $cardInfo.cvv}
      />
      <p className={`${expirationMonth} ${error} ${hidden}`}></p>
      <p className={`${expirationYear} ${error} ${hidden}`}></p>
      <p className={`${cvv} ${error} ${hidden}`}></p>
      <Button text="Confirm" />
    </form>
  );
}
