"use client";

import { IconCloudDemo } from "@/components/cards/icon-cloud";
import { ScrollBasedVelocityDemo } from "@/components/shared/scroll-velocity";
import MainHero from "./main-hero";

function Hero() {
  return (
    <>
      <div className="container mx-auto grid min-h-[70vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <MainHero />

        <div className="self-center">
          <IconCloudDemo />
        </div>
      </div>

      <div className="w-full">
        <ScrollBasedVelocityDemo />
      </div>
    </>
  );
}

export default Hero;
