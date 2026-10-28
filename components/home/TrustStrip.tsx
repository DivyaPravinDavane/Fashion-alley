"use client";

import React from "react";
import { Package, Sparkles, Truck, Headphones } from "lucide-react";

const TRUST_BENEFITS = [
  {
    icon: Package,
    title: "Wholesale Shopping",
    subtitle: "Available for Boutiques & Salons",
  },
  {
    icon: Sparkles,
    title: "Wide Range of",
    subtitle: "Trendy Hair Accessories",
  },
  {
    icon: Truck,
    title: "Fast & Reliable",
    subtitle: "Pan-India Secure Shipping",
  },
  {
    icon: Headphones,
    title: "Dedicated",
    subtitle: "Personal Customer Support",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#FAF7F2] border-b border-espresso/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-espresso/10">
          {TRUST_BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? "pt-4 md:pt-0 md:pl-6" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white border border-espresso/10 flex items-center justify-center text-espresso flex-shrink-0 shadow-soft">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-espresso font-sans">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-taupe-muted">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
