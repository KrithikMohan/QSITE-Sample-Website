import React from "react";
import { SupportFaqWireframe } from "@/components/support/SupportFaqWireframe";
import { ContactFormWireframe } from "@/components/support/ContactFormWireframe";
import { Badge } from "@/components/ui/Badge";
import { LifeBuoy } from "lucide-react";

export const metadata = {
  title: "Support & FAQ — Q-SITE 2026 Conference Preview",
  description: "Logistics FAQ, travel guidelines, and organizer direct contact channels.",
};

export default function SupportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="cyan">
          <LifeBuoy className="w-3 h-3 text-cyan-400" />
          Support & Assistance
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Conference Support & FAQ [Preview]
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
          Logistics documentation, travel advice, guidelines for attendees, and direct contact channels for the organizing team.
        </p>
      </div>

      <SupportFaqWireframe />
      <ContactFormWireframe />
    </div>
  );
}
