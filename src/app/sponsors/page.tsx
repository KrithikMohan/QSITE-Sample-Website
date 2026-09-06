import React from "react";
import { SponsorsWireframe } from "@/components/sponsors/SponsorsWireframe";

export const metadata = {
  title: "Sponsors — Q-SITE 2026 Conference Preview",
  description: "Partnership tiers, prospectus overview, and confirmed sponsor logo showcases.",
};

export default function SponsorsPage() {
  return (
    <div className="pb-20">
      <SponsorsWireframe />
    </div>
  );
}
