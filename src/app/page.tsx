"use client";

import { CreateMission } from "@/components/CreateMission";
import { Header } from "@/components/Header";
import { MissionItem } from "@/components/MissionItem";
import { DailyChallenges } from "@/components/DailyChallenges";
import { useMissionStore } from "@/store/useMissionStore";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const { missions } = useMissionStore();
  const { streak } = useUserStore();

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
    <main className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans pb-20">
      <div className="max-w-2xl mx-auto">
        <Header />

        <DailyChallenges />

        <CreateMission />

        <div className="space-y-6">
          <div>
            <h2 className="font-heading font-black text-3xl mb-4 uppercase tracking-tighter flex items-center gap-2">
              <span className="bg-black text-white px-2">Active</span>
              <span>Missions</span>
            </h2>
            <div className="flex flex-col gap-4 mission-list">
              {activeMissions.length === 0 ? (
                <div className="text-center p-8 border-3 border-black bg-white border-dashed text-gray-500 font-bold uppercase">
                  No active missions. Stay hard.
                </div>
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
              <h2 className="font-heading font-black text-2xl mb-4 uppercase tracking-tighter text-gray-600 mt-8">
                Completed Log
              </h2>
              <div className="flex flex-col gap-4">
                {completedMissions.map((mission) => (
                  <MissionItem key={mission.id} mission={mission} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
