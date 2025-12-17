function roundToGradeScale(value: number) {
  const rounded = Math.round(value * 2) / 2;
  return Math.min(5, Math.max(2, rounded));
}

export function getFinalGrade(values: number[]) {
  const sume = values.reduce((a, b) => a + b, 0);
  return roundToGradeScale(sume);
}
