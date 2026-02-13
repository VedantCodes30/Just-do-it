import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  addXp: (amount: number) => void;
  updateStreak: () => void;
}

const XP_PER_LEVEL = 100;

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: null,
      addXp: (amount) =>
        set((state) => {
          const newXp = state.xp + amount;
          // Simple level formula: Level increases every 100 XP
          const newLevel = Math.floor(newXp / XP_PER_LEVEL) + 1;
          return { xp: newXp, level: newLevel };
        }),
      updateStreak: () =>
        set((state) => {
          const today = new Date().toDateString();
          const lastActive = state.lastActiveDate
            ? new Date(state.lastActiveDate).toDateString()
            : null;

          if (lastActive === today) {
            return {}; // Already updated today
          }

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayString = yesterday.toDateString();

          if (lastActive === yesterdayString) {
            // Consecutive day
            return {
              streak: state.streak + 1,
              lastActiveDate: new Date().toISOString(),
            };
          } else {
            // Streak broken or first day
            // If never active, streak logic depends on if we want to start at 1?
            // Assuming first action starts streak at 1.
            return {
              streak: 1,
              lastActiveDate: new Date().toISOString(),
            };
          }
        }),
    }),
    {
      name: "user-storage",
    },
  ),
);
