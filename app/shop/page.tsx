"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  Sparkles,
  ArrowUpDown,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialWholesale = searchParams.get("wholesale") === "true";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedPackFilter, setSelectedPackFilter] = useState<string>(
    initialWholesale ? "pack" : "all"
  );
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // Price range filter
      if (selectedPriceRange === "under300" && product.price >= 300) return false;
      if (
        selectedPriceRange === "300to500" &&
        (product.price < 300 || product.price > 500)
      )
        return false;
      if (selectedPriceRange === "above500" && product.price <= 500) return false;

      // Pack filter
      if (selectedPackFilter === "pack" && (!product.packQuantity || product.packQuantity.toLowerCase().includes("single"))) {
        return false;
      }
      if (selectedPackFilter === "single" && product.packQuantity && !product.packQuantity.toLowerCase().includes("single")) {
        return false;
      }

      // In stock
      if (inStockOnly && product.availability !== "in-stock") return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "newest") return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, selectedPriceRange, selectedPackFilter, inStockOnly, sortBy]);

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedPriceRange !== "all" ? 1 : 0) +
    (selectedPackFilter !== "all" ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedPackFilter("all");
    setInStockOnly(false);
    setSortBy("featured");
  };

  return (
    <div className="bg-[#FDFBF8] min-h-screen py-8 sm:py-12 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-[#6B6B66] mb-4 flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-[#DD592A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-espresso font-bold">Catalogue</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-[#F2D8CB] gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
              ✨ Curated Accessories
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl text-espresso font-extrabold">
              {selectedCategory !== "all"
                ? CATEGORIES.find((c) => c.slug === selectedCategory)?.name || "Collection"
                : "The Complete Catalogue"}
            </h1>
            <p className="text-xs sm:text-sm text-[#6B6B66] mt-2 max-w-xl font-medium">
              Hand-finished french hair claws, mulberry silk scrunchies, pearl hair pins, and salon bulk packs. Every piece thoughtfully designed for gentle holds and timeless beauty.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6B6B66] font-medium whitespace-nowrap">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 py-2 px-3.5 bg-white border border-[#F2D8CB] rounded-lg text-xs font-bold text-espresso shadow-sm"
            >
              <Filter className="w-3.5 h-3.5 text-[#DD592A]" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>
          </div>
        </div>

        {/* Active Filters Bar */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3.5 bg-[#FDF1EB] rounded-xl border border-[#F2D8CB]">
            <span className="text-xs font-bold text-espresso mr-1">
              Active Filters:
            </span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white border border-[#F2D8CB] rounded-full text-[#DD592A] font-bold shadow-sm">
                {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory("all")}>
                  <X className="w-3 h-3 hover:text-red-600" />
                </button>
              </span>
            )}
            {selectedPriceRange !== "all" && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white border border-[#F2D8CB] rounded-full text-[#DD592A] font-bold shadow-sm">
                {selectedPriceRange === "under300"
                  ? "Under ₹300"
                  : selectedPriceRange === "300to500"
                  ? "₹300 - ₹500"
                  : "Above ₹500"}
                <button onClick={() => setSelectedPriceRange("all")}>
                  <X className="w-3 h-3 hover:text-red-600" />
                </button>
              </span>
            )}
            {selectedPackFilter !== "all" && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white border border-[#F2D8CB] rounded-full text-[#DD592A] font-bold shadow-sm">
                {selectedPackFilter === "pack" ? "Bulk / Multi-Packs" : "Single Pieces"}
                <button onClick={() => setSelectedPackFilter("all")}>
                  <X className="w-3 h-3 hover:text-red-600" />
                </button>
              </span>
            )}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white border border-[#F2D8CB] rounded-full text-[#DD592A] font-bold shadow-sm">
                In Stock Only
                <button onClick={() => setInStockOnly(false)}>
                  <X className="w-3 h-3 hover:text-red-600" />
                </button>
              </span>
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#DD592A] font-bold hover:underline ml-auto"
            >
              Clear All
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            {/* Sorting */}
            <div className="bg-white p-5 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-espresso flex items-center gap-1.5">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort Catalogue</span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-espresso/20 bg-[#FAF7F2] text-espresso outline-none"
              >
                <option value="featured">Featured Picks</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Categories Filter */}
            <div className="bg-white p-5 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-espresso">
                Categories
              </h3>
              <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategory === "all"
                      ? "bg-[#DD592A] text-white font-bold shadow-sm"
                      : "text-espresso/80 hover:bg-[#FDF1EB] hover:text-[#DD592A]"
                  }`}
                >
                  <span>All Categories</span>
                  <span>{PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === cat.slug
                          ? "bg-[#DD592A] text-white font-bold shadow-sm"
                          : "text-espresso/80 hover:bg-[#FDF1EB] hover:text-[#DD592A]"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="text-[11px] opacity-75">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-5 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-espresso">
                Price Range
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  { id: "all", label: "All Prices" },
                  { id: "under300", label: "Under ₹ 300" },
                  { id: "300to500", label: "₹ 300 – ₹ 500" },
                  { id: "above500", label: "Above ₹ 500" },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2 cursor-pointer text-espresso/80 hover:text-espresso"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPriceRange === item.id}
                      onChange={() => setSelectedPriceRange(item.id)}
                      className="accent-espresso"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pack Size / Wholesale Filter */}
            <div className="bg-white p-5 rounded-2xl border border-espresso/10 shadow-soft space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-espresso">
                Pack Type
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  { id: "all", label: "All Formats" },
                  { id: "pack", label: "Multi-Pack / Wholesale (Pack of 2 - 12+)" },
                  { id: "single", label: "Single Piece" },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2 cursor-pointer text-espresso/80 hover:text-espresso"
                  >
                    <input
                      type="radio"
                      name="packFilter"
                      checked={selectedPackFilter === item.id}
                      onChange={() => setSelectedPackFilter(item.id)}
                      className="accent-espresso"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* In Stock toggle */}
            <div className="bg-white p-5 rounded-2xl border border-espresso/10 shadow-soft">
              <label className="flex items-center gap-2 text-xs cursor-pointer text-espresso font-medium">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-espresso rounded"
                />
                <span>In Stock Only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-espresso/10 p-8 shadow-soft">
                <div className="w-16 h-16 rounded-full bg-champagne-light flex items-center justify-center text-espresso/50 mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-espresso font-medium mb-2">
                  No accessories match these filters
                </h3>
                <p className="text-xs text-taupe-muted max-w-sm mx-auto mb-6">
                  Try adjusting your price range, selected category, or pack filters to view available styles.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="py-2.5 px-6 bg-espresso text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-espresso-light transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className="h-full w-full flex flex-col">
                    <ProductCard
                      product={product}
                      priority={idx < 4}
                    />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="fixed inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-espresso/10 pb-4">
                  <h3 className="font-serif text-lg font-medium text-espresso">
                    Filter Catalogue
                  </h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 text-espresso"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold text-espresso mb-2">
                    Category
                  </h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-xs p-2.5 rounded border border-espresso/20 bg-white text-espresso"
                  >
                    <option value="all">All Categories</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold text-espresso mb-2">
                    Price Range
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { id: "all", label: "All Prices" },
                      { id: "under300", label: "Under ₹ 300" },
                      { id: "300to500", label: "₹ 300 – ₹ 500" },
                      { id: "above500", label: "Above ₹ 500" },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mobilePrice"
                          checked={selectedPriceRange === item.id}
                          onChange={() => setSelectedPriceRange(item.id)}
                          className="accent-espresso"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold text-espresso mb-2">
                    Sort By
                  </h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full text-xs p-2.5 rounded border border-espresso/20 bg-white text-espresso"
                  >
                    <option value="featured">Featured Picks</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-espresso/10 space-y-2">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 bg-espresso text-white rounded text-xs uppercase font-semibold"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2 text-xs text-rose-deep font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-espresso" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
