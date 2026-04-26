import { NextRequest } from "next/server";
import { apiSuccess } from "@/lib/api";

// Static furniture catalog (replace with DB query when you have a real catalog)
const CATALOG = [
  { id: 1, name: "Elara Cloud Sofa", category: "Sofas", style: "Modern Minimal", price: "$1,299", rating: 4.9, reviews: 312, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop&q=80", badge: "Best Seller", room: "Living Room" },
  { id: 2, name: "Arc Lounge Chair", category: "Chairs", style: "Scandinavian", price: "$649", rating: 4.8, reviews: 187, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=500&fit=crop&q=80", badge: "New", room: "Living Room" },
  { id: 3, name: "Marble Oval Dining Table", category: "Tables", style: "Luxe", price: "$2,199", rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=500&fit=crop&q=80", badge: "Top Rated", room: "Dining Room" },
  { id: 4, name: "Linen Platform Bed", category: "Storage", style: "Japandi", price: "$1,899", rating: 4.9, reviews: 423, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=500&fit=crop&q=80", badge: "Best Seller", room: "Bedroom" },
  { id: 5, name: "Brass Arc Floor Lamp", category: "Lighting", style: "Mid-Century", price: "$399", rating: 4.8, reviews: 256, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=500&fit=crop&q=80", badge: "Trending", room: "Living Room" },
  { id: 6, name: "Velvet Accent Chair", category: "Chairs", style: "Maximalist", price: "$849", rating: 4.6, reviews: 142, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop&q=80", badge: "New", room: "Study" },
  { id: 7, name: "Walnut Coffee Table", category: "Tables", style: "Modern Minimal", price: "$599", rating: 4.7, reviews: 198, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&h=500&fit=crop&q=80", badge: "Top Rated", room: "Living Room" },
  { id: 8, name: "Rattan Pendant Light", category: "Lighting", style: "Boho", price: "$189", rating: 4.5, reviews: 308, image: "https://images.unsplash.com/photo-1513506003901-1e6a35549b8b?w=600&h=500&fit=crop&q=80", badge: "Trending", room: "Dining Room" },
  { id: 9, name: "Modular Bookshelf", category: "Storage", style: "Industrial", price: "$749", rating: 4.8, reviews: 167, image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=500&fit=crop&q=80", badge: "Best Seller", room: "Study" },
  { id: 10, name: "Japandi 3-Seater Sofa", category: "Sofas", style: "Japandi", price: "$1,599", rating: 4.9, reviews: 281, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=500&fit=crop&q=80", badge: "New", room: "Living Room" },
  { id: 11, name: "Ceramic Table Lamp", category: "Lighting", style: "Artisan", price: "$229", rating: 4.6, reviews: 112, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&q=80", badge: "New", room: "Bedroom" },
  { id: 12, name: "Terracotta Vase Set", category: "Decor", style: "Boho", price: "$89", rating: 4.7, reviews: 534, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=500&fit=crop&q=80", badge: "Trending", room: "Any Room" },
];

// GET /api/furniture?category=Sofas&q=sofa&limit=12&page=1
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const q = searchParams.get("q")?.toLowerCase();
  const limit = Math.min(Number(searchParams.get("limit") ?? 12), 50);
  const page = Math.max(Number(searchParams.get("page") ?? 1), 1);

  let items = [...CATALOG];

  if (category && category !== "All") {
    items = items.filter((i) => i.category === category);
  }

  if (q) {
    items = items.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.style.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    );
  }

  const total = items.length;
  const paginated = items.slice((page - 1) * limit, page * limit);

  return apiSuccess({
    items: paginated,
    meta: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}
