import type { SubjectType } from "@/types";

export type SubjectTypeSelectProps = {
  values: SubjectType[];
  value: SubjectType[];
  setValue: (values: SubjectType[]) => void;
};
