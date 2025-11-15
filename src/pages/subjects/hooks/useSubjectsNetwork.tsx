import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { SubjectDto, Subject } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useSubjectsNetwork = (semesterId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();
  const [subjectId, setSubjectId] = useState<string>();

  //fetch subjects in selected semester
  const { data, isLoading } = useQuery({
    queryKey: ["subjects", semesterId],
    queryFn: async (): Promise<Subject[]> => {
      const data = await api.get<Subject[]>("/subject/" + semesterId);
      return data;
    },
    enabled: semesterId != "",
  });

  //create or update subject
  const { mutate } = useMutation({
    mutationFn: async (subject: SubjectDto) => {
      if (!semesterId) return null;
      if (subjectId) {
        return await api.put(`/subject/${subjectId}`, subject);
      } else {
        return await api.post("/subject", subject);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects", semesterId] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania/edycji przedmiotu:", error);
    },
  });

  const onSubmit = (
    data: Pick<Subject, "name" | "ects"> & { teacherId: string }
  ) => {
    mutate({
      ...data,
      semesterId: semesterId!,
    });
  };

  return { subjects: data || [], isLoading, onSubmit, setSubjectId };
};
