import React from "react";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import CategoryGallery from "@/components/home/CategoryGallery";
import NewArrivals from "@/components/home/NewArrivals";
import Bestsellers from "@/components/home/Bestsellers";
import CuratedCollections from "@/components/home/CuratedCollections";
import WholesaleSection from "@/components/home/WholesaleSection";
import KidsSection from "@/components/home/KidsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import BrandStory from "@/components/home/BrandStory";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION A: CINEMATIC HERO */}
      <Hero />

      {/* SECTION B: TRUST STRIP */}
      <TrustStrip />

      {/* SECTION C: SHOP BY CATEGORY */}
      <CategoryGallery />

      {/* SECTION D & E: NEW ARRIVALS & EDITORIAL CAMPAIGN */}
      <NewArrivals />

      {/* SECTION F: BESTSELLERS CAROUSEL */}
      <Bestsellers />

      {/* SECTION G: CURATED COLLECTIONS */}
      <CuratedCollections />

      {/* SECTION H: WHOLESALE SHOPPING */}
      <WholesaleSection />

      {/* SECTION I: KIDS' COLLECTION */}
      <KidsSection />

      {/* SECTION L: NEWSLETTER */}
      <NewsletterSection />

      {/* SECTION J & K: BRAND STORY & TESTIMONIALS */}
      <BrandStory />
    </div>
  );
}
