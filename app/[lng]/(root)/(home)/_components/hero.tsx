"use client";

import { Button } from "@/components/ui/button";
import useTranslate from "@/hooks/use-translate";
import Link from "next/link";
import { IconCloudDemo } from "@/components/cards/icon-cloud";
import { ScrollBasedVelocityDemo } from "@/components/shared/scroll-velocity";

function Hero() {
  const t = useTranslate();

  return (
    <>
      <div className="container mx-auto grid min-h-[70vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-space-grotesk text-5xl font-bold">
            {t("heroTitle")}{" "}
            <span className="text-blue-500">{t("heroTitleSpan")}</span>
          </h1>
          <p className="text-muted-foreground">{t("heroDescription")}</p>
          <div className="flex gap-4">
            <Link href={"/courses"}>
              <Button variant={"outline"} size={"lg"} rounded={"full"}>
                {t("findCourses")}
              </Button>
            </Link>
            <Link href={"/courses"}>
              <Button size={"lg"} rounded={"full"}>
                {t("blogs")}
              </Button>
            </Link>
          </div>
        </div>

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
