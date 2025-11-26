import { Days } from "@/types";

export const convertToDays = (num: number) => {
  const days = Object.values(Days);
  if (num > -1 && num < days.length) return days[num - 1];
  return days[0];
};
