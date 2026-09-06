import React from "react";
import { HeroWireframe } from "@/components/home/HeroWireframe";
import { MetricsWireframe } from "@/components/home/MetricsWireframe";
import { IntroWireframe } from "@/components/home/IntroWireframe";
import { RegistrationPreviewCard } from "@/components/home/RegistrationPreviewCard";
import { PosterSubmissionPreviewCard } from "@/components/home/PosterSubmissionPreviewCard";

export default function HomePage() {
  return (
    <div className="space-y-6 pb-20">
      <HeroWireframe />
      <MetricsWireframe />
      <IntroWireframe />
      <RegistrationPreviewCard />
      <PosterSubmissionPreviewCard />
    </div>
  );
}
