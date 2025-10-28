import {type Person, type Subject, SubjectType} from "@/types"

export interface Grade {
    id: string;
    subjectId: string;
    studentId?: string;
    type: SubjectType;
    first?: number;
    second?: number;
    final?: number;
    updateDate: string;
    subject?: Subject;
    Student?: Person;
}
