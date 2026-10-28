"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, clearCart } = useCart();

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "Delhi",
    pincode: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">(
    "standard"
  );
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi" | "card">(
    "cod"
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const deliveryCost = deliveryMethod === "express" ? 149 : shipping;
  const finalTotal = subtotal + deliveryCost;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.email || !contactInfo.firstName || !contactInfo.address) {
      alert("Please fill in the required contact and shipping details.");
      return;
    }
    const demoId = `FA-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(demoId);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="bg-[#FAF7F2] min-h-[80vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-espresso/10 shadow-luxury text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demonstration Order Placed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal mt-3">
              Thank You, {contactInfo.firstName || "Customer"}!
            </h1>
            <p className="text-xs font-semibold text-taupe-muted mt-1">
              Order Reference: <strong className="text-espresso font-mono">{orderId}</strong>
            </p>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-espresso/10 text-xs text-charcoal/80 space-y-2 text-left">
            <div className="flex justify-between border-b border-espresso/10 pb-2">
              <span className="text-taupe-muted">Shipping Address:</span>
              <span className="font-medium text-espresso text-right">
                {contactInfo.address}, {contactInfo.city}, {contactInfo.state} - {contactInfo.pincode}
              </span>
            </div>
            <div className="flex justify-between border-b border-espresso/10 pb-2">
              <span className="text-taupe-muted">Contact Email:</span>
              <span className="font-medium text-espresso">{contactInfo.email}</span>
            </div>
            <div className="flex justify-between border-b border-espresso/10 pb-2">
              <span className="text-taupe-muted">Payment Mode:</span>
              <span className="font-medium text-espresso uppercase">
                {paymentMethod === "cod"
                  ? "Cash on Delivery (Demo)"
                  : paymentMethod === "upi"
                  ? "UPI Payment (Demo)"
                  : "Card Simulation (Demo)"}
              </span>
            </div>
            <div className="flex justify-between pt-1 font-semibold text-espresso">
              <span>Total Demonstration Amount:</span>
              <span>{formatPrice(finalTotal)}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed text-left">
            <strong>Frontend Prototype Notice:</strong> This website is an interactive demonstration built for Fashion Alley. No actual credit card charge, banking transaction, or physical shipment has been created.
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-espresso text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-espresso-light transition-all shadow-md"
          >
            <span>Return to Boutique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-3xl border border-espresso/10 shadow-soft space-y-4">
          <ShoppingBag className="w-12 h-12 text-espresso/40 mx-auto" />
          <h2 className="font-serif text-2xl text-espresso font-medium">
            Your Bag is Empty
          </h2>
          <p className="text-xs text-taupe-muted">
            Please add accessories to your bag before proceeding to checkout.
          </p>
          <Link
            href="/shop"
            className="inline-block py-2.5 px-6 bg-espresso text-white rounded text-xs uppercase font-semibold"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <nav className="text-xs text-taupe-muted mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-espresso">
              Home
            </Link>
            <span>/</span>
            <Link href="/cart" className="hover:text-espresso">
              Bag
            </Link>
            <span>/</span>
            <span className="text-espresso font-medium">Demo Checkout</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
            Checkout Demonstration
          </h1>
          <p className="text-xs text-taupe-muted mt-1">
            Complete the form below to simulate placing an order. (No actual payments or card entries required).
          </p>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT: Address & Payment Forms */}
            <div className="lg:col-span-7 space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-3">
                  1. Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, phone: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-3">
                  2. Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Priya"
                      value={contactInfo.firstName}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      value={contactInfo.lastName}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House no, Street name, Locality"
                    value={contactInfo.address}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, address: e.target.value })
                    }
                    className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Delhi"
                      value={contactInfo.city}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, city: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Delhi"
                      value={contactInfo.state}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, state: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-espresso block mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="110006"
                      value={contactInfo.pincode}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, pincode: e.target.value })
                      }
                      className="w-full text-xs p-3 rounded-lg border border-espresso/20 bg-[#FAF7F2] outline-none focus:border-espresso"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-3">
                  3. Delivery Method
                </h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      deliveryMethod === "standard"
                        ? "border-espresso bg-[#FAF7F2]"
                        : "border-espresso/15 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryMethod === "standard"}
                        onChange={() => setDeliveryMethod("standard")}
                        className="accent-espresso"
                      />
                      <div>
                        <p className="text-xs font-semibold text-espresso">
                          Standard Ground Delivery (3–5 Business Days)
                        </p>
                        <p className="text-[11px] text-taupe-muted">
                          Reliable pan-India delivery across all major metro cities
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-espresso">
                      {shipping === 0 ? "FREE" : formatPrice(shipping)}
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      deliveryMethod === "express"
                        ? "border-espresso bg-[#FAF7F2]"
                        : "border-espresso/15 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryMethod === "express"}
                        onChange={() => setDeliveryMethod("express")}
                        className="accent-espresso"
                      />
                      <div>
                        <p className="text-xs font-semibold text-espresso">
                          Express Air Courier (1–2 Business Days)
                        </p>
                        <p className="text-[11px] text-taupe-muted">
                          Priority dispatch via BlueDart or Delhivery Air
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-espresso">
                      ₹ 149
                    </span>
                  </label>
                </div>
              </div>

              {/* Payment Method Demo */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-4">
                <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-3">
                  4. Payment Demonstration
                </h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-espresso bg-[#FAF7F2]"
                        : "border-espresso/15 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-espresso"
                    />
                    <Banknote className="w-5 h-5 text-espresso" />
                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Cash on Delivery (Demo Simulation)
                      </p>
                      <p className="text-[11px] text-taupe-muted">
                        Pay safely upon arrival at your doorstep
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "upi"
                        ? "border-espresso bg-[#FAF7F2]"
                        : "border-espresso/15 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="accent-espresso"
                    />
                    <QrCode className="w-5 h-5 text-espresso" />
                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Instant UPI Payment (Demo)
                      </p>
                      <p className="text-[11px] text-taupe-muted">
                        Simulated GPay, PhonePe, Paytm, BHIM flow
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* RIGHT: Order Summary Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-espresso/10 shadow-soft space-y-6 sticky top-28">
              <h2 className="font-serif text-xl text-espresso font-medium border-b border-espresso/10 pb-3">
                Items in Order ({items.length})
              </h2>

              <div className="max-h-64 overflow-y-auto divide-y divide-espresso/10 pr-1 space-y-3">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant?.id || "default"}`}
                    className="flex gap-3 pt-3 first:pt-0 items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-champagne-light flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-espresso truncate font-serif">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-taupe-muted">
                          Qty: {item.quantity} {item.variant ? `• ${item.variant.name}` : ""}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-espresso">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-espresso/10 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>Delivery Charge</span>
                  <span>
                    {deliveryCost === 0 ? "FREE" : formatPrice(deliveryCost)}
                  </span>
                </div>
                <div className="border-t border-espresso/10 pt-3 flex justify-between text-base font-extrabold text-espresso">
                  <span>Total Amount</span>
                  <span className="text-lg text-[#DD592A]">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#DD592A] hover:bg-[#C74718] text-white rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-salty active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                <span>Place Order ({formatPrice(finalTotal)})</span>
              </button>

              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-espresso/10 text-[11px] text-taupe-muted text-center space-y-1">
                <p className="font-semibold text-espresso">
                  🔒 Safe Frontend Demonstration
                </p>
                <p>
                  No real orders or payments will be executed. This validates the full shopping workflow.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
