"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function NewArrivals() {
  const newArrivals = PRODUCTS.filter((p) => p.newArrival).slice(0, 4);

  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block mb-1">
              New Arrivals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
              Just Landed
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-widest font-semibold text-espresso hover:text-espresso-light flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Column Grid with Equal Height Alignment (items-stretch) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {newArrivals.map((product, idx) => (
            <div key={product.id} className="h-full w-full flex flex-col">
              <ProductCard product={product} priority={idx < 2} />
            </div>
          ))}

          {/* 5th Column: Editorial Look Banner - Identical height & shape */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 h-full w-full relative rounded-xl overflow-hidden shadow-soft border border-espresso/10 min-h-[340px] flex flex-col justify-end p-5 group bg-white hover:shadow-luxury hover:-translate-y-0.5 transition-all duration-300">
            <Image
              src="/images/banners/editorial_french_updo.jpg"
              alt="Your everyday elevated French twist hair claw look"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
            <div className="relative z-10 text-white flex flex-col justify-end h-full">
              <div className="mt-auto">
                <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-champagne block mb-1">
                  Editorial Edit
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight mb-4 text-white">
                  Your Everyday,
                  <br />
                  Elevated.
                </h3>
                <Link
                  href="/shop"
                  className="w-full py-2.5 px-4 rounded-lg bg-white/95 hover:bg-white text-espresso text-[11px] uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-1.5 group-hover:gap-2.5"
                >
                  <span>Shop The Look</span>
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
