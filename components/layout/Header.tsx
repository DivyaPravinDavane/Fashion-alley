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
            ? "bg-[#FDFBF8]/95 backdrop-blur-md shadow-sm border-b border-[#F2D8CB]/60"
            : "bg-[#FDFBF8]"
        }`}
      >
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 border-b border-[#F2D8CB]/50">
            {/* Left: Search Box (Desktop) / Hamburger (Mobile) */}
            <div className="flex items-center gap-3 w-1/3">
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-2 text-espresso hover:text-[#DD592A] transition-colors"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center gap-2.5 w-full max-w-xs px-3.5 py-2 rounded-full border border-[#F2D8CB] bg-white hover:border-[#DD592A] text-espresso/60 hover:text-espresso cursor-pointer transition-all shadow-sm"
              >
                <Search className="w-4 h-4 text-[#DD592A]" />
                <span className="text-xs tracking-normal font-medium">
                  Search for hair accessories...
                </span>
              </div>
            </div>

            {/* Center: Fashion Alley Wordmark */}
            <div className="text-center w-1/3 flex flex-col items-center">
              <Link href="/" className="inline-block group">
                <span className="font-heading text-2xl sm:text-3xl md:text-[32px] tracking-[0.14em] text-espresso uppercase font-extrabold block leading-tight group-hover:text-[#DD592A] transition-colors">
                  Fashion Alley
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-[#DD592A] uppercase block font-sans mt-0.5 font-bold">
                  Hair Accessories | Style | You
                </span>
              </Link>
            </div>

            {/* Right: Actions (Account, Wishlist, Bag) */}
            <div className="flex items-center justify-end gap-3 sm:gap-5 w-1/3">
              {/* Search button on mobile */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="lg:hidden p-2 text-espresso hover:text-[#DD592A] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Demo Modal */}
              <div className="relative">
                <button
                  onClick={() => setShowAccountNotice((prev) => !prev)}
                  className="p-1.5 text-espresso/80 hover:text-[#DD592A] transition-colors"
                  aria-label="Account details"
                >
                  <User className="w-5 h-5 stroke-[1.75]" />
                </button>
                {showAccountNotice && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-luxury border border-[#F2D8CB] p-3 text-xs z-50 animate-fade-in">
                    <p className="font-heading text-sm font-bold text-espresso mb-1">
                      Guest Boutique Mode
                    </p>
                    <p className="text-[11px] text-[#6B6B66] leading-relaxed">
                      Frontend demonstration environment. No registration or login required to test the cart, wishlist, and checkout flow.
                    </p>
                    <button
                      onClick={() => setShowAccountNotice(false)}
                      className="mt-2 text-[10px] font-bold text-[#DD592A] uppercase tracking-wider hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="relative p-1.5 text-espresso/80 hover:text-[#DD592A] transition-colors"
                aria-label={`Wishlist with ${totalWishlist} items`}
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {totalWishlist > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#DD592A] text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon */}
              <button
                onClick={openCart}
                className="relative p-1.5 text-espresso/80 hover:text-[#DD592A] transition-colors"
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#DD592A] text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Subheader: Category Navigation Bar (Desktop) */}
          <nav className="hidden lg:flex items-center justify-between py-3 overflow-x-auto text-[11px] font-semibold tracking-wider text-espresso/80 whitespace-nowrap">
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
                    className={`uppercase tracking-wider transition-all pb-1 border-b-2 ${
                      isActive
                        ? "border-[#DD592A] text-[#DD592A] font-bold"
                        : "border-transparent text-espresso/80 hover:text-[#DD592A] hover:border-[#DD592A]/40"
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
