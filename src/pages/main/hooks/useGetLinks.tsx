import { useFacultyStore } from "@/stores";
import { useTranslation } from "react-i18next";

export const useGetLinks = () => {
  const { t } = useTranslation();
  const faculty = useFacultyStore((s) => s.faculty);

  const userLinks = [
    { to: "grades", text: t("navigation.grades") },
    { to: "schedule", text: t("navigation.schedule") },
    { to: "contact", text: t("navigation.contact") },
  ];

  const adminLinks = [
    { to: "subjects", text: t("navigation.subjects") },
    { to: "students", text: t("navigation.students") },
    { to: "contact", text: t("navigation.contact") },
  ];

  const adminGlobalLinks = [
    { to: "/", text: "Dashboard" },
    { to: "teachers", text: t("navigation.teachers") },
    { to: "students", text: t("navigation.students") },
    { to: "contact", text: t("navigation.contact") },
  ];
  return { links: faculty !== null ? adminLinks : adminGlobalLinks };
};
