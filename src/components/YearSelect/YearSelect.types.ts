export type YearSelectProps = {
  value?: number[] | number;
  setYears: (values: number[] | number | undefined) => void;
  multiple?: boolean;
  width?: string;
};
