import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SuccessResetPage } from "./SuccessResetPage";

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (success) {
    return <SuccessResetPage />;
  }

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
        }}
      >
        <Stack spacing={3}>
          <Box>
            <MuiLink
              component="button"
              variant="body2"
              onClick={() => navigate("/login")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                mb: 2,
                color: "#5E50EF",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 18 }} />
              {t("forgotPassword.backToLogin") || "Back to Login"}
            </MuiLink>
          </Box>

          <Typography variant="h5" component="h1">
            {t("forgotPassword.title")}
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label={t("login.email")}
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            autoFocus
          />

          <Box sx={{ position: "relative" }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              //   onClick={handleSubmit}
              disabled={isLoading || !email}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                t("forgotPassword.button")
              )}
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ForgotPassword;
