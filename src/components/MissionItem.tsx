import { Mission, useMissionStore } from "@/store/useMissionStore";
import { useUserStore } from "@/store/useUserStore";
import { Check, Trash2 } from "lucide-react";
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
        "flex items-center justify-between gap-4 p-4 transition-all group",
        {
          "opacity-50 grayscale": mission.completed,
          "hover:bg-yellow-50 cursor-pointer": !mission.completed,
        },
      )}
      onClick={!mission.completed ? handleComplete : undefined}
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            "w-8 h-8 border-3 border-black flex items-center justify-center transition-all",
            {
              "bg-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]":
                mission.completed,
              "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]":
                !mission.completed,
            },
          )}
        >
          {mission.completed && (
            <Check className="w-6 h-6 text-white" strokeWidth={3} />
          )}
        </div>

        <div>
          <h3
            className={clsx("font-heading font-bold text-lg uppercase", {
              "line-through decoration-3 decoration-black": mission.completed,
            })}
          >
            {mission.title}
          </h3>
          <div className="flex gap-2 text-xs font-bold mt-1">
            <span
              className={clsx("px-2 py-0.5 border-2 border-black", {
                "bg-green-200": mission.difficulty === "Easy",
                "bg-blue-200": mission.difficulty === "Medium",
                "bg-red-200": mission.difficulty === "Hard",
              })}
            >
              {mission.difficulty}
            </span>
            <span className="bg-yellow-300 px-2 py-0.5 border-2 border-black">
              +{mission.xp} XP
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="p-2 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Delete mission"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </Card>
  );
}
