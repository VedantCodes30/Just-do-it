import { useState } from "react";
import { useMissionStore } from "@/store/useMissionStore";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card } from "./ui/Card";
import { Plus } from "lucide-react";

export function CreateMission() {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">(
    "Medium",
  );
  const { addMission } = useMissionStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    let xp = 10;
    if (difficulty === "Medium") xp = 20;
    if (difficulty === "Hard") xp = 50;

    addMission({
      title,
      difficulty,
      xp,
    });
    setTitle("");
  };

  return (
    <Card className="mb-8">
      <h3 className="font-bold text-xl mb-4 text-white">
        New Mission Protocol
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="ENTER MISSION OBJECTIVE..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="font-medium tracking-wide"
        />

        <div className="flex gap-4">
          <div className="relative flex-1">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full p-4 rounded-2xl bg-[var(--color-brand-surface)] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] transition-all appearance-none font-bold"
            >
              <option value="Easy">Easy (10 XP)</option>
              <option value="Medium">Medium (20 XP)</option>
              <option value="Hard">Hard (50 XP)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
              ▼
            </div>
          </div>

          <Button type="submit" className="flex-1" variant="primary">
            <Plus className="w-5 h-5" />
            INITIATE
          </Button>
        </div>
      </form>
    </Card>
  );
}
