import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Mission {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  xp: number;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

interface MissionStore {
  missions: Mission[];
  addMission: (
    mission: Omit<Mission, "id" | "createdAt" | "completed" | "completedAt">,
  ) => void;
  completeMission: (id: string) => void;
  removeMission: (id: string) => void;
}

export const useMissionStore = create<MissionStore>()(
  persist(
    (set) => ({
      missions: [],
      addMission: (mission) =>
        set((state) => ({
          missions: [
            ...state.missions,
            {
              ...mission,
              id: crypto.randomUUID(),
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      completeMission: (id) =>
        set((state) => ({
          missions: state.missions.map((m) =>
            m.id === id
              ? { ...m, completed: true, completedAt: new Date().toISOString() }
              : m,
          ),
        })),
      removeMission: (id) =>
        set((state) => ({
          missions: state.missions.filter((m) => m.id !== id),
        })),
    }),
    {
      name: "mission-storage",
    },
  ),
);
