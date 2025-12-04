import { useFacultyStore, useUserStore } from "@/stores";
import { PermissionType } from "@/types";
import { useTranslation } from "react-i18next";

export const useGetLinks = () => {
  const { t } = useTranslation();
  const { faculty } = useFacultyStore();
  const { role } = useUserStore();

  const studentLinks = [
    { to: "schedule", text: t("navigation.schedule") },
    { to: "grades", text: t("navigation.grades") },
  ];

  const adminLinks = [
    { to: "subjects", text: t("navigation.subjects") },
    { to: "students", text: t("navigation.students") },
  ];

  const adminGlobalLinks = [
    { to: "teachers", text: t("navigation.teachers") },
    { to: "students", text: t("navigation.students") },
  ];

  let links = [];

  if (faculty === null) {
    links.push({ to: "/", text: "Dashboard" });
  }

  if (role === PermissionType.STUDENT && faculty !== null) {
    links = [...links, ...studentLinks];
  } else if (role === PermissionType.ADMIN) {
    if (faculty !== null) {
      links = [...links, ...adminLinks];
    } else {
      links = [...links, ...adminGlobalLinks];
    }
  }

  links = [...links, { to: "contact", text: t("navigation.contact") }];

  return { links };
};
