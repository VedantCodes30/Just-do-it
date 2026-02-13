import { useUserStore } from "@/store/useUserStore";
import { Flame } from "lucide-react";
import { Card } from "./ui/Card";

export function Header() {
  const { level, xp, streak } = useUserStore();
  const xpProgress = xp % 100; // Assuming 100 XP per level

  return (
    <Card className="flex flex-col gap-6 mb-8 sticky top-4 z-50 backdrop-blur-md bg-[var(--color-brand-surface)]/90 border-white/10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-orange-gradient w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/20">
            {level}
          </div>
          <div>
            <h2 className="font-bold text-xl text-white leading-none">
              Level {level}
            </h2>
            <p className="text-sm font-medium text-[var(--color-brand-muted)]">
              {xp} Total XP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-orange-gradient/10 text-orange-500 px-4 py-2 rounded-full border border-orange-500/20">
            <Flame className="w-5 h-5 fill-current animate-pulse" />
            <span className="font-bold text-lg">{streak}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-3 rounded-full bg-white/5 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-orange-gradient transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${xpProgress}%` }}
        />
      </div>
      <div className="text-right text-xs font-medium text-[var(--color-brand-muted)] mt-[-1rem]">
        {xpProgress} / 100 XP TO NEXT LEVEL
      </div>
    </Card>
  );
}
