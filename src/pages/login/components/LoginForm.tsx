import { Stack, styled } from "@mui/material";
import { CustomButton } from "@/components";
import { ButtonSection } from "./ButtonSection.tsx";
import LoginIcon from "@mui/icons-material/Login";
import { LabelSection } from "./LabelSection.tsx";

export const LoginForm = () => {
  return (
    <MainContainer>
      <FormContainer>
        <LabelSection />
        <CustomButton
          sx={{ backgroundColor: "#14864A", width: "100%" }}
          textSx={{ color: "white" }}
          text={"Zaloguj się"}
          startIcon={<LoginIcon style={{ color: "white" }} />}
        />
        <ButtonSection />
      </FormContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100%",
  background: "#303B3E",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "15px",
  borderRadius: 5,
});

const FormContainer = styled(Stack)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "380px",
  gap: "15px",
});
