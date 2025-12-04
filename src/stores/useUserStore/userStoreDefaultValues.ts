import { PermissionType, type Person } from "@/types";

export const userStoreDefaultValues: Person & {
  studentId: number | null;
  teacherId: string | null;
} = {
  id: "f4a5a7b6-e3fd-46b7-b855-7110fd13fbd0",
  firstName: "Admin",
  lastName: "Admin",
  email: "admin@agh.pl",
  password: "123123123",
  role: PermissionType.ADMIN,
  studentId: null,
  teacherId: null,
};

// export const userStoreDefaultValues: Person & {
//   studentId: number | null;
//   teacherId: string | null;
// } = {
//   id: "008eda23-d9bc-4856-9d3a-77041aa47eee",
//   firstName: "Dominik",
//   lastName: "Wójcik",
//   email: "dominik.wojcik@student.agh.pl",
//   password: "123123123",
//   role: PermissionType.STUDENT,
//   studentId: 6,
//   teacherId: null,
// };
