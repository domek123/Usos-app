import type { SubjectType } from "@/types";

export type SubjectTypeSelectProps = {
  value: SubjectType[];
  setValue: (values: SubjectType[]) => void;
};
