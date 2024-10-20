"use client";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import HeaderFill from "./_components/mainComponents/HeaderFill";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <HeaderFill />
      <section className="py-2  sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-2">
          <div className="relative">
            <div>
              <h1 className="mt-0 text-4xl font-bold text-white sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  BEYOND IDEAS!
                </span>
              </h1>
              <h1 className="mt-0 text-xl mx-2 font-bold text-white">
                <span className="text-transparent flex items-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  MUSIC
                  <Separator orientation="vertical" className="px-2" />
                  PODCASTS
                  <Separator orientation="vertical" className="px-2" />
                  STORIES
                </span>
              </h1>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
