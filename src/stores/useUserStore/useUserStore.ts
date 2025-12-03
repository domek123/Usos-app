import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Person } from "@/types";
import { userStoreDefaultValues } from "./userStoreDefaultValues";
import type { UserStore } from "./useUserStore.types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...userStoreDefaultValues,
      setUser: (user: Person) =>
        set({
          ...user,
        }),
      logout: () => set({ ...userStoreDefaultValues }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
