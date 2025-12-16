import { PermissionType } from "@/types";

export const userUserStoreDefaultValues = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: PermissionType.ADMIN,
  studentId: -1,
  teacherId: "",
  token: undefined,
};
