import { Stack, Paper, Typography, Alert, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const SuccessResetPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" component="h1">
            {t("forgotPassword.successTitle")}
          </Typography>

          <Alert severity="success">{t("forgotPassword.successMessage")}</Alert>

          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            startIcon={<ArrowBackIcon />}
          >
            {t("forgotPassword.backToLogin")}
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};
