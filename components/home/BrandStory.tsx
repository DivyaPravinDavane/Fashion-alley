"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { STORE_CONTACT } from "@/data/navigation";

export default function BrandStory() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Genuine Fashion Alley Product Photo */}
          <div className="lg:col-span-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-soft border border-espresso/10 bg-white">
              <Image
                src="/images/products/fa_scrunchies_1.jpg"
                alt="Fashion Alley signature hair accessory craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center: Brand Story */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block mb-1">
                About Fashion Alley
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal leading-tight">
                The Beauty Is in the Details
              </h2>
            </div>

            <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
              From everyday essentials to special occasion pieces, Fashion Alley brings you a curated collection of stylish hair accessories that complete your look. Rooted in quality materials, French-inspired holds, and comfortable wear.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-espresso hover:text-espresso-light transition-colors group"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Client Spotlight & Contact */}
          <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-espresso/10 shadow-soft space-y-4">
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <blockquote className="text-xs italic text-charcoal/80 leading-relaxed">
              &ldquo;Fashion Alley hair clips are hands down the most durable we have stocked. The gloss finish and sturdy springs keep our customers returning season after season.&rdquo;
            </blockquote>

            <div className="border-t border-espresso/10 pt-3 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-espresso">Priya S.</p>
                <p className="text-[11px] text-taupe-muted">Wholesale Partner, Delhi</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-espresso/60">
                  Helpline
                </p>
                <p className="text-xs font-medium text-espresso">
                  {STORE_CONTACT.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
