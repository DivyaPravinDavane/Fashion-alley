"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
    clearCart,
  } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "FASHION10") {
      setDiscountPercent(10);
      setCouponSuccess("10% promotional boutique discount applied!");
      setCouponError("");
    } else {
      setCouponError("Invalid promo code. Try 'FASHION10' for 10% off.");
      setCouponSuccess("");
    }
  };

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = total - discountAmount;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - subtotal;

  if (items.length === 0) {
    return (
      <div className="bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-espresso/10 shadow-soft space-y-4">
          <div className="w-20 h-20 rounded-full bg-champagne-light flex items-center justify-center text-espresso/40 mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl text-espresso font-normal">
            Your Bag is Empty
          </h1>
          <p className="text-xs text-taupe-muted max-w-xs mx-auto">
            You have not added any hair accessories to your shopping bag yet. Explore our latest arrivals or bestsellers.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 py-3 px-6 bg-espresso text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-espresso-light transition-all shadow-soft"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-espresso/10">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
              Your Shopping Bag
            </h1>
            <p className="text-xs text-taupe-muted mt-1">
              Review your items before proceeding to demo checkout.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-rose-deep font-semibold hover:underline"
          >
            Clear Entire Bag
          </button>
        </div>

        {/* Free Shipping Alert Box */}
        <div className="bg-[#F5ECE3] p-4 rounded-2xl border border-[#E8D8C5] mb-8">
          <div className="flex justify-between text-xs font-semibold text-espresso mb-1.5">
            <span>
              {progressPercent >= 100
                ? "🎉 You have qualified for FREE Pan-India Shipping!"
                : `Add ${formatPrice(amountNeeded)} more to qualify for FREE Shipping`}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#E5D5C2] h-2 rounded-full overflow-hidden">
            <div
              className="bg-espresso h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Items Table */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft divide-y divide-espresso/10">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant?.id || "default"}`}
                className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-champagne-light flex-shrink-0 border border-espresso/10">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="font-serif text-base sm:text-lg font-medium text-espresso hover:underline line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    {item.variant && (
                      <p className="text-xs text-taupe-muted mt-0.5">
                        Style: {item.variant.name}
                      </p>
                    )}
                    {item.product.packQuantity && (
                      <p className="text-xs text-taupe-muted">
                        {item.product.packQuantity}
                      </p>
                    )}
                    <p className="text-xs font-semibold text-espresso sm:hidden mt-1">
                      {formatPrice(item.product.price)} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-espresso/20 rounded-lg bg-[#FAF7F2]">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, -1, item.variant?.id)
                      }
                      className="p-1.5 text-espresso hover:bg-espresso/5 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-semibold text-espresso">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, 1, item.variant?.id)
                      }
                      className="p-1.5 text-espresso hover:bg-espresso/5 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="text-sm font-semibold text-espresso">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() =>
                        removeFromCart(item.product.id, item.variant?.id)
                      }
                      className="text-xs text-taupe-muted hover:text-red-600 transition-colors flex items-center gap-1 mt-1 justify-end ml-auto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-6">
            <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-4">
              Order Summary
            </h2>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <label className="text-xs uppercase font-semibold text-espresso block">
                Promotional Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter 'FASHION10'"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-espresso/20 uppercase tracking-wider bg-[#FAF7F2] outline-none"
                />
                <button
                  type="submit"
                  className="py-2.5 px-4 bg-[#DD592A] text-white rounded-lg text-xs uppercase font-bold hover:bg-[#C74718] transition-all flex-shrink-0 shadow-sm"
                >
                  Apply
                </button>
              </div>
              {couponSuccess && (
                <p className="text-xs text-emerald-700 font-medium">
                  {couponSuccess}
                </p>
              )}
              {couponError && (
                <p className="text-xs text-rose-deep font-medium">{couponError}</p>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-3 text-xs border-t border-espresso/10 pt-4">
              <div className="flex justify-between text-espresso/70">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-semibold text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Promo Discount ({discountPercent}%)</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-espresso/70">
                <span>Estimated Shipping</span>
                <span className="font-bold text-emerald-600">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
              </div>
              <div className="border-t border-espresso/10 pt-3 flex justify-between text-base font-extrabold text-espresso">
                <span>Estimated Total</span>
                <span className="text-lg text-[#DD592A]">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full py-4 px-6 bg-[#DD592A] hover:bg-[#C74718] text-white rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-salty active:scale-[0.99]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-center">
              <Link
                href="/shop"
                className="text-xs text-taupe-muted hover:text-espresso font-medium underline underline-offset-4"
              >
                ← Or Continue Shopping
              </Link>
            </div>

            <div className="pt-2 text-[11px] text-center text-taupe-muted">
              Demo Checkout • No actual charges or cards needed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
