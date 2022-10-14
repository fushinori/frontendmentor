import { atom } from "nanostores";

export interface CardInfo {
  number: string;
  name: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export const defaultInfo: CardInfo = {
  number: "0000 0000 0000 0000",
  name: "Jane Appleseed".toUpperCase(),
  expirationMonth: "00",
  expirationYear: "00",
  cvv: "000",
};

export const cardInfo = atom<CardInfo>({
  ...defaultInfo,
});

export const isSubmitted = atom(false);
