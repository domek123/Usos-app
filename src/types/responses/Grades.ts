export interface Grade {
  id: string;
  type: string;
  currentGrade?: number;
  gradeHistory: number[];
}
