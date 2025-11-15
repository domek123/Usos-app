export type AddEditSubjectModalProps = {
  semesterId: string;
  subject?: {
    id: string;
    teacherId: string;
    name: string;
    ects: number;
  };
};
