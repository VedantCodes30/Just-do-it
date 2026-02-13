import { Card } from "./ui/Card";
import { CheckCircle2 } from "lucide-react";

const CALLS_TO_ACTION = [
  "Complete 3 missions",
  "Finish 1 hard task",
  "Maintain streak",
  "No social media until 12PM",
  "Drink 3L Water",
];

export function DailyChallenges() {
  // In a real app, these would be persisted and generated daily.
  // For MVP, we just show static ones or random ones.
  const challenges = CALLS_TO_ACTION.slice(0, 3);

  return (
    <Card className="mb-8 p-6 bg-black text-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(100,100,100,1)]">
      <h3 className="font-heading font-black text-2xl uppercase mb-4 text-yellow-400 tracking-wider">
        Daily Protocol
      </h3>
      <ul className="space-y-3">
        {challenges.map((challenge, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-white rounded-none flex items-center justify-center">
              {/* Placeholder for checked state */}
            </div>
            <span className="font-bold uppercase tracking-wide text-sm">
              {challenge}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs font-mono text-gray-400 uppercase">
        Resets in 14:00:00
      </div>
    </Card>
  );
}
