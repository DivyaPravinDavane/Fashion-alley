export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  content: string;
  verifiedPurchase: boolean;
  productName: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Priya S.",
    role: "Verified Wholesale Buyer",
    rating: 5,
    date: "October 2026",
    content: "Fashion Alley hair clips are exceptionally sturdy and fashionable. The acetate finish has a gorgeous luxury shine and our boutique customers keep coming back for more!",
    verifiedPurchase: true,
    productName: "Classic Hair Claw Set",
  },
  {
    id: "rev-2",
    author: "Ananya M.",
    role: "Fashion Stylist",
    rating: 5,
    date: "September 2026",
    content: "The pearl hair pins and satin scrunchies are sublime. Gentle on bleached and delicate hair, with no crimping or snagging whatsoever.",
    verifiedPurchase: true,
    productName: "Pearl Hair Pins",
  },
  {
    id: "rev-3",
    author: "Ritu K.",
    role: "Boutique Owner, Delhi",
    rating: 5,
    date: "August 2026",
    content: "Outstanding bulk pack quality and prompt dispatch. The packaging arrived crisp and intact. Best hair accessories supplier we have partnered with.",
    verifiedPurchase: true,
    productName: "Fabric Hair Bands",
  },
];
