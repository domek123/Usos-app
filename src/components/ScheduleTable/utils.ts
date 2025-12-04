import type { ScheduleEvent } from "@/types";

export const findEventAt = (
  events: ScheduleEvent[],
  rowIdx: number,
  colIdx: number
) => events.find((ev) => ev.day === colIdx && ev.startTime === rowIdx);

export const isCoveredByEvent = (
  events: ScheduleEvent[],
  rowIdx: number,
  colIdx: number
) =>
  events.some(
    (ev) =>
      ev.day === colIdx &&
      rowIdx > ev.startTime &&
      rowIdx < ev.startTime + ev.duration
  );
