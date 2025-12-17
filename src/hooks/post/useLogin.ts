import { useMutation } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useUserStore } from "@/stores";
import { useNavigate } from "react-router-dom";
import type { Person } from "@/types";

type LoginResponse = {
  person: Person;
  teacherId?: string;
  studentId?: number;
  accessToken: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { setUser, setStudentId, setTeacherId, setToken } = useUserStore();
  const navigate = useNavigate();

  const { mutate, error, isPending } = useMutation<
    LoginResponse,
    Error,
    LoginPayload
  >({
    mutationFn: async (payload: LoginPayload): Promise<LoginResponse> => {
      const response = await api.post<LoginResponse>(`/auth/login`, payload);

      return response;
    },
    onSuccess: (data: LoginResponse) => {
      setUser(data.person);
      setToken(data.accessToken);
      if (data.teacherId) setTeacherId(data.teacherId);
      if (data.studentId) setStudentId(data.studentId);
      navigate("/dashboard");
    },

    onError: (err) => {
      console.error("Login failed:", err);
    },
  });

  return {
    login: (payload: LoginPayload) => mutate(payload),
    error,
    isLoading: isPending,
  };
};
