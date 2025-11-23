import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";

type EnrollmentPayload = { studentId: number; subjectIds: string[] };

export const useDeleteStudentEnrollment = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (data: EnrollmentPayload) => {
      const { studentId, subjectIds } = data;

      if (!subjectIds || subjectIds.length === 0) return;

      if (subjectIds.length === 1) {
        return await api.delete(`/enrollment/${studentId}/${subjectIds[0]}`);
      }

      return await api.delete(`/enrollment/${studentId}`, {
        data: { subjectIds },
      });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["enrollment", variables.studentId],
      });
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania enrollmentu:", error);
    },
  });

  return {
    deleteEnrollment: (payload: EnrollmentPayload) => mutate(payload),
  };
};
