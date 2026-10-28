import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter matching products
  const categoryProducts = PRODUCTS.filter((p) => p.category === slug);
  // Also provide complementary recommendations if count is small
  const complementaryProducts =
    categoryProducts.length < 4
      ? PRODUCTS.filter((p) => p.category !== slug).slice(0, 4)
      : [];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-taupe-muted mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-espresso transition-colors">
            Collections
          </Link>
          <span>/</span>
          <span className="text-espresso font-medium">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-white border border-espresso/10 p-6 sm:p-10 mb-10 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-light text-espresso text-[10px] uppercase font-bold tracking-widest">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>{category.tagline}</span>
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-charcoal/80 max-w-xl leading-relaxed">
                {category.description}
              </p>
              <div className="text-xs text-taupe-muted pt-1">
                Showing <strong>{categoryProducts.length}</strong> handcrafted designs
              </div>
            </div>

            <div className="md:col-span-4 relative aspect-[4/3] rounded-xl overflow-hidden bg-champagne-light border border-espresso/10 shadow-soft">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-espresso/10 pb-3">
              <h2 className="font-serif text-2xl text-espresso font-medium">
                Available in {category.name}
              </h2>
              <Link
                href="/shop"
                className="text-xs uppercase tracking-wider font-semibold text-espresso hover:text-espresso-light flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Browse All Categories</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {categoryProducts.map((product, idx) => (
                <div key={product.id} className="h-full w-full flex flex-col">
                  <ProductCard
                    product={product}
                    priority={idx < 4}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Complementary styling pieces */}
          {complementaryProducts.length > 0 && (
            <div className="pt-8 border-t border-espresso/10">
              <h3 className="font-serif text-2xl text-espresso font-medium mb-6">
                Complete The Look with These Pairings
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                {complementaryProducts.map((product) => (
                  <div key={product.id} className="h-full w-full flex flex-col">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
