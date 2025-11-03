import type { Subject } from "@/types";

export type SubjectTableRowProps = {
  subject: Omit<Subject, "grades" | "finalGrade">;
};
