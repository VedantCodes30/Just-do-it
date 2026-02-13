import { Mission, useMissionStore } from "@/store/useMissionStore";
import { useUserStore } from "@/store/useUserStore";
import { Check, Trash2, Circle } from "lucide-react";
import { clsx } from "clsx";
import { Card } from "./ui/Card";

interface MissionItemProps {
  mission: Mission;
}

export function MissionItem({ mission }: MissionItemProps) {
  const { completeMission, removeMission } = useMissionStore();
  const { addXp, updateStreak } = useUserStore();

  const handleComplete = () => {
    if (mission.completed) return;
    completeMission(mission.id);
    addXp(mission.xp);
    updateStreak();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeMission(mission.id);
  };

  return (
    <Card
      className={clsx(
        "flex items-center justify-between gap-4 p-5 transition-all group border-l-4",
        {
          "border-green-500 bg-green-900/10 opacity-60": mission.completed,
          "border-[var(--color-brand-orange)] hover:bg-[var(--color-brand-surface)]/80 cursor-pointer":
            !mission.completed,
        },
      )}
      onClick={!mission.completed ? handleComplete : undefined}
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all",
            {
              "bg-green-500 text-white shadow-lg shadow-green-500/30":
                mission.completed,
              "bg-white/10 text-transparent group-hover:text-white/30 border border-white/20 group-hover:border-[var(--color-brand-orange)]":
                !mission.completed,
            },
          )}
        >
          {mission.completed ? (
            <Check className="w-5 h-5" strokeWidth={3} />
          ) : (
            <Circle className="w-6 h-6 text-transparent" />
          )}
        </div>

        <div>
          <h3
            className={clsx("font-bold text-lg uppercase transition-all", {
              "line-through text-white/40": mission.completed,
              "text-white": !mission.completed,
            })}
          >
            {mission.title}
          </h3>
          <div className="flex gap-2 text-xs font-bold mt-1">
            <span
              className={clsx("px-2 py-0.5 rounded text-black", {
                "bg-green-400": mission.difficulty === "Easy",
                "bg-blue-400": mission.difficulty === "Medium",
                "bg-red-400": mission.difficulty === "Hard",
              })}
            >
              {mission.difficulty}
            </span>
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded">
              +{mission.xp} XP
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="p-2 text-white/30 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Delete mission"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </Card>
  );
}
