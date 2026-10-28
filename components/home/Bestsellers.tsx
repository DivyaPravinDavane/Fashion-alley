"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestsellers = PRODUCTS.filter((p) => p.bestseller || p.rating! >= 4.8);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#FDFBF8] py-12 sm:py-16 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
              🔥 Most Popular
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-espresso font-extrabold">
              The Pieces Everyone Loves
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full bg-white border border-[#F2D8CB] flex items-center justify-center text-espresso hover:bg-[#DD592A] hover:text-white hover:border-[#DD592A] transition-colors shadow-sm"
              aria-label="Previous bestsellers"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full bg-white border border-[#F2D8CB] flex items-center justify-center text-espresso hover:bg-[#DD592A] hover:text-white hover:border-[#DD592A] transition-colors shadow-sm"
              aria-label="Next bestsellers"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar scrollbar-none snap-x snap-mandatory items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="w-[240px] sm:w-[260px] md:w-[280px] flex-shrink-0 snap-start flex flex-col h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
