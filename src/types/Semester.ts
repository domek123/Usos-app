import type {Subject} from "@/types";

export interface Semester {
    id: string;
    name: string;
    subjects?: Subject[];
}