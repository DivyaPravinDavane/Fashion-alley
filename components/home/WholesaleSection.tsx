"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WholesaleSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section className="bg-[#FDFBF8] py-12 sm:py-16 border-b border-[#F2D8CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF1EB] rounded-2xl border border-[#F2D8CB] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Custom Wholesale Flatlay Banner */}
            <div className="lg:col-span-3">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm border border-[#F2D8CB] bg-white">
                <Image
                  src="/images/banners/wholesale_flatlay_tray.jpg"
                  alt="Wholesale boutique hair accessories collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center: Copy & Pack Sizes */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block mb-1">
                  📦 Wholesale Shopping
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-espresso font-extrabold leading-tight">
                  Trendy Accessories.
                  <br />
                  Better Bulk Buying.
                </h2>
              </div>

              <p className="text-xs text-[#6B6B66] leading-relaxed font-medium">
                Explore our wholesale range with attractive pack sizes and exclusive pricing for bulk orders. Directly sourcing from Fashion Alley ensures verified high-gloss acrylic finishes and prompt dispatch.
              </p>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-espresso/80 block mb-2">
                  Popular Pack Sizes
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Pack of 12", "Pack of 24", "Pack of 48", "Pack of 100+"].map((size) => (
                    <span
                      key={size}
                      className="text-xs px-3.5 py-1 bg-white border border-[#F2D8CB] rounded-full text-espresso font-bold shadow-sm hover:border-[#DD592A] hover:text-[#DD592A] transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/shop?wholesale=true"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-[#DD592A] text-white rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-[#C74718] transition-all shadow-salty"
                >
                  <span>Browse Bulk Packs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Wholesale Enquiry Form */}
            <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#F2D8CB] shadow-sm">
              <h3 className="font-heading text-base text-espresso font-bold mb-1">
                Wholesale Enquiry (Demo)
              </h3>
              <p className="text-[11px] text-[#6B6B66] mb-4">
                Receive our wholesale catalog and direct pricing sheet.
              </p>

              {submitted ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="text-xs font-semibold text-emerald-900">
                    Enquiry Received (Demonstration)
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Thank you! Our wholesale desk would typically reply with catalog rates within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-[#F2D8CB] bg-[#FDFBF8] text-espresso placeholder:text-espresso/40 focus:border-[#DD592A] outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email / Business Email *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-[#F2D8CB] bg-[#FDFBF8] text-espresso placeholder:text-espresso/40 focus:border-[#DD592A] outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={2}
                      placeholder="Your Message / Required Categories..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-[#F2D8CB] bg-[#FDFBF8] text-espresso placeholder:text-espresso/40 focus:border-[#DD592A] outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#DD592A] text-white rounded-lg text-xs uppercase tracking-wider font-bold hover:bg-[#C74718] transition-all shadow-salty"
                  >
                    Submit (Demo)
                  </button>
                  <p className="text-[10px] text-center text-[#6B6B66]">
                    No backend submission • Demonstration form
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
