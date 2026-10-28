"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ANNOUNCEMENT_MESSAGES } from "@/data/navigation";

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? ANNOUNCEMENT_MESSAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
  };

  return (
    <div className="bg-[#DD592A] text-white text-[11px] sm:text-xs py-2 px-3 tracking-wider font-semibold uppercase shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="text-white/80 hover:text-white transition-colors p-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="text-center font-bold truncate px-2 tracking-wide">
          <Link href="/shop" className="hover:opacity-90 transition-opacity">
            {ANNOUNCEMENT_MESSAGES[index]}
          </Link>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="text-white/80 hover:text-white transition-colors p-1"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
