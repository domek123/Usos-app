export const parseToHHMM = (time: number, startAt7?: boolean) => {
  if (startAt7) {
    time = 15 * time + 420;
  }
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};
