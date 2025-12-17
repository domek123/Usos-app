import { Stack, TextField, Typography, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCreateMessage } from "@/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton } from "@/components";

export const CreateMessageContent = () => {
  const { t } = useTranslation();

  const { state } = useLocation();
  const emailTo: string = state?.emailTo;
  const navigate = useNavigate();

  const [email, setEmail] = useState(emailTo || "");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const { createMessage, isLoading } = useCreateMessage();

  const reset = () => {
    setEmail("");
    setSubject("");
    setContent("");
  };

  return (
    <Container>
      <Typography variant="h5">{t("contact.writeMessage")}</Typography>

      <TextField
        label={t("contact.recipientEmail")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label={t("contact.subject")}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        type="email"
      />

      <TextField
        label={t("contact.message")}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={8}
      />

      <Stack direction="row" justifyContent="flex-end" gap="10px">
        {emailTo && (
          <CustomButton text={t("common.back")} onClick={() => navigate(-1)} />
        )}
        <CustomButton
          variant="contained"
          startIcon={<SendIcon />}
          disabled={isLoading}
          onClick={() => {
            createMessage({ to: email, subject, message: content });
            reset();
          }}
          sx={{ backgroundColor: "#5E50EF" }}
          text={t("contact.send")}
        />
      </Stack>
    </Container>
  );
};

const Container = styled(Stack)({
  padding: "20px",
  margin: "10px",
  gap: "10px",
});
