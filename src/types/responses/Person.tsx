import type { PermissionType } from "../enums";

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: PermissionType;
}
