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
    <Card className="mb-8 p-6 bg-yellow-50 border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="font-heading font-bold text-xl uppercase mb-4">
        New Mission Protocol
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="ENTER MISSION OBJECTIVE..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="uppercase font-bold tracking-wide"
        />

        <div className="flex gap-4">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as any)}
            className="brutal-input flex-1 uppercase font-bold"
          >
            <option value="Easy">Easy (10 XP)</option>
            <option value="Medium">Medium (20 XP)</option>
            <option value="Hard">Hard (50 XP)</option>
          </select>

          <Button type="submit" className="flex-1">
            <Plus className="w-5 h-5" />
            INITIATE
          </Button>
        </div>
      </form>
    </Card>
  );
}
