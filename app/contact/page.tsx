"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
} from "lucide-react";
import { STORE_CONTACT } from "@/data/navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Wholesale & Bulk Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "Wholesale & Bulk Enquiry",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block">
            We Are Here To Help
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/70">
            Whether you have questions about our product collections, wholesale bulk orders, or styling guidance, our Delhi team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Verified Contact Information & Hours */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-10 border border-espresso/10 shadow-soft space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-espresso font-medium mb-2">
                Boutique Headquarters
              </h2>
              <p className="text-xs text-taupe-muted leading-relaxed">
                Connect directly with our customer concierge or wholesale account executives.
              </p>
            </div>

            <div className="space-y-6 text-xs text-charcoal/80">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-champagne-light flex items-center justify-center text-espresso flex-shrink-0">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-espresso">Helpline &amp; WhatsApp</h4>
                  <a
                    href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`}
                    className="hover:underline text-espresso font-medium mt-0.5 block"
                  >
                    {STORE_CONTACT.phone}
                  </a>
                  <p className="text-[11px] text-taupe-muted">Direct line for instant inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-champagne-light flex items-center justify-center text-espresso flex-shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-espresso">Email Support</h4>
                  <a
                    href={`mailto:${STORE_CONTACT.email}`}
                    className="hover:underline text-espresso font-medium mt-0.5 block break-all"
                  >
                    {STORE_CONTACT.email}
                  </a>
                  <p className="text-[11px] text-taupe-muted">Typically replies within 2–4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-champagne-light flex items-center justify-center text-espresso flex-shrink-0">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-espresso">Dispatch Hub</h4>
                  <p className="mt-0.5 text-espresso">{STORE_CONTACT.address}</p>
                  <p className="text-[11px] text-taupe-muted">Pan-India express logistics center</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-champagne-light flex items-center justify-center text-espresso flex-shrink-0">
                  <Clock className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-semibold text-espresso">Operating Hours</h4>
                  <p className="mt-0.5 text-espresso">{STORE_CONTACT.hours}</p>
                  <p className="text-[11px] text-taupe-muted">Sunday: Closed for order packaging</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-espresso/10">
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-espresso/10 text-[11px] text-taupe-muted">
                Looking for immediate bulk price lists? Mention your target quantities and salon or store name in the enquiry form.
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-espresso/10 shadow-soft">
            <h2 className="font-serif text-2xl text-espresso font-medium mb-2">
              Send a Message
            </h2>
            <p className="text-xs text-taupe-muted mb-6">
              (Interactive demonstration form. Submissions will display local confirmation).
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl text-emerald-900 font-medium">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Fashion Alley. This frontend demo simulation confirms your enquiry has been validated locally.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 py-2.5 px-6 bg-espresso text-white rounded-lg text-xs uppercase font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ananya Verma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                    Subject / Department *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso text-espresso"
                  >
                    <option value="Wholesale & Bulk Enquiry">
                      Wholesale &amp; Bulk Packs Enquiry
                    </option>
                    <option value="Product Styling & Sizing">
                      Product Styling &amp; Sizing Question
                    </option>
                    <option value="Order Tracking & Support">
                      Order Tracking &amp; Delivery Support
                    </option>
                    <option value="Custom Gift Combos">
                      Custom Wedding &amp; Event Gift Combos
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what items you're interested in, preferred quantities, or specific queries..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-espresso hover:bg-espresso-light text-white rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message (Demo Simulation)</span>
                </button>

                <p className="text-[10px] text-center text-taupe-muted">
                  No data is transmitted to an external database • Client-side verification
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
