import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Person } from "@/types";
import { userUserStoreDefaultValues } from "./userUserStoreDefaultValues";
import type { UserStore } from "./useUserStore.types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...userUserStoreDefaultValues,
      setUser: (user: Person) =>
        set(() => ({
          ...user,
        })),
      setTeacherId: (id: string) => set(() => ({ teacherId: id })),
      setStudentId: (id: number) => set(() => ({ studentId: id })),
      setToken: (token: string) => set(() => ({ token })),
      logout: () => set(() => ({ ...userUserStoreDefaultValues })),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
