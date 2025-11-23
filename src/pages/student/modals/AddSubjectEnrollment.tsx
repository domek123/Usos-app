import { Checkbox, TableBody, TableRow, Typography } from "@mui/material";
import { useAddSubjectEnrollment } from "../hooks";
import type { AddSubjectEnrollmentProps } from "./types";
import { DefaultTableContainer, ModalFooter, ModalHeader } from "@/components";
import { StyledTableCell } from "@/styles";
import { useTranslation } from "react-i18next";
import { useAddEnrollment } from "@/hooks";
import { useLocation } from "react-router-dom";

export const AddSubjectEnrollmentModal = ({
  semesterId,
  enrollmentSubjects,
}: AddSubjectEnrollmentProps) => {
  const location = useLocation();
  const { id } = location.state || {};
  const { t } = useTranslation();

  const { addEnrollment } = useAddEnrollment();
  const {
    allSubjects,
    notAvailableSubjects,
    handleClick,
    selectedSubjectsIds,
  } = useAddSubjectEnrollment(semesterId, enrollmentSubjects);

  return (
    <>
      <ModalHeader title={t("student.AddSubjectsTitle")} />
      <DefaultTableContainer>
        <TableBody>
          {allSubjects.map((subject) => {
            const isSubjectNotAvailable = notAvailableSubjects.includes(
              subject.id
            );
            const isSubjectChecked = selectedSubjectsIds.includes(subject.id);

            return (
              <TableRow
                sx={{
                  backgroundColor: isSubjectNotAvailable ? "lightgray" : "none",
                  height: "40px",
                }}
              >
                <StyledTableCell width={"5%"}>
                  <Checkbox
                    onClick={() => handleClick(subject.id)}
                    disabled={isSubjectNotAvailable}
                    checked={isSubjectChecked || isSubjectNotAvailable}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{subject.name}</Typography>
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </DefaultTableContainer>
      <ModalFooter
        text={t("common.add")}
        action={() =>
          addEnrollment({ studentId: id, subjectIds: selectedSubjectsIds })
        }
      ></ModalFooter>
    </>
  );
};
