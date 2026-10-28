"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  ArrowRight,
  Package,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/products/ProductCard";
import { REVIEWS } from "@/data/reviews";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-6 text-center">
        <h1 className="font-serif text-3xl text-espresso mb-2">
          Product Not Found
        </h1>
        <p className="text-xs text-taupe-muted mb-6">
          The requested hair accessory is currently unavailable in the catalogue.
        </p>
        <Link
          href="/shop"
          className="py-3 px-6 bg-espresso text-white rounded text-xs uppercase tracking-wider font-semibold"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const currentVariant = product.variants?.[selectedVariantIndex];
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, currentVariant);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, currentVariant);
    router.push("/checkout");
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-taupe-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/collections/${product.category}`}
            className="hover:text-espresso transition-colors capitalize"
          >
            {product.category.replace("-", " ")}
          </Link>
          <span>/</span>
          <span className="text-espresso font-medium truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-10 border border-espresso/10 shadow-soft">
          {/* LEFT: Product Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-champagne-light border border-espresso/10 shadow-inner group">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.newArrival && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-espresso text-white text-[10px] uppercase font-bold tracking-widest rounded shadow-sm">
                  New Arrival
                </span>
              )}
            </div>

            {/* Thumbnails row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? "border-espresso scale-95 shadow-soft"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Information & Purchase CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block">
                  {product.category.replace("-", " ")}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal mt-1">
                  {product.name}
                </h1>
                {product.subtitle && (
                  <p className="text-xs text-taupe-muted mt-1 font-medium">
                    {product.subtitle}
                  </p>
                )}
              </div>

              {/* Reviews & Star Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-charcoal/70">
                  {product.rating} ({product.reviewsCount || 120} verified reviews)
                </span>
              </div>

              {/* Price & Pack Size */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-semibold text-espresso">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-espresso/40 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.packQuantity && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-champagne-light text-espresso font-semibold">
                    {product.packQuantity}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans border-t border-espresso/10 pt-4">
                {product.description}
              </p>

              {/* Variants Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="border-t border-espresso/10 pt-4 space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-espresso block">
                    Choose Style / Shade:{" "}
                    <span className="font-normal text-taupe-muted">
                      {product.variants[selectedVariantIndex].name}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantIndex(idx)}
                        className={`text-xs px-3.5 py-2 rounded-lg border transition-all ${
                          selectedVariantIndex === idx
                            ? "border-espresso bg-espresso text-white font-medium shadow-sm"
                            : "border-espresso/20 bg-white text-espresso hover:border-espresso/60"
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs uppercase font-semibold text-espresso">
                  Quantity
                </span>
                <div className="flex items-center border border-espresso/20 rounded-lg bg-[#FAF7F2]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-espresso hover:bg-espresso/5 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-semibold text-espresso">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-espresso hover:bg-espresso/5 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-6 border-t border-espresso/10">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-espresso text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-espresso-light transition-all flex items-center justify-center gap-2 shadow-soft active:scale-[0.99]"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
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
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-lg border transition-colors flex items-center justify-center ${
                    isFavorited
                      ? "border-rose-dusty bg-blush-light text-rose-deep"
                      : "border-espresso/20 bg-white text-espresso hover:border-espresso"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 bg-[#F0DDE0] text-espresso border border-[#D5A1AB] rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#E8CCD1] transition-all flex items-center justify-center gap-2 shadow-soft active:scale-[0.99]"
              >
                <span>Buy Now (Demo Checkout)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Shopping Benefits Badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-espresso/10 text-xs text-taupe-muted">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-espresso/70" />
                  <span>Free shipping on ₹999+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-espresso/70" />
                  <span>Secure protective packing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Craftsmanship Details */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-espresso/10 shadow-soft space-y-6">
          <h2 className="font-serif text-2xl text-espresso font-medium">
            Specifications &amp; Craft Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {product.specifications ? (
              Object.entries(product.specifications).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between py-2.5 px-4 rounded-lg bg-[#FAF7F2] border border-espresso/5"
                >
                  <span className="font-semibold text-espresso">{key}</span>
                  <span className="text-charcoal/80">{val}</span>
                </div>
              ))
            ) : (
              <>
                <div className="flex justify-between py-2.5 px-4 rounded-lg bg-[#FAF7F2]">
                  <span className="font-semibold text-espresso">Material</span>
                  <span>Premium High-Gloss Acrylic & Steel Spring</span>
                </div>
                <div className="flex justify-between py-2.5 px-4 rounded-lg bg-[#FAF7F2]">
                  <span className="font-semibold text-espresso">Grip Style</span>
                  <span>Anti-Snag Ergonomic Hold</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sample Customer Reviews Section */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-espresso/10 shadow-soft">
          <div className="flex items-center justify-between mb-8 border-b border-espresso/10 pb-4">
            <div>
              <h2 className="font-serif text-2xl text-espresso font-medium">
                Customer Feedback
              </h2>
              <p className="text-xs text-taupe-muted">
                (Verified boutique reviews from demonstration database)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-gold font-semibold text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 / 5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#FAF7F2] border border-espresso/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-charcoal/80 italic leading-relaxed">
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-espresso/10 text-xs">
                  <p className="font-semibold text-espresso">{rev.author}</p>
                  <p className="text-[11px] text-taupe-muted">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-3xl text-espresso font-normal mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="h-full w-full flex flex-col">
                  <ProductCard product={rel} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
