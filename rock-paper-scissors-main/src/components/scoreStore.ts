import { atom } from "nanostores";

const savedScore = localStorage.getItem("rockPaperScissorsScore");
let $savedScore = savedScore ? parseInt(savedScore) : 0;
if (isNaN($savedScore)) {
  $savedScore = 0;
}

export const score = atom($savedScore);
