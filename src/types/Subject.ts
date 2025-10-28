import {type Grade, type Person, type Semester, SubjectType} from "@/types"

export interface Subject {
    id: string;
    ects: number;
    name: string;
    teacherId?: string;
    semesterId: string;
    updateDate: string;
    grades?: Grade[];
    teacher?: Person;
    students?: Person[];
    Semester?: Semester;
    type?: SubjectType;
}