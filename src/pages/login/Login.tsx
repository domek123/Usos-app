import { Stack, styled, Typography } from "@mui/material";
import { LoginForm } from "@pages/login/components/";
import DarkModeIcon from "@mui/icons-material/DarkMode";
export const Login = () => {
  return (
    <MainContainer>
      <HeaderStack>
        <Stack
          maxWidth={"1280px"}
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Stack flexDirection={"row"} gap={"10px"} alignItems={"center"}>
            <Typography variant={"h3"} color={"#50AAB2"}>
              SSO
            </Typography>
            <Typography color={"white"}>Logowanie do systemów AGH</Typography>
          </Stack>
          <Stack flexDirection={"row"} gap={"10px"} alignItems={"center"}>
            <Typography color={"white"}>PL</Typography>
            <DarkModeIcon style={{ color: "white" }} />
          </Stack>
        </Stack>
      </HeaderStack>
      <Stack maxWidth={"1280px"} width={"100%"} gap={"15px"}>
        <Typography color={"white"}>
          SSO AGH (Single Sign-On) to mechanizm upraszczający procedury
          logowania w systemach informatycznych. Pozwala użytkownikowi, po
          jednokrotnym uwierzytelnieniu, na dostęp do wielu usług i aplikacji
          obsługiwanych przez CRI oraz inne jednostki AGH. Usługi, do których
          uwierzytelnienie następuje przez SSO AGH to m.in. Microsoft 365, USOS,
          UPeL, Chmura AGH, Overleaf.
        </Typography>
        <InfoStack>
          <Typography color={"#00464A"}>
            Twoje połączenie wygasło, musisz się ponownie uwierzytelnić
          </Typography>
        </InfoStack>
        <LoginForm />
        <InfoStack sx={{ backgroundColor: "#D1ECF1" }}>
          <Typography color={"#00464A"}>
            Zwiększ bezpieczeństwo swojego konta aktywując{" "}
            <span style={{ color: "black" }}>
              <u>uwierzytelnianie dwuskładnikowe</u>
            </span>
          </Typography>
        </InfoStack>
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#0B1C1E",
  height: "100vh",
  gap: "15px",
});

const HeaderStack = styled(Stack)({
  height: "70px",
  backgroundColor: "#000000",
  width: "100%",
  borderBottom: "4px solid #50AAB2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const InfoStack = styled(Stack)({
  height: "50px",
  width: "100%",
  padding: "0 20px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#FDF1CB",
  borderRadius: 5,
});
