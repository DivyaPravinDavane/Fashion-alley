"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-espresso/10 animate-fade-in">
          {/* Header */}
          <div className="px-6 py-5 border-b border-espresso/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-espresso" />
              <h2 className="font-serif text-xl tracking-tight text-espresso font-medium">
                Shopping Bag ({items.length})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-espresso/60 hover:text-espresso rounded-full hover:bg-espresso/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F5ECE3] px-6 py-3 border-b border-[#E8D8C5]">
            <div className="flex justify-between text-xs font-medium text-espresso mb-1.5">
              <span>
                {progressPercent >= 100 ? (
                  <span className="text-emerald-700 font-semibold">
                    🎉 You have unlocked FREE shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-espresso">{formatPrice(amountNeeded)}</strong> more for FREE shipping
                  </span>
                )}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#F2D8CB] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#DD592A] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-champagne-light flex items-center justify-center text-espresso/40">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-espresso font-medium">
                    Your shopping bag is empty
                  </h3>
                  <p className="text-xs text-taupe-muted mt-1 max-w-xs mx-auto">
                    Explore our curated collection of hair claws, silk scrunchies, and pins to elevate your daily style.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="inline-block text-xs uppercase tracking-wider font-medium px-6 py-3 bg-espresso text-white rounded hover:bg-espresso-light transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant?.id || "default"}`}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-espresso/10 shadow-soft"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-champagne-light flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium text-espresso hover:underline truncate"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.variant?.id)
                          }
                          className="text-espresso/40 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.variant && (
                        <p className="text-[11px] text-taupe-muted mt-0.5">
                          Style: {item.variant.name}
                        </p>
                      )}
                      {item.product.packQuantity && (
                        <p className="text-[11px] text-taupe-muted">
                          {item.product.packQuantity}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-espresso/5">
                      <div className="flex items-center border border-espresso/20 rounded bg-[#FAF7F2]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, -1, item.variant?.id)
                          }
                          className="p-1 hover:bg-espresso/10 text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, 1, item.variant?.id)
                          }
                          className="p-1 hover:bg-espresso/10 text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-semibold text-espresso">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-espresso/10 bg-white p-6 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-espresso/10 pt-2 flex justify-between text-sm font-semibold text-espresso">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#DD592A] hover:bg-[#C74718] text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-salty active:scale-[0.99]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full text-center py-2 text-xs text-[#6B6B66] hover:text-[#DD592A] font-bold transition-colors"
                >
                  Continue Browsing
                </button>
              </div>

              <p className="text-[10px] text-center text-taupe-muted">
                Demo Checkout • Zero payment gateway required
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
