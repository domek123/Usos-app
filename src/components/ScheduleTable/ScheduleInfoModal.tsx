import { CustomButton, ModalHeader } from "@/components";
import { useModalContext } from "@/context";
import { theme } from "@/theme";
import { PermissionType, type ScheduleEvent } from "@/types";
import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDeleteScheduleEvent } from "@/hooks";
import { convertToDays, parseToHHMM } from "@/utils";
import { AddEditScheduleEventModal } from "./AddEditScheduleEventModal";
import { useUserStore } from "@/stores";

export const ScheduleEventInfoModal = ({
  event,
  semesterId,
}: {
  event: ScheduleEvent;
  semesterId: string;
}) => {
  const { t } = useTranslation();
  const { setModalContent } = useModalContext();
  const { deleteScheduleEvent } = useDeleteScheduleEvent(semesterId);
  const { role } = useUserStore();
  return (
    <Stack width={"100%"} gap="10px">
      <Stack>
        <ModalHeader title={event.subject.name} />
        <Divider />
      </Stack>

      <TableStack>
        <Typography>{t("subjects.detailsModal.subjectType")}:</Typography>
        <Typography>
          <b>{t(`gradeType.${event.gradeType}`)}</b>
        </Typography>
        <Typography>{t("subjects.detailsModal.term")}:</Typography>
        <Typography>
          <b>{t(`days.${convertToDays(event.day)}`)}</b>
        </Typography>
        <Typography>{t("subjects.detailsModal.hour")}:</Typography>
        <Typography>
          <b>
            {parseToHHMM(event.startTime, true)} -{" "}
            {parseToHHMM(event.startTime + event.duration, true)}
          </b>
        </Typography>
        {event.description.length > 0 && (
          <>
            <Typography>{t("subjects.detailsModal.details")}:</Typography>
            <Typography>
              <b>{event.description}</b>
            </Typography>
          </>
        )}
        <>
          <Typography>{t("subjects.detailsModal.teacher")}:</Typography>
          <Typography>
            <b>
              {event.teacher.title} {event.teacher.firstName}{" "}
              {event.teacher.lastName}
            </b>
          </Typography>
        </>
      </TableStack>
      {role === PermissionType.ADMIN && (
        <ButtonStack>
          <CustomButton
            text={t("common.delete")}
            variant="contained"
            onClick={() => deleteScheduleEvent(event.id)}
            sx={{ backgroundColor: "red" }}
          />
          <CustomButton
            text={t("common.edit")}
            variant="contained"
            onClick={() =>
              setModalContent(
                <AddEditScheduleEventModal
                  event={event}
                  semesterId={semesterId}
                />
              )
            }
            sx={{ backgroundColor: theme.palette.primary.main }}
          />
        </ButtonStack>
      )}
    </Stack>
  );
};

const TableStack = styled(Stack)({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  columnGap: "10px",
});

const ButtonStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
  gap: "10px",
  marginTop: "10px",
});

const Divider = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.grey["300"],
}));
