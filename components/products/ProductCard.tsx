"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Check } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useQuickView } from "@/context/QuickViewContext";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { openQuickView } = useQuickView();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const displayImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative flex flex-col w-full h-full bg-white rounded-xl overflow-hidden border border-[#F2D8CB]/80 transition-all duration-300 hover:shadow-salty hover:border-[#DD592A] hover:-translate-y-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container with Fixed Aspect Ratio */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FDFBF8] flex-shrink-0">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.newArrival && (
            <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-[#DD592A] text-white rounded-md shadow-sm">
              New
            </span>
          )}
          {product.bestseller && (
            <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-[#FBE7DE] text-[#DD592A] rounded-md shadow-sm border border-[#F2D8CB]">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button (Top Right Heart) */}
        <button
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm ${
            isFavorited
              ? "bg-white text-[#DD592A]"
              : "bg-white/90 hover:bg-white text-espresso/60 hover:text-[#DD592A]"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-[#DD592A]" : ""}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute bottom-2.5 inset-x-2.5 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={handleQuickView}
            className="w-full py-1.5 px-3 bg-white/95 hover:bg-white text-espresso hover:text-[#DD592A] text-[10px] uppercase tracking-wider font-bold rounded-lg shadow-sm backdrop-blur-sm flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Section - Flex-1 to stretch consistently */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white text-left">
        <div>
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-heading text-sm sm:text-[15px] font-bold text-espresso group-hover:text-[#DD592A] line-clamp-1 transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Pack Quantity or Category Subtitle with fixed height for perfect vertical alignment */}
          <div className="h-4 mt-0.5 flex items-center">
            {product.packQuantity ? (
              <p className="text-[11px] text-[#6B6B66] font-medium truncate">
                {product.packQuantity}
              </p>
            ) : (
              <p className="text-[11px] text-[#6B6B66] font-medium capitalize truncate">
                {product.category.replace("-", " ")}
              </p>
            )}
          </div>

          {/* Price Row with fixed height for uniform alignment */}
          <div className="flex items-baseline gap-2 mt-2 h-5">
            <span className="text-sm sm:text-base font-extrabold text-[#DD592A]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-espresso/40 line-through font-medium">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-[9px] font-bold text-[#DD592A] bg-[#FBE7DE] px-1.5 py-0.5 rounded">
                SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
        </div>

        {/* Add To Cart Button - Always pinned to the bottom */}
        <div className="pt-3 mt-auto">
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-3 text-[11px] uppercase tracking-wider font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-[#DD592A] hover:bg-[#C74718] text-white active:scale-[0.98] hover:shadow-salty"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Added to Bag</span>
              </>
            ) : (
              <span>Add to Cart</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
