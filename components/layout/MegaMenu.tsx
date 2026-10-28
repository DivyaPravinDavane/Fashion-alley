"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  const featuredCategories = CATEGORIES.slice(0, 6);

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#FAF7F2] border-b border-espresso/10 shadow-floating z-40 animate-slide-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories Grid */}
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-4 border-b border-espresso/10 pb-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-espresso">
                Explore Signature Collections
              </span>
              <Link
                href="/shop"
                onClick={onClose}
                className="text-xs text-taupe-muted hover:text-espresso flex items-center gap-1 font-medium"
              >
                <span>View Full Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {featuredCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/collections/${cat.slug}`}
                  onClick={onClose}
                  className="group flex gap-3.5 items-center p-2 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-champagne-light flex-shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-espresso group-hover:text-espresso-light">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-taupe-muted mt-0.5 line-clamp-1">
                      {cat.tagline}
                    </p>
                    <span className="text-[10px] text-espresso/60 font-semibold mt-1 inline-block">
                      {cat.itemCount} Styles →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Editorial Spotlight Card */}
          <div className="col-span-4 bg-white rounded-2xl p-5 border border-espresso/10 flex flex-col justify-between shadow-soft">
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <Image
                src="/images/banners/fashion_alley_banner_1.jpg"
                alt="Everyday Elevated Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] tracking-wider uppercase font-semibold">
                  <Sparkles className="w-3 h-3 text-champagne" />
                  Wholesale Edit
                </span>
                <h4 className="font-serif text-lg font-medium mt-1 leading-snug">
                  Bulk Buying Made Effortless
                </h4>
              </div>
            </div>

            <div>
              <p className="text-xs text-taupe-muted mb-3">
                Attractive pack sizes for salons, boutiques, and gifting. Direct manufacturer dispatch with pan-India delivery.
              </p>
              <Link
                href="/shop?wholesale=true"
                onClick={onClose}
                className="block text-center py-2 px-4 bg-espresso text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-espresso-light transition-colors"
              >
                Inquire Wholesale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
