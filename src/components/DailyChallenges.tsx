import { Card } from "./ui/Card";
import { Circle } from "lucide-react"; // Import Circle

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
    <Card className="mb-8">
      <h3 className="font-bold text-xl mb-6 text-white tracking-tight flex items-center gap-2">
        <span className="text-[var(--color-brand-orange)]">DAILY</span> PROTOCOL
      </h3>
      <ul className="space-y-4">
        {challenges.map((challenge, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="text-white/20 group-hover:text-[var(--color-brand-orange)] transition-colors">
              <Circle className="w-6 h-6" /> {/* Placeholder for unchecked */}
            </div>
            <span className="font-medium text-[var(--color-brand-text)] group-hover:text-white transition-colors">
              {challenge}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xs font-mono text-[var(--color-brand-muted)] uppercase tracking-widest border-t border-white/10 pt-4">
        Resets in 14:00:00
      </div>
    </Card>
  );
}
