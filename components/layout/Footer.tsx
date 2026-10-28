"use client";

import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { STORE_CONTACT, TOP_NAV_CATEGORIES } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1B] text-[#FAF7F2] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-heading text-2xl tracking-[0.14em] text-white uppercase font-extrabold block">
                Fashion Alley
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#DD592A] uppercase block font-sans mt-0.5 font-bold">
                Hair Accessories | Style | You
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              India&apos;s premier destination for fine fashion accessories, French acetate hair claws, mulberry silk scrunchies, and boutique wholesale collections. Handcrafted for elegance and effortless everyday styling.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#DD592A] hover:border-[#DD592A] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#DD592A] hover:border-[#DD592A] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#DD592A] hover:border-[#DD592A] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#FBE7DE]">
                <Sparkles className="w-3.5 h-3.5 text-[#DD592A]" />
                <span>Pan-India Wholesale Bulk Dispatches</span>
              </div>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {TOP_NAV_CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="hover:text-[#DD592A] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="text-[#DD592A] font-bold hover:underline"
                >
                  View All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#FAF7F2] font-medium mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Fashion Alley
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Wholesale Enquiry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Track Order & Support
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  My Saved Wishlist
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Checkout Demonstration
                </Link>
              </li>
              <li>
                <span className="text-white/40 text-[11px]">
                  Free Pan-India Shipping on ₹999+
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#FAF7F2] font-medium mb-4">
              Contact Boutique
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/70">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D5A1AB] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {STORE_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D5A1AB] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${STORE_CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {STORE_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D5A1AB] flex-shrink-0 mt-0.5" />
                <span>Delhi, India • Wholesale Dispatch Hub</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D5A1AB] flex-shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
          <p>© {new Date().getFullYear()} Fashion Alley India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Verified Wholesale Supplier</span>
            <span>Frontend Prototype Demonstration</span>
            <Link href="/shop" className="text-[#D5A1AB] hover:underline">
              Shop Fashion Alley Online
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
