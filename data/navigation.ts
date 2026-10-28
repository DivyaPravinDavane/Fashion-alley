export interface NavItem {
  name: string;
  href: string;
  slug?: string;
  badge?: string;
  image?: string;
}

export const TOP_NAV_CATEGORIES: NavItem[] = [
  { name: "Hair Claws", href: "/collections/hair-claws", slug: "hair-claws" },
  { name: "Hair Bands", href: "/collections/hair-bands", slug: "hair-bands" },
  { name: "Scrunchies", href: "/collections/scrunchies", slug: "scrunchies" },
  { name: "Hair Pins", href: "/collections/hair-pins", slug: "hair-pins" },
  { name: "Back Clips", href: "/collections/back-clips", slug: "back-clips" },
  { name: "Banana Clips", href: "/collections/banana-clips", slug: "banana-clips" },
  { name: "Clip Cards", href: "/collections/clip-cards", slug: "clip-cards" },
  { name: "Rubber Bands", href: "/collections/rubber-bands", slug: "rubber-bands" },
  { name: "Juda Accessories", href: "/collections/juda-accessories", slug: "juda-accessories" },
  { name: "Hair Extension Buns", href: "/collections/hair-extension-buns", slug: "hair-extension-buns" },
  { name: "Gift Combos", href: "/collections/gift-combos", slug: "gift-combos" },
  { name: "Kids' Accessories", href: "/collections/kids-accessories", slug: "kids-accessories" },
];

export const ANNOUNCEMENT_MESSAGES = [
  "Free Shipping on Orders Above ₹999 | Upto 10% Off on Selected Products | Shop Now →",
  "Wholesale & Bulk Buying Available | Direct Factory Pricing | Inquire Today →",
  "Festive Gifting Edit is Live | Complimentary Gift Boxing with Combos →",
];

export const STORE_CONTACT = {
  phone: "+91 99765 43210",
  email: "support@fashionalley.co.in",
  address: "Fashion Alley Wholesale Hub, Delhi 110006, India",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
};
