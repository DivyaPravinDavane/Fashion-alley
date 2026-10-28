"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/formatPrice";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/40 backdrop-blur-sm animate-fade-in px-4">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl shadow-floating border border-espresso/10 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-espresso/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-espresso/60 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hair claws, scrunchies, pearl pins, combos..."
            className="w-full bg-transparent text-espresso placeholder:text-espresso/40 outline-none text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-espresso/40 hover:text-espresso p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-espresso/60 hover:text-espresso font-medium px-2 py-1 rounded bg-[#FAF7F2]"
          >
            Esc
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          {query.trim() === "" ? (
            <div>
              <p className="text-xs font-semibold tracking-wider text-espresso/50 uppercase mb-3">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hair Claws",
                  "Satin Scrunchies",
                  "Pearl Hair Pins",
                  "Fabric Hair Bands",
                  "Gift Combos",
                  "Butterfly Clip",
                  "Kids Hair Accessories",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-espresso/10 hover:border-espresso/40 text-espresso transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div>
              <p className="text-xs font-semibold tracking-wider text-espresso/50 uppercase mb-3">
                Found {filteredProducts.length} Results
              </p>
              <div className="divide-y divide-espresso/10 bg-white rounded-xl border border-espresso/10 overflow-hidden">
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 hover:bg-[#FAF7F2] transition-colors group"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-champagne-light flex-shrink-0">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-espresso truncate font-serif">
                        {p.name}
                      </h4>
                      <p className="text-xs text-taupe-muted">
                        {p.packQuantity || p.category.replace("-", " ")}
                      </p>
                      <p className="text-xs font-semibold text-espresso mt-0.5">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-espresso/40 group-hover:text-espresso group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="font-serif text-lg text-espresso mb-1">
                No matching accessories found
              </p>
              <p className="text-xs text-taupe-muted mb-4">
                Try searching for claws, scrunchies, headbands, or pins.
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className="inline-block text-xs uppercase tracking-wider font-semibold px-4 py-2 bg-espresso text-white rounded hover:bg-espresso-light transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
