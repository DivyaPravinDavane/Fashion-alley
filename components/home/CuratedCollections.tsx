"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";

export default function CuratedCollections() {
  return (
    <section className="bg-[#FDFBF8] py-12 sm:py-16 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
            ✨ Curated Collections
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-espresso font-extrabold">
            Style for Every Moment
          </h2>
        </div>

        {/* 4 Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              href={`/shop?collection=${col.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white flex flex-col justify-end p-5 min-h-[200px] transition-all hover:shadow-salty hover:border-[#DD592A] hover:-translate-y-0.5"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#FBE7DE] block mb-0.5">
                  {col.highlightTag}
                </span>
                <h3 className="font-heading text-lg font-bold leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1 group-hover:text-[#DD592A] transition-colors font-medium">
                  <span>{col.description}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
