import { Checkbox, TableBody, TableRow, Typography } from "@mui/material";
import { useAddSemesterEnrollment } from "../hooks";
import {
  DefaultTableContainer,
  InfoContainer,
  ModalFooter,
  ModalHeader,
} from "@/components";
import { StyledTableCell } from "@/styles";
import { useTranslation } from "react-i18next";
import { useAddEnrollment } from "@/hooks";
import { useLocation } from "react-router-dom";
import type { Semester } from "@/types";

export const AddSemesterEnrollmentModal = ({
  enrollmentSemesters,
}: {
  enrollmentSemesters: Semester[];
}) => {
  const location = useLocation();
  const { id } = location.state || {};
  const { t } = useTranslation();

  const { addEnrollment } = useAddEnrollment();
  const {
    allSemesters,
    selectedSemestersIds,
    notAvailableSemesters,
    handleClick,
    emptySemesters,
  } = useAddSemesterEnrollment(enrollmentSemesters);

  return (
    <>
      <ModalHeader title={t("student.AddSemestersTitle")} />
      <InfoContainer title="Przypisania do semestrów">
        <Typography>
          Nie mozna przypisac studenta do pustego semestru
        </Typography>
      </InfoContainer>
      <DefaultTableContainer>
        <TableBody>
          {allSemesters.map((semester) => {
            const isSemesterChecked = selectedSemestersIds.includes(
              semester.id
            );
            const isSemesterNotAvailable = notAvailableSemesters.includes(
              semester.id
            );
            const isEmpty = emptySemesters.includes(semester.id);

            return (
              <TableRow
                sx={{
                  backgroundColor:
                    isSemesterNotAvailable || isEmpty ? "lightgray" : "none",
                  height: "40px",
                }}
              >
                <StyledTableCell width={"5%"}>
                  <Checkbox
                    onClick={() => handleClick(semester.id)}
                    disabled={isSemesterNotAvailable || isEmpty}
                    checked={isSemesterChecked || isSemesterNotAvailable}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{semester.name}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>{semester.subjects.length}</Typography>
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </DefaultTableContainer>
      <ModalFooter
        text={t("common.add")}
        action={() =>
          addEnrollment({
            studentId: id,
            subjectIds: allSemesters
              .filter((semester) => selectedSemestersIds.includes(semester.id))
              .flatMap((semester) =>
                semester.subjects.map((subject) => subject.id)
              ),
          })
        }
      ></ModalFooter>
    </>
  );
};
