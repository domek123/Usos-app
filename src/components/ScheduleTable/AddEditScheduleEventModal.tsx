import {
  FormTextField,
  ModalFooter,
  ModalHeader,
  SelectField,
  TeacherSelect,
} from "@/components";
import { useAddEditScheduleEvent, useFetchSemesterSubjects } from "@/hooks";
import { CustomForm, RowBetweenStack } from "@/styles";
import { Days, SubjectType, type ScheduleEvent, type Subject } from "@/types";
import { Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";
import { convertToDays, parseToHHMM } from "@/utils";
import { scheduleEventSchema } from "./AddEditScheduleEventModalValidation";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  subjectId: string;
  gradeType?: SubjectType;
  duration: number;
  description?: string;
  teacherId: string;
  day: number;
  startTime: number;
}

interface AddEditScheduleEventModalProps {
  event?: ScheduleEvent;
  day?: number;
  startTime?: number;
  semesterId: string;
}

export const AddEditScheduleEventModal = ({
  event,
  day,
  startTime,
  semesterId,
}: AddEditScheduleEventModalProps) => {
  const { t } = useTranslation();

  const { semester } = useFetchSemesterSubjects(semesterId);
  const subjects = useMemo(
    () => (semester?.subjects as Subject[]) || [],
    [semester]
  );

  const { addEditScheduleEventModal } = useAddEditScheduleEvent(event?.id);

  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      subjectId: event?.subject.id ?? "",
      gradeType: event?.gradeType,
      duration: event?.duration ?? 6,
      description: event?.description ?? "",
      teacherId: event?.teacher.teacherId ?? "",
      day: event?.day ?? day!,
      startTime: event?.startTime ?? startTime!,
    },
    resolver: zodResolver(scheduleEventSchema),
  });

  const subjectId = watch("subjectId");
  const gradeType = watch("gradeType");

  const selectedSubject = useMemo(
    () => subjects.find((s) => s.id === subjectId),
    [subjectId, subjects]
  );

  useEffect(() => {
    if (gradeType === SubjectType.EXAM) {
      setValue("teacherId", selectedSubject?.teacher?.teacherId ?? "");
    }
  }, [gradeType, selectedSubject, setValue]);

  return (
    <>
      <ModalHeader
        title={t(
          `subjects.addEditScheduleEventModal.${event ? "edit" : "add"}Title`
        )}
      />

      <CustomForm
        sx={{ width: "100%" }}
        onSubmit={handleSubmit((data) => {
          if (data.gradeType !== undefined) {
            addEditScheduleEventModal({
              ...data,
              gradeType: data.gradeType,
              semesterId: semesterId ?? "",
            });
          }
        })}
      >
        {day && (
          <Typography variant="h5">
            {t(`days.${Object.values(Days)[day - 1]}`)}
          </Typography>
        )}
        {event && (
          <>
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  label={t("subjects.addEditScheduleEventModal.day")}
                  options={[1, 2, 3, 4, 5].map((day) => ({
                    label: t(`days.${convertToDays(day)}`),
                    value: day,
                  }))}
                  value={watch("day")}
                  onChange={(val) => {
                    field.onChange(val);
                  }}
                />
              )}
            />
          </>
        )}
        <RowBetweenStack gap="10px">
          <Controller
            name="subjectId"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                disabled={subjects.length === 0}
                label={t("subjects.addEditScheduleEventModal.subject")}
                options={subjects.map((s) => ({
                  label: s.name,
                  value: s.id,
                }))}
                value={watch("subjectId")}
                onChange={(val) => {
                  field.onChange(val);
                }}
              />
            )}
          />

          <Controller
            name="gradeType"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label={t("subjects.addEditScheduleEventModal.type")}
                options={(selectedSubject?.gradeTypes ?? []).map((type) => ({
                  label: t(`gradeType.${type}`),
                  value: type,
                }))}
                value={watch("gradeType")}
                disabled={!subjectId}
              />
            )}
          />
        </RowBetweenStack>

        <FormTextField
          label={t("subjects.addEditScheduleEventModal.description")}
          {...register("description")}
          errorHandler={errors.description}
        />

        {startTime !== undefined && (
          <Typography>
            {t("subjects.addEditScheduleEventModal.startTime")}:{" "}
            {parseToHHMM(420 + 15 * startTime)}
          </Typography>
        )}
        <RowBetweenStack gap="10px">
          {event && (
            <Controller
              name="startTime"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  label={t("subjects.addEditScheduleEventModal.startTime")}
                  options={Array.from({ length: 51 }, (_, i) => i).map((d) => ({
                    label: parseToHHMM(d, true),
                    value: d,
                  }))}
                  value={watch("startTime")}
                />
              )}
            />
          )}
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label={t("subjects.addEditScheduleEventModal.duration")}
                options={[3, 6, 9].map((d) => ({
                  label: parseToHHMM(15 * d),
                  value: d,
                }))}
                value={watch("duration")}
              />
            )}
          />
        </RowBetweenStack>

        <Controller
          name="teacherId"
          control={control}
          render={({ field }) => {
            return (
              <TeacherSelect value={field.value} setValue={field.onChange} />
            );
          }}
        />
        <ModalFooter text={t(`common.${event ? "edit" : "add"}`)} />
      </CustomForm>
    </>
  );
};
