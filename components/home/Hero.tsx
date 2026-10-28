"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-4 pb-12 sm:pb-16 lg:pb-20 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Expressive Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-7 z-10">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FBE7DE] text-[#DD592A] rounded-full uppercase tracking-wider text-[10px] sm:text-[11px] font-extrabold border border-[#F2D8CB]">
                ✨ Trendy Hair Essentials
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-espresso font-extrabold leading-[1.08] tracking-tight">
                Little Details.
                <br />
                <span className="text-[#DD592A]">Beautifully You.</span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed max-w-md font-medium">
              Discover aesthetic finishing touches for everyday styling, date nights, and thoughtful gifting. Designed for effortless chic and damage-free hold.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/shop"
                className="py-3.5 px-6 bg-[#DD592A] hover:bg-[#C74718] text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-salty hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/collections/hair-claws"
                className="py-3.5 px-6 bg-white hover:bg-[#FBE7DE] text-[#DD592A] border-2 border-[#DD592A] text-xs uppercase tracking-wider font-bold rounded-xl transition-all duration-300 text-center shadow-sm"
              >
                Shop New Arrivals
              </Link>
            </div>
          </div>

          {/* Right Column: Custom Editorial Accessories Banner */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-floating border border-espresso/10 bg-champagne-light">
              <Image
                src="/images/banners/hero_editorial_tray.jpg"
                alt="Fashion Alley luxury hair claws and silk accessories editorial campaign"
                fill
                priority
                className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
