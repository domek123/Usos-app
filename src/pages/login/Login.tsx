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
import { useLoginData } from "./useLoginData";
import { useLogin } from "@/hooks";
import { FormTextField } from "@/components";

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useLoginData();

  const { login, error, isLoading } = useLogin();

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
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            {t("login.title")}
          </Typography>

          {error && (
            <Alert severity="error">{t("login.invalidCredentials")}</Alert>
          )}
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
          <FormTextField
            label={t("login.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            size="medium"
            isPasswordField={true}
          />

          <Box sx={{ position: "relative" }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              disabled={isLoading || !email || !password}
              onClick={() => login({ email, password })}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                t("login.button")
              )}
            </Button>
          </Box>

          <Stack alignItems="center">
            {/* <MuiLink
              component="button"
              variant="body2"
              onClick={() => navigate("/forgot-password")}
              sx={{
                color: "#5E50EF",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Typography>{t("login.forgotPassword")}</Typography>
            </MuiLink> */}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
