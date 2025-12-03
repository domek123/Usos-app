import { PermissionType, type Person } from "@/types";

export const userStoreDefaultValues: Person = {
  id: "008eda23-d9bc-4856-9d3a-77041aa47eee",
  firstName: "Admin",
  lastName: "Admin",
  email: "admin@agh.pl",
  password: "123123123",
  role: PermissionType.STUDENT,
};
