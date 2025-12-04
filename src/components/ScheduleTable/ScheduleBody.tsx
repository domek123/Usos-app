import { StyledTableCell } from "@/styles";
import { theme } from "@/theme";
import { TableBody, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchScheduleEvents } from "@/hooks";
import { useModalContext } from "@/context";
import { findEventAt, isCoveredByEvent } from "./utils";
import { ScheduleEventInfoModal } from "./ScheduleInfoModal";
import { AddEditScheduleEventModal } from "./AddEditScheduleEventModal";

export const ScheduleTableBody = ({ semesterId }: { semesterId: string }) => {
  const { t } = useTranslation();
  const { scheduleEvents } = useFetchScheduleEvents(semesterId);
  const { setModalContent } = useModalContext();

  let hour = 7;

  const data = Array.from({ length: 56 }, () => [0, 1, 2, 3, 4, 5]);

  return (
    <TableBody>
      {data.map((row, rowIdx) => (
        <TableRow key={rowIdx}>
          {row.map((_, colIdx) => {
            if (colIdx === 0 && rowIdx % 4 === 0) {
              return (
                <StyledTableCell
                  key={colIdx}
                  rowSpan={4}
                  align="center"
                  sx={{ color: theme.palette.primary.main }}
                  padding="none"
                >
                  <Typography>{hour++}:00</Typography>
                </StyledTableCell>
              );
            }

            const event = findEventAt(scheduleEvents, rowIdx, colIdx);
            if (event) {
              return (
                <StyledTableCell
                  key={colIdx}
                  rowSpan={event.duration}
                  onClick={() => {
                    setModalContent(
                      <ScheduleEventInfoModal
                        event={event}
                        semesterId={semesterId}
                      />
                    );
                  }}
                  align="center"
                  sx={{
                    backgroundColor: "#fff3b0",
                    border: "1px solid #e0d480",
                    padding: "4px",
                  }}
                >
                  <Typography fontWeight={600}>
                    {event.subject.name} - {t(`gradeType.${event.gradeType}`)}
                  </Typography>
                  <Typography variant="caption">{event.description}</Typography>
                </StyledTableCell>
              );
            }

            if (
              isCoveredByEvent(scheduleEvents, rowIdx, colIdx) ||
              (colIdx === 0 && rowIdx % 4 !== 0)
            )
              return null;
            if (
              findEventAt(scheduleEvents, rowIdx + 1, colIdx) ||
              isCoveredByEvent(scheduleEvents, rowIdx - 1, colIdx)
            )
              return <StyledTableCell sx={{ backgroundColor: "lightgray" }} />;
            return (
              <StyledTableCell
                onClick={() => {
                  setModalContent(
                    <AddEditScheduleEventModal
                      day={colIdx}
                      startTime={rowIdx}
                      semesterId={semesterId}
                    />
                  );
                }}
                width={"18%"}
                key={colIdx}
                sx={{
                  height: "20px",
                  backgroundColor: "lightgray",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};
