export interface CuratedCollection {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  highlightTag?: string;
}

export const COLLECTIONS: CuratedCollection[] = [
  {
    id: "col-everyday",
    slug: "everyday-essentials",
    title: "Everyday Essentials",
    description: "Timeless pieces for your daily style.",
    image: "/images/products/fa_hair-claws_2.png",
    itemCount: 24,
    highlightTag: "Daily Wear",
  },
  {
    id: "col-festive",
    slug: "festive-styling",
    title: "Festive Styling",
    description: "Add a touch of sparkle.",
    image: "/images/products/fa_juda-accessories_1.jpg",
    itemCount: 18,
    highlightTag: "Occasions",
  },
  {
    id: "col-colourful",
    slug: "colourful-favourites",
    title: "Colourful Favourites",
    description: "Brighten up your look.",
    image: "/images/products/fa_scrunchies_1.jpg",
    itemCount: 30,
    highlightTag: "Trending",
  },
  {
    id: "col-gifts",
    slug: "gift-worthy-combos",
    title: "Gift-Worthy Combos",
    description: "Perfect for every occasion.",
    image: "/images/products/fa_clip-cards_2.jpg",
    itemCount: 12,
    highlightTag: "Curated Sets",
  },
];
