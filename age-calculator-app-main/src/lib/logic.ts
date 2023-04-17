import { DateTime } from "luxon";
import { age } from "./store";
// https://stackoverflow.com/a/1184359
// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
export const isValidDate = (year: number, month: number, day: number) => {
  const numberOfDays = new Date(year, month, 0).getDate();
  return 0 < day && day <= numberOfDays;
};

export const parseDate = (date: string) => {
  return date === "" ? 0 : parseInt(date);
};

export const calculateAge = (year: number, month: number, date: number) => {
  const birthday = DateTime.fromISO(`${year}-${month}-${date}`);
  const now = DateTime.now();
  const diff = now.diff(birthday, ["years", "months", "days"]).toObject();
  if (diff.days && diff.months && diff.years) {
    age.set({
      years: diff.years,
      months: diff.months,
      days: Math.round(diff.days),
    });
  }
};
