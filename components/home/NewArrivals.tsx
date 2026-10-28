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
    <section className="bg-[#FDFBF8] py-12 sm:py-16 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
              ✨ New Arrivals
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-espresso font-extrabold">
              Just Landed
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider font-bold text-[#DD592A] hover:underline flex items-center gap-1.5 transition-colors group"
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
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 h-full w-full relative rounded-xl overflow-hidden shadow-sm border border-[#F2D8CB]/80 min-h-[340px] flex flex-col justify-end p-5 group bg-white hover:shadow-salty hover:border-[#DD592A] hover:-translate-y-0.5 transition-all duration-300">
            <Image
              src="/images/banners/editorial_french_updo.jpg"
              alt="Your everyday elevated French twist hair claw look"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="relative z-10 text-white flex flex-col justify-end h-full">
              <div className="mt-auto">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#FBE7DE] block mb-1">
                  Editorial Edit
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold leading-tight mb-4 text-white">
                  Your Everyday,
                  <br />
                  Elevated.
                </h3>
                <Link
                  href="/shop"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#DD592A] hover:bg-[#C74718] text-white text-[11px] uppercase tracking-wider font-bold transition-all shadow-salty flex items-center justify-center gap-1.5 group-hover:gap-2.5"
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
