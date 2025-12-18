import { Checkbox, TableBody, TableRow, Typography } from "@mui/material";
import { useAddSemesterEnrollment } from "../hooks";
import { DefaultTableContainer, ModalFooter, ModalHeader } from "@/components";
import { StyledTableCell } from "@/styles";
import { useTranslation } from "react-i18next";
import type { Semester } from "@/types";

export const AddSemesterEnrollmentModal = ({
  enrollmentSemesters,
}: {
  enrollmentSemesters: Semester[];
}) => {
  const { t } = useTranslation();

  const {
    allSemesters,
    selectedSemestersIds,
    notAvailableSemesters,
    handleClick,
    selectedSemestersWithSubject,
    handleClickWithSemesterClick,
    handleAssignSemester,
  } = useAddSemesterEnrollment(enrollmentSemesters);

  return (
    <>
      <ModalHeader title={t("student.AddSemestersTitle")} />
      <DefaultTableContainer>
        <TableBody>
          {allSemesters.map((semester) => {
            const isSemesterChecked = selectedSemestersIds.includes(
              semester.id
            );
            const isSemesterNotAvailable = notAvailableSemesters.includes(
              semester.id
            );
            const isSemesterWithSubjectsChecked =
              selectedSemestersWithSubject.includes(semester.id);

            return (
              <TableRow
                key={semester.id}
                sx={{
                  backgroundColor: isSemesterNotAvailable
                    ? "lightgray"
                    : "none",
                  height: "40px",
                }}
              >
                <StyledTableCell width={"5%"}>
                  <Checkbox
                    onClick={() => handleClick(semester.id)}
                    disabled={isSemesterNotAvailable}
                    checked={isSemesterChecked || isSemesterNotAvailable}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{semester.name}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>{semester.subjects.length}</Typography>
                </StyledTableCell>
                {allSemesters.length !== notAvailableSemesters.length && (
                  <StyledTableCell width={"5%"}>
                    {!isSemesterNotAvailable && (
                      <Checkbox
                        onClick={() =>
                          handleClickWithSemesterClick(semester.id)
                        }
                        disabled={isSemesterNotAvailable}
                        checked={isSemesterWithSubjectsChecked}
                      />
                    )}
                  </StyledTableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </DefaultTableContainer>
      <ModalFooter
        text={t("common.add")}
        action={handleAssignSemester}
      ></ModalFooter>
    </>
  );
};
