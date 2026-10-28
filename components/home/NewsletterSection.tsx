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
    <section className="bg-[#FDF1EB] py-14 sm:py-18 border-b border-[#F2D8CB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#DD592A] block">
          💌 Stay Connected
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl text-espresso font-extrabold">
          A Little More Lovely in Your Inbox.
        </h2>
        <p className="text-xs sm:text-sm text-[#6B6B66] max-w-md mx-auto font-medium">
          Receive exclusive previews of new accessory edits, styling guides, and festive gift releases.
        </p>

        <div className="pt-2 max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 animate-fade-in shadow-sm">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>Subscribed! Thank you for joining Fashion Alley.</span>
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
                  className="w-full text-xs py-3.5 px-5 rounded-full border border-[#F2D8CB] bg-white text-espresso placeholder:text-espresso/40 focus:border-[#DD592A] outline-none shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="py-3.5 px-7 bg-[#DD592A] hover:bg-[#C74718] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-salty flex-shrink-0"
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
