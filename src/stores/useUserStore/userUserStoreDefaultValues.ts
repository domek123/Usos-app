import { PermissionType } from "@/types";

export const userUserStoreDefaultValues = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  role: PermissionType.ADMIN,
  studentId: -1,
  teacherId: "",
  token: undefined,
};
