"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function KidsSection() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8EFF1] rounded-2xl border border-[#ECCECE] p-6 sm:p-8 lg:p-10 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Image: Genuine Kids Accessories from Fashion Alley */}
            <div className="md:col-span-4">
              <div className="relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden shadow-soft border border-[#ECCECE] bg-white">
                <Image
                  src="/images/products/fa_kids-accessories_0.jpg"
                  alt="Kids pastel hair accessories from Fashion Alley"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Copy & Button */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#ECCECE] text-[10px] uppercase font-bold tracking-widest text-espresso">
                <Sparkles className="w-3 h-3 text-rose-deep" />
                <span>Sweet &amp; Snag-Free</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal leading-tight">
                Little Styles. Big Smiles.
              </h2>

              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-xl font-sans">
                Fun, colourful and comfortable accessories made with gentle fabric linings and rounded edges. Designed to stay securely in place during school, playdates, and family celebrations without pulling delicate hair.
              </p>

              <div className="pt-2">
                <Link
                  href="/collections/kids-accessories"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-espresso text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-espresso-light transition-all shadow-soft"
                >
                  <span>Explore Kids&apos; Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
