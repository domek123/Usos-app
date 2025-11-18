import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { StudentDto } from "@/types";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useAddEditStudent = (personId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (student: StudentDto) => {
      if (personId) {
        return await api.put(`/student/${personId}`, student);
      } else {
        return await api.post("/student", student);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania/edycji studenta:", error);
    },
  });

  return { addEditStudent: (student: StudentDto) => mutate(student) };
};
