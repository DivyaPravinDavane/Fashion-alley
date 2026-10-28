"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Search, Heart, ShoppingBag, Phone, Mail, ChevronRight } from "lucide-react";
import { TOP_NAV_CATEGORIES, STORE_CONTACT } from "@/data/navigation";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileNavigationProps) {
  const { totalWishlist } = useWishlist();
  const { totalItems, openCart } = useCart();

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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-xs sm:max-w-sm bg-[#FAF7F2] shadow-2xl flex flex-col border-r border-espresso/10 animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-espresso/10 flex items-center justify-between bg-white">
            <div>
              <span className="font-serif text-lg tracking-widest text-espresso font-bold uppercase block">
                Fashion Alley
              </span>
              <span className="text-[9px] tracking-widest text-espresso/60 uppercase block">
                Hair Accessories
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-espresso/70 hover:text-espresso hover:bg-espresso/5"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-2 gap-2 p-3 bg-champagne-light/50 border-b border-espresso/10">
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-white border border-espresso/10 text-xs font-medium text-espresso"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-white border border-espresso/10 text-xs font-medium text-espresso"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist ({totalWishlist})</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-taupe-muted mb-2 px-2">
                Categories
              </p>
              <div className="space-y-1">
                {TOP_NAV_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2 rounded-lg text-sm font-medium text-espresso hover:bg-white hover:text-espresso-light transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-4 h-4 text-espresso/30" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-espresso/10 pt-4">
              <p className="text-[10px] uppercase font-bold tracking-widest text-taupe-muted mb-2 px-2">
                Information & Boutique
              </p>
              <div className="space-y-1">
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="block py-2 px-2 text-sm font-medium text-espresso hover:bg-white rounded-lg"
                >
                  Shop All Products
                </Link>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="block py-2 px-2 text-sm font-medium text-espresso hover:bg-white rounded-lg"
                >
                  About Our Brand
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block py-2 px-2 text-sm font-medium text-espresso hover:bg-white rounded-lg"
                >
                  Contact & Wholesale Enquiry
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="p-4 bg-white border-t border-espresso/10 space-y-2 text-xs text-taupe-muted">
            <div className="flex items-center gap-2 text-espresso">
              <Phone className="w-3.5 h-3.5 text-espresso/60" />
              <span>{STORE_CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-espresso">
              <Mail className="w-3.5 h-3.5 text-espresso/60" />
              <span className="truncate">{STORE_CONTACT.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
