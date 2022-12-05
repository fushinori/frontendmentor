import { Choice, computerChoice } from "./gameStore";
import { score } from "../scoreStore";

export const enum Result {
  Win,
  Loss,
  Draw,
}

export const setComputerChoice = () => {
  const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice.set(choice);
};

export const getResult = (
  userChoice: Choice,
  computerChoice: Choice
): Result => {
  let result = Result.Loss;
  if (userChoice === computerChoice) {
    result = Result.Draw;
  }
  switch (userChoice) {
    case Choice.Rock:
      if (computerChoice === Choice.Scissors) {
        result = Result.Win;
      }
      break;

    case Choice.Paper:
      if (computerChoice === Choice.Rock) {
        result = Result.Win;
      }
      break;

    case Choice.Scissors:
      if (computerChoice === Choice.Paper) {
        result = Result.Win;
      }
      break;

    default:
      break;
  }
  return result;
};

export const calculateAndSaveScore = (result: Result) => {
  let $score = score.get();
  switch (result) {
    case Result.Win:
      $score++;
      break;
    case Result.Loss:
      if ($score === 0) return;
      $score--;
      break;
    default:
      break;
  }
  score.set($score);
  localStorage.setItem("rockPaperScissorsScore", $score.toString());
};
