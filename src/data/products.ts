import productShoes from "@/assets/product-shoes.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productLeggings from "@/assets/product-leggings.jpg";
import productBackpack from "@/assets/product-backpack.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stealth Runner X",
    category: "Running Shoes",
    price: 189,
    image: productShoes,
    description: "Engineered for speed and comfort. The Stealth Runner X features responsive cushioning and a lightweight mesh upper for breathability during intense runs.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 2,
    name: "Storm Track Jacket",
    category: "Outerwear",
    price: 145,
    image: productJacket,
    description: "Weather-resistant performance jacket with moisture-wicking technology. Perfect for outdoor training in any condition.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Orange"],
  },
  {
    id: 3,
    name: "Compression Pro",
    category: "Leggings",
    price: 89,
    image: productLeggings,
    description: "High-performance compression leggings that support muscle recovery and enhance circulation. Four-way stretch fabric for unrestricted movement.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"],
  },
  {
    id: 4,
    name: "Endurance Pack",
    category: "Accessories",
    price: 129,
    image: productBackpack,
    description: "Durable training backpack with multiple compartments for all your gear. Features padded laptop sleeve and water bottle pockets.",
    sizes: ["One Size"],
    colors: ["Black", "Grey"],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
