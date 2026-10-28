"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryGallery() {
  return (
    <section className="bg-[#FDFBF8] py-12 sm:py-16 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
              ✨ Collections
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-espresso font-extrabold">
              Find Your Signature Detail
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider font-bold text-[#DD592A] hover:underline flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Varied Editorial Grid using authentic Fashion Alley photography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Card 1: Hair Claws (Tall Vertical Card on Left) */}
          <div className="md:col-span-4 relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white min-h-[360px] md:min-h-[460px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
            <Image
              src="/images/products/fa_hair-claws_0.jpg"
              alt="Hair Claws category"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-heading text-2xl font-bold mb-1">
                Hair Claws
              </h3>
              <p className="text-xs text-white/80 mb-3">
                Effortless French styling in seconds.
              </p>
              <Link
                href="/collections/hair-claws"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Center Column: Scrunchies (Top) & Kids (Bottom) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            {/* Scrunchies */}
            <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white flex-1 min-h-[170px] md:min-h-[218px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
              <Image
                src="/images/products/fa_scrunchies_0.jpg"
                alt="Scrunchies category"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-heading text-xl font-bold">
                  Scrunchies
                </h3>
                <Link
                  href="/collections/scrunchies"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors mt-1"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Kids' Accessories */}
            <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white flex-1 min-h-[170px] md:min-h-[218px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
              <Image
                src="/images/products/fa_kids-accessories_0.jpg"
                alt="Kids' Accessories category"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-heading text-xl font-bold">
                  Kids&apos; Accessories
                </h3>
                <Link
                  href="/collections/kids-accessories"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors mt-1"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hair Bands, Hair Pins, Gift Combos */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Hair Bands */}
              <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white min-h-[170px] md:min-h-[218px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
                <Image
                  src="/images/products/fa_hair-bands_0.png"
                  alt="Hair Bands category"
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-base sm:text-lg font-bold">
                    Hair Bands
                  </h3>
                  <Link
                    href="/collections/hair-bands"
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors mt-0.5"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Hair Pins */}
              <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white min-h-[170px] md:min-h-[218px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
                <Image
                  src="/images/products/fa_hair-pins_0.png"
                  alt="Hair Pins category"
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-base sm:text-lg font-bold">
                    Hair Pins
                  </h3>
                  <Link
                    href="/collections/hair-pins"
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors mt-0.5"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Gift Combos (Spans bottom) */}
            <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 bg-white flex-1 min-h-[170px] md:min-h-[218px] hover:border-[#DD592A] hover:shadow-salty transition-all duration-300">
              <Image
                src="/images/products/fa_clip-cards_0.jpg"
                alt="Gift Combos category"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-heading text-xl font-bold">
                  Gift Combos
                </h3>
                <Link
                  href="/collections/gift-combos"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#FBE7DE] hover:text-[#DD592A] transition-colors mt-1"
                >
                  <span>Shop Now</span>
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
