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
        set({
          ...user,
        }),
      logout: () => set({ ...userUserStoreDefaultValues }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
