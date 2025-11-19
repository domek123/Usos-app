import type { Faculty } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FacultyStore {
  faculty: Faculty | null;
  setFaculty: (faculty: Faculty | null) => void;
}

export const useFacultyStore = create<FacultyStore>()(
  persist(
    (set) => ({
      faculty: null,
      setFaculty: (faculty) => set({ faculty }),
    }),
    {
      name: "faculty-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
