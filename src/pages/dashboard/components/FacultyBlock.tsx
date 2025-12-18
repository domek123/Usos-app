import { useFacultyStore, useUserStore } from "@/stores";
import { PermissionType, type Faculty } from "@/types";
import { Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FacultyBlock = ({ faculty }: { faculty: Faculty }) => {
  const { setFaculty } = useFacultyStore();
  const { role } = useUserStore();
  const navigate = useNavigate();

  return (
    <Block
      onClick={() => {
        setFaculty(faculty);
        let url = "semesters";
        if (role === PermissionType.TEACHER) url = "teacher-grade";
        if (role === PermissionType.STUDENT) url = "schedule";
        navigate(url);
      }}
    >
      <Typography>{faculty.name}</Typography>
    </Block>
  );
};

const Block = styled(Stack)(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "5px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 24px -7px rgba(90, 90, 90, 1)",
  cursor: "pointer",
  margin: "20px",
  textAlign: "center",
}));
