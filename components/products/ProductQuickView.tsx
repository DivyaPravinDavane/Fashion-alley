"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Star, Heart, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { useQuickView } from "@/context/QuickViewContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductQuickView() {
  const { activeProduct, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
    setSelectedVariantIndex(0);
    setQuantity(1);
    setAddedNotice(false);

    if (activeProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProduct]);

  if (!activeProduct) return null;

  const currentVariant = activeProduct.variants?.[selectedVariantIndex];
  const isFavorited = isInWishlist(activeProduct.id);

  const handleAddToCart = () => {
    addToCart(activeProduct, quantity, currentVariant);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(activeProduct, quantity, currentVariant);
    closeQuickView();
    router.push("/checkout");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-[#FAF7F2] w-full max-w-3xl rounded-2xl shadow-floating border border-espresso/10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-espresso flex items-center justify-center shadow-soft transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Gallery Column */}
        <div className="w-full md:w-1/2 p-5 bg-white flex flex-col justify-between">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-champagne-light shadow-inner">
            <Image
              src={activeProduct.images[selectedImageIndex] || activeProduct.images[0]}
              alt={activeProduct.name}
              fill
              className="object-cover"
              priority
            />
            {activeProduct.newArrival && (
              <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-white text-espresso rounded shadow-sm">
                New
              </span>
            )}
          </div>

          {activeProduct.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {activeProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImageIndex === idx
                      ? "border-espresso scale-95"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-taupe-muted font-medium">
                {activeProduct.category.replace("-", " ")}
              </p>
              <h2 className="font-serif text-2xl text-espresso font-medium mt-1">
                {activeProduct.name}
              </h2>
              {activeProduct.subtitle && (
                <p className="text-xs text-taupe-muted mt-0.5">
                  {activeProduct.subtitle}
                </p>
              )}
            </div>

            {/* Price & Pack Size */}
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-espresso">
                {formatPrice(activeProduct.price)}
              </span>
              {activeProduct.originalPrice && (
                <span className="text-sm text-espresso/40 line-through">
                  {formatPrice(activeProduct.originalPrice)}
                </span>
              )}
              {activeProduct.packQuantity && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-champagne-light text-espresso font-medium">
                  {activeProduct.packQuantity}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs text-charcoal/80 leading-relaxed line-clamp-3">
              {activeProduct.description}
            </p>

            {/* Variants */}
            {activeProduct.variants && activeProduct.variants.length > 0 && (
              <div>
                <label className="text-[11px] uppercase tracking-wider text-espresso/70 font-semibold block mb-2">
                  Select Style / Color:{" "}
                  <span className="text-espresso font-normal">
                    {activeProduct.variants[selectedVariantIndex].name}
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.variants.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        selectedVariantIndex === idx
                          ? "border-espresso bg-espresso text-white font-medium"
                          : "border-espresso/20 bg-white text-espresso hover:border-espresso/50"
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-espresso">Quantity</span>
              <div className="flex items-center border border-espresso/20 rounded bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-espresso hover:bg-espresso/5 transition-colors"
                >
                  -
                </button>
                <span className="px-3 text-xs font-semibold text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2.5 py-1 text-espresso hover:bg-espresso/5 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-2.5">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 bg-[#DD592A] hover:bg-[#C74718] text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-salty active:scale-[0.98]"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(activeProduct)}
                className={`p-3 rounded-xl border transition-colors flex items-center justify-center ${
                  isFavorited
                    ? "border-[#DD592A] bg-[#FBE7DE] text-[#DD592A]"
                    : "border-[#F2D8CB] bg-white text-espresso hover:border-[#DD592A] hover:text-[#DD592A]"
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? "fill-[#DD592A]" : ""}`} />
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3 px-4 bg-[#FBE7DE] text-[#DD592A] border border-[#F2D8CB] rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-[#F8D5C6] transition-all flex items-center justify-center gap-2"
            >
              <span>Buy Now (Instant Checkout)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <Link
                href={`/products/${activeProduct.slug}`}
                onClick={closeQuickView}
                className="text-xs text-[#6B6B66] hover:text-[#DD592A] font-bold underline underline-offset-4"
              >
                View full product specifications & reviews →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
