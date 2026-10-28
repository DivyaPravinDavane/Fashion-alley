"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import MegaMenu from "./MegaMenu";
import MobileNavigation from "./MobileNavigation";
import SearchModal from "../search/SearchModal";
import { TOP_NAV_CATEGORIES } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const { totalWishlist } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAccountNotice, setShowAccountNotice] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-soft"
            : "bg-[#FAF7F2]"
        }`}
      >
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 border-b border-espresso/10">
            {/* Left: Search Box (Desktop) / Hamburger (Mobile) */}
            <div className="flex items-center gap-3 w-1/3">
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-2 text-espresso hover:text-espresso-light"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center gap-2.5 w-full max-w-xs px-3.5 py-2 rounded-full border border-espresso/15 bg-white/70 hover:bg-white text-espresso/50 hover:text-espresso cursor-pointer transition-all shadow-sm"
              >
                <Search className="w-4 h-4 text-espresso/50" />
                <span className="text-xs tracking-normal">
                  Search for hair accessories...
                </span>
              </div>
            </div>

            {/* Center: Fashion Alley Wordmark */}
            <div className="text-center w-1/3 flex flex-col items-center">
              <Link href="/" className="inline-block group">
                <span className="font-serif text-2xl sm:text-3xl md:text-[34px] tracking-[0.16em] text-espresso uppercase font-normal block leading-tight group-hover:opacity-90 transition-opacity">
                  Fashion Alley
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.32em] text-espresso/70 uppercase block font-sans mt-0.5 font-medium">
                  Hair Accessories | Style | You
                </span>
              </Link>
            </div>

            {/* Right: Actions (Account, Wishlist, Bag) */}
            <div className="flex items-center justify-end gap-3 sm:gap-5 w-1/3">
              {/* Search button on mobile */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="lg:hidden p-2 text-espresso hover:text-espresso-light"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Demo Modal */}
              <div className="relative">
                <button
                  onClick={() => setShowAccountNotice((prev) => !prev)}
                  className="p-1.5 text-espresso/80 hover:text-espresso transition-colors"
                  aria-label="Account details"
                >
                  <User className="w-5 h-5 stroke-[1.5]" />
                </button>
                {showAccountNotice && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-floating border border-espresso/10 p-3 text-xs z-50 animate-fade-in">
                    <p className="font-serif text-sm font-medium text-espresso mb-1">
                      Guest Boutique Mode
                    </p>
                    <p className="text-[11px] text-taupe-muted leading-relaxed">
                      Frontend demonstration environment. No registration or login required to test the cart, wishlist, and checkout flow.
                    </p>
                    <button
                      onClick={() => setShowAccountNotice(false)}
                      className="mt-2 text-[10px] font-bold text-espresso uppercase tracking-wider hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="relative p-1.5 text-espresso/80 hover:text-espresso transition-colors"
                aria-label={`Wishlist with ${totalWishlist} items`}
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {totalWishlist > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-dusty text-white text-[9px] font-bold flex items-center justify-center">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon */}
              <button
                onClick={openCart}
                className="relative p-1.5 text-espresso/80 hover:text-espresso transition-colors"
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-espresso text-white text-[9px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Subheader: Category Navigation Bar (Desktop) */}
          <nav className="hidden lg:flex items-center justify-between py-3 overflow-x-auto text-[11px] font-medium tracking-wider text-espresso/85 whitespace-nowrap">
            {TOP_NAV_CATEGORIES.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.href}
                  className="relative group py-1"
                  onMouseEnter={() => {
                    if (item.slug === "hair-claws" || item.slug === "scrunchies") {
                      setIsMegaMenuOpen(true);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-espresso uppercase tracking-wider transition-colors pb-1 border-b-2 ${
                      isActive
                        ? "border-espresso text-espresso font-semibold"
                        : "border-transparent text-espresso/80 hover:border-espresso/40"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
