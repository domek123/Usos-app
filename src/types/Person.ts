import {type Grade, PermissionType, type Subject} from "@/types"

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    type: PermissionType;
    grades?: Grade[];
    taughtSubjects?: Subject[]; // przedmioty prowadzone przez nauczyciela
    subject?: Subject[];        // przedmioty, w których student jest zapisany
}