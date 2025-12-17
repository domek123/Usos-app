import { useFetchMessage } from "@/hooks";
import { MessageType } from "@/types";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const SentContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { messages } = useFetchMessage(MessageType.SENT);

  if (id) {
    return <Outlet />;
  }

  return (
    <>
      <Typography sx={{ padding: "10px" }}>
        {t("contact.messagesSent")} ({messages.length})
      </Typography>
      <Divider />
      <List sx={{ flex: 1, overflow: "auto", padding: "0" }}>
        {messages.map((message) => (
          <div key={message.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(message.id, { state: { message } });
                }}
              >
                <ListItemText
                  primary={
                    <Stack direction="row" gap="10px">
                      <Typography>{message.subject}</Typography>
                    </Stack>
                  }
                  secondary={`${t("contact.to")}: ${message.to}`}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};
