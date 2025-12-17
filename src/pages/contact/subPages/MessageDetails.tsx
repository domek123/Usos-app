import { Stack, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import type { Message } from "@/types";
import { CustomButton } from "@/components";

export const MessageDetails = () => {
  const { t } = useTranslation();
  const { state } = useLocation();
  const navigate = useNavigate();

  const message: Message = state?.message;

  if (!message) {
    return (
      <Typography paddingTop="10px" textAlign={"center"}>
        {t("contact.messageError")}
      </Typography>
    );
  }

  return (
    <Stack spacing={2} padding={"10px"}>
      <Paper sx={{ p: 2 }}>
        <Typography>
          <strong>{t("contact.from")}:</strong> {message.from}
        </Typography>
        <Typography>
          <strong>{t("contact.to")}:</strong> {message.to}
        </Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography>
          <strong>{t("contact.subject")}</strong>: {message.subject}
        </Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography>
          <strong>{t("contact.message")}</strong>: {message.message}
        </Typography>
      </Paper>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <CustomButton text={t("common.back")} onClick={() => navigate(-1)} />
        <CustomButton
          text={t("contact.reply")}
          variant="contained"
          onClick={() =>
            navigate("/contact/create", { state: { emailTo: message.from } })
          }
          startIcon={<SendIcon />}
        />
      </Stack>
    </Stack>
  );
};
