"use client";

import React, { useState } from "react";
import { Check, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 border-b border-espresso/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-espresso/60 block">
          Stay Connected
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
          A Little More Lovely in Your Inbox.
        </h2>
        <p className="text-xs sm:text-sm text-charcoal/70 max-w-md mx-auto font-sans">
          Receive exclusive previews of new accessory edits, styling guides, and festive gift releases.
        </p>

        <div className="pt-2 max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Subscribed! Thank you for joining Fashion Alley demo newsletter.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs py-3 px-4 rounded-full border border-espresso/20 bg-white text-espresso placeholder:text-espresso/40 focus:border-espresso outline-none shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="py-3 px-6 bg-espresso hover:bg-espresso-light text-white text-xs uppercase tracking-wider font-semibold rounded-full transition-all shadow-soft flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[10px] text-taupe-muted mt-2">
            (This is a frontend demonstration. No data will be saved.)
          </p>
        </div>
      </div>
    </section>
  );
}
