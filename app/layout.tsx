import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { QuickViewProvider } from "@/context/QuickViewContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickView from "@/components/products/ProductQuickView";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashion Alley — Luxury Hair Accessories & Wholesale Boutique",
  description:
    "Discover handcrafted french hair claws, mulberry silk scrunchies, pearl hair pins, padded headbands, and wholesale hair accessories. India's premier fashion accessories boutique.",
  keywords: [
    "Fashion Alley",
    "hair claws",
    "silk scrunchies",
    "hair pins",
    "hair bands",
    "wholesale hair accessories",
    "Delhi wholesale",
  ],
  openGraph: {
    title: "Fashion Alley — Hair Accessories | Style | You",
    description: "Premium hair accessories boutique and wholesale supplier in India.",
    images: ["/images/banners/hero_lifestyle.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/fashionlogonew.jpg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/fashionlogonew.jpg",
    apple: "/images/fashionlogonew.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-espresso antialiased">
        <CartProvider>
          <WishlistProvider>
            <QuickViewProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
              <ProductQuickView />
            </QuickViewProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
