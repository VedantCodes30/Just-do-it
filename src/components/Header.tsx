import { useUserStore } from "@/store/useUserStore";
import { Flame, Trophy, Zap } from "lucide-react";
import { Card } from "./ui/Card";

export function Header() {
  const { level, xp, streak } = useUserStore();
  const xpProgress = xp % 100; // Assuming 100 XP per level

  return (
    <Card className="flex flex-col gap-4 mb-8 bg-white sticky top-4 z-10 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-2 w-12 h-12 flex items-center justify-center font-heading font-bold text-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {level}
          </div>
          <div>
            <h2 className="font-heading font-bold text-xl uppercase leading-none">
              Level {level}
            </h2>
            <p className="text-sm font-medium text-gray-600">{xp} Total XP</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 border-3 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Flame className="w-5 h-5 fill-current" />
            <span>{streak}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-6 border-3 border-black bg-white">
        <div
          className="absolute top-0 left-0 h-full bg-main transition-all duration-500 ease-out border-r-3 border-black"
          style={{ width: `${xpProgress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-widest z-10">
          {xpProgress} / 100 XP TO NEXT LEVEL
        </div>
      </div>
    </Card>
  );
}
