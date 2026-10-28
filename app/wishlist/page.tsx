"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block mb-1">
            Personal Curation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
            Your Saved Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-2">
            Keep track of your favourite hair claws, scrunchies, and pins. Move items directly to your shopping bag whenever you are ready.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-espresso/10 max-w-lg mx-auto p-8 shadow-soft space-y-4">
            <div className="w-20 h-20 rounded-full bg-champagne-light flex items-center justify-center text-espresso/40 mx-auto">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl text-espresso font-medium">
              Your wishlist is currently empty
            </h2>
            <p className="text-xs text-taupe-muted max-w-sm mx-auto">
              Explore our boutique collection and tap the heart icon on any accessory to save it for later.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 py-3 px-6 bg-espresso text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-espresso-light transition-all shadow-soft"
              >
                <span>Discover Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="h-full w-full bg-white rounded-2xl overflow-hidden border border-espresso/10 shadow-soft flex flex-col justify-between group"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-champagne-light">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-espresso/60 hover:text-red-600 flex items-center justify-center shadow-sm transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-base font-medium text-espresso hover:underline truncate">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[11px] text-taupe-muted capitalize mt-0.5">
                      {product.packQuantity || product.category.replace("-", " ")}
                    </p>
                    <p className="text-sm font-semibold text-espresso mt-1">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1, product.variants?.[0])}
                    className="w-full py-2.5 px-4 bg-espresso hover:bg-espresso-light text-white text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center gap-2 transition-all shadow-soft"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
