import { PermissionType, type Person } from "@/types";

export const userUserStoreDefaultValues: Person & {
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

// export const userUserStoreDefaultValues: Person & {
//   studentId: number | null;
//   teacherId: string | null;
// } = {
//   id: "f8e00f4b-56ee-4104-8ab0-56669c784b05",
//   firstName: "Dominik",
//   lastName: "Wójcik",
//   email: "dominik.wojcik@student.agh.pl",
//   password: "123123123",
//   role: PermissionType.STUDENT,
//   studentId: 1,
//   teacherId: null,
// };
