import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, PackageCheck, Award } from "lucide-react";
import { STORE_CONTACT } from "@/data/navigation";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block">
            The Fashion Alley Story
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-espresso font-normal">
            Everyday Elegance,
            <br />
            <span className="italic">Thoughtfully Crafted.</span>
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
            Fashion Alley was born out of a desire to create hair accessories that blend timeless luxury aesthetics with comfortable, non-damaging daily function.
          </p>
        </div>

        {/* Editorial Double Image Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-champagne-light shadow-luxury border border-espresso/10">
            <Image
              src="/images/banners/hero_editorial_tray.jpg"
              alt="Fashion Alley luxury hair accessories collection"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="md:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-espresso/70 block">
              Our Design Ethos
            </span>
            <h2 className="font-serif text-3xl text-espresso font-medium leading-tight">
              Little details make the most lasting impressions.
            </h2>
            <p className="text-xs text-charcoal/80 leading-relaxed">
              We source ultra-durable virgin acetate and high-grade mulberry satin to ensure hair accessories that never pinch, pull, or crack. From Parisian claw clips that effortlessly hold an all-day French twist to snag-free scrunchies that care for hair while sleeping.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 py-3 px-6 bg-espresso text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-espresso-light transition-all shadow-soft"
              >
                <span>Explore The Boutique</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-espresso/10">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-full bg-champagne-light flex items-center justify-center text-espresso">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-espresso">
              Gentle, Anti-Snag Holds
            </h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Designed to preserve hair health. Smooth rounded prongs and seamless elastics eliminate hair creasing and tension headaches.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-full bg-champagne-light flex items-center justify-center text-espresso">
              <PackageCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-espresso">
              Wholesale &amp; Bulk Partner
            </h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              We proudly supply leading salons, bridal stylists, and retail boutiques with dependable multi-pack quantities at direct factory rates.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-full bg-champagne-light flex items-center justify-center text-espresso">
              <Award className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-espresso">
              Artisanal Craftsmanship
            </h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              High-gloss hand-polished finishes, stainless steel internal tension springs, and delicate crystal setting create heirloom-grade appeal.
            </p>
          </div>
        </div>

        {/* Wholesale & Contact Callout */}
        <div className="bg-[#241A17] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-luxury">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D5A1AB] block">
            Direct Manufacturer Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal max-w-xl mx-auto">
            Interested in Stocking Fashion Alley Accessories in Your Boutique?
          </h2>
          <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
            Reach out to our dedicated wholesale team in Delhi for custom curation, festive gift hampers, and bulk wholesale rates.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="py-3 px-6 bg-[#FAF7F2] text-espresso text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#E8D8C5] transition-colors"
            >
              Wholesale Enquiry
            </Link>
            <a
              href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`}
              className="py-3 px-6 border border-white/20 text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {STORE_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
