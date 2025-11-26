export type Option = {
  label: string;
  value: string | number;
};

export type SelectFieldProps = {
  label: string;
  value?: string | number;
  onChange: (val: string | number) => void;
  options: Option[];
  disabled?: boolean;
};
