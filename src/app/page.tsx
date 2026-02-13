"use client";

import { CreateMission } from "@/components/CreateMission";
import { Header } from "@/components/Header";
import { MissionItem } from "@/components/MissionItem";
import { DailyChallenges } from "@/components/DailyChallenges";
import { useMissionStore } from "@/store/useMissionStore";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const { missions } = useMissionStore();

  // Hydration fix for zustand persist
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && missions.length > 0) {
      gsap.fromTo(
        ".mission-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      );
    }
  }, [mounted, missions.length]); // Re-run when missions change length (add/remove)

  if (!mounted) return null;

  const activeMissions = missions.filter((m) => !m.completed);
  const completedMissions = missions.filter((m) => m.completed);

  return (
    <main className="min-h-screen p-4 md:p-8 font-sans pb-20 max-w-lg mx-auto">
      <Header />

      <DailyChallenges />

      <CreateMission />

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <span className="w-2 h-8 bg-orange-gradient rounded-full"></span>
            ACTIVE{" "}
            <span className="serif-accent bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
              Missions
            </span>
          </h2>
          <div className="flex flex-col gap-4 mission-list">
            {activeMissions.length === 0 ? (
              <Card className="text-center p-12 bg-[var(--color-brand-surface)]/50 border border-dashed border-white/10 text-[var(--color-brand-muted)] font-medium">
                No active missions. <br />{" "}
                <span className="text-white font-bold mt-2 block">
                  Stay hard.
                </span>
              </Card>
            ) : (
              activeMissions.map((mission) => (
                <div key={mission.id} className="mission-item">
                  <MissionItem mission={mission} />
                </div>
              ))
            )}
          </div>
        </div>

        {completedMissions.length > 0 && (
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <h2 className="text-xl font-bold mb-6 text-[var(--color-brand-muted)] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-muted)]"></span>
              COMPLETED LOG
            </h2>
            <div className="flex flex-col gap-4">
              {completedMissions.map((mission) => (
                <MissionItem key={mission.id} mission={mission} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
