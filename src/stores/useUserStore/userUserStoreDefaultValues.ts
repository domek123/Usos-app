import { PermissionType } from "@/types";

export const userUserStoreDefaultValues = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  role: PermissionType.NONE,
  studentId: -1,
  teacherId: "",
  token: "",
};
