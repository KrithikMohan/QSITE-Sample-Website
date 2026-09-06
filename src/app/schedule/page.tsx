import React from "react";
import { ScheduleWireframe } from "@/components/schedule/ScheduleWireframe";

export const metadata = {
  title: "Schedule — Q-SITE 2026 Conference Preview",
  description: "Chronological agenda skeleton mapping out keynote talks, breakout panels, and poster sessions.",
};

export default function SchedulePage() {
  return (
    <div className="pb-20">
      <ScheduleWireframe />
    </div>
  );
}
