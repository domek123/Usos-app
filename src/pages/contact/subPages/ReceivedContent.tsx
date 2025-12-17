import { useFetchMessage, useMarkAsRead } from "@/hooks";
import { MessageType } from "@/types";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export const ReceivedContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { messages } = useFetchMessage(MessageType.RECEIVED);
  const { markAsRead } = useMarkAsRead();

  if (id) {
    return <Outlet />;
  }

  return (
    <>
      <Typography sx={{ padding: "10px" }}>
        {t("contact.messagesReceived")} ({messages.length})
      </Typography>
      <Divider />
      <List sx={{ flex: 1, overflow: "auto", padding: "0" }}>
        {messages.map((message) => (
          <div key={message.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (!message.read) markAsRead(message.id);
                  navigate(message.id, { state: { message } });
                }}
                sx={{
                  backgroundColor: !message.read ? "transparent" : "#f0f0f0",
                }}
              >
                <ListItemText
                  primary={
                    <Stack direction="row" gap="10px">
                      <Typography fontWeight={message.read ? 400 : 700}>
                        {message.subject}
                      </Typography>
                      {!message.read && (
                        <Chip
                          label={t("contact.new")}
                          size="small"
                          sx={{ backgroundColor: "#5E50EF", color: "white" }}
                        />
                      )}
                    </Stack>
                  }
                  secondary={`${t("contact.from")}: ${message.from}`}
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
