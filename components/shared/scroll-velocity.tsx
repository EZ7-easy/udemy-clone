"use client";

import { useState, useEffect } from "react";
import { VelocityScroll } from "../magicui/Velocity-scroll";

export function ScrollBasedVelocityDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating network delay or resource loading
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 2000); // Adjust this time to simulate slow loading (e.g., 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        // Loading spinner or message
        <div className="flex flex-col justify-center items-center text-gray-600">
          <div className="flex space-x-2">
            <div className="size-3 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="size-3 bg-gray-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="size-3 bg-gray-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      ) : (
        // Main content after loading
        <VelocityScroll
          text="Ta'limot.uz saytidan sifatli kurslar xarid qiling"
          defaultVelocity={1}
          className="font-space-grotesk text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[4rem]"
        />
      )}
    </div>
  );
}
