"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";

export default function CuratedCollections() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block mb-1">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
            Style for Every Moment
          </h2>
        </div>

        {/* 4 Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              href={`/shop?collection=${col.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-soft border border-espresso/10 bg-white flex flex-col justify-end p-5 min-h-[200px] transition-all hover:shadow-luxury"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D5A1AB] block mb-0.5">
                  {col.highlightTag}
                </span>
                <h3 className="font-serif text-lg font-medium leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 flex items-center gap-1 group-hover:text-[#D5A1AB] transition-colors">
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
