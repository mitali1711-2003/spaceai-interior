"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Sofas", "Chairs", "Tables", "Lighting", "Storage", "Decor"];

const furniture = [
  {
    id: 1,
    name: "Elara Cloud Sofa",
    category: "Sofas",
    style: "Modern Minimal",
    price: "$1,299",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop&q=80",
    badge: "Best Seller",
    badgeColor: "bg-electric-blue/20 text-electric-blue border-electric-blue/30",
    room: "Living Room",
  },
  {
    id: 2,
    name: "Arc Lounge Chair",
    category: "Chairs",
    style: "Scandinavian",
    price: "$649",
    rating: 4.8,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=500&fit=crop&q=80",
    badge: "New",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Living Room",
  },
  {
    id: 3,
    name: "Marble Oval Dining Table",
    category: "Tables",
    style: "Luxe",
    price: "$2,199",
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=500&fit=crop&q=80",
    badge: "Top Rated",
    badgeColor: "bg-purple-400/20 text-purple-400 border-purple-400/30",
    room: "Dining Room",
  },
  {
    id: 4,
    name: "Linen Platform Bed",
    category: "Storage",
    style: "Japandi",
    price: "$1,899",
    rating: 4.9,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=500&fit=crop&q=80",
    badge: "Best Seller",
    badgeColor: "bg-electric-blue/20 text-electric-blue border-electric-blue/30",
    room: "Bedroom",
  },
  {
    id: 5,
    name: "Brass Arc Floor Lamp",
    category: "Lighting",
    style: "Mid-Century",
    price: "$399",
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=500&fit=crop&q=80",
    badge: "Trending",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Living Room",
  },
  {
    id: 6,
    name: "Velvet Accent Chair",
    category: "Chairs",
    style: "Maximalist",
    price: "$849",
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop&q=80",
    badge: "New",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Study",
  },
  {
    id: 7,
    name: "Walnut Coffee Table",
    category: "Tables",
    style: "Modern Minimal",
    price: "$599",
    rating: 4.7,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&h=500&fit=crop&q=80",
    badge: "Top Rated",
    badgeColor: "bg-purple-400/20 text-purple-400 border-purple-400/30",
    room: "Living Room",
  },
  {
    id: 8,
    name: "Rattan Pendant Light",
    category: "Lighting",
    style: "Boho",
    price: "$189",
    rating: 4.5,
    reviews: 308,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a35549b8b?w=600&h=500&fit=crop&q=80",
    badge: "Trending",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Dining Room",
  },
  {
    id: 9,
    name: "Modular Bookshelf",
    category: "Storage",
    style: "Industrial",
    price: "$749",
    rating: 4.8,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=500&fit=crop&q=80",
    badge: "Best Seller",
    badgeColor: "bg-electric-blue/20 text-electric-blue border-electric-blue/30",
    room: "Study",
  },
  {
    id: 10,
    name: "Japandi 3-Seater Sofa",
    category: "Sofas",
    style: "Japandi",
    price: "$1,599",
    rating: 4.9,
    reviews: 281,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=500&fit=crop&q=80",
    badge: "New",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Living Room",
  },
  {
    id: 11,
    name: "Ceramic Table Lamp",
    category: "Lighting",
    style: "Artisan",
    price: "$229",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&q=80",
    badge: "New",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Bedroom",
  },
  {
    id: 12,
    name: "Terracotta Vase Set",
    category: "Decor",
    style: "Boho",
    price: "$89",
    rating: 4.7,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=500&fit=crop&q=80",
    badge: "Trending",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
    room: "Any Room",
  },
];

function FurnitureCard({ item, index }: { item: typeof furniture[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-electric-blue/30 hover:shadow-glow-blue-sm transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="flex items-center gap-2 bg-electric-blue text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-400 transition-colors shadow-glow-blue"
              >
                <Eye className="w-3.5 h-3.5" />
                Preview in AR
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 glass text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors border border-white/20"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Room
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
          {item.badge}
        </div>

        {/* Room tag */}
        <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1 text-xs text-white/60 border border-white/10">
          {item.room}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="font-semibold text-sm text-white leading-tight">{item.name}</h3>
            <p className="text-white/40 text-xs mt-0.5">{item.style}</p>
          </div>
          <span className="font-display font-bold text-electric-blue text-sm flex-shrink-0 ml-2">
            {item.price}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-white/60 font-medium">{item.rating}</span>
          <span className="text-xs text-white/30">({item.reviews} reviews)</span>
        </div>
      </div>
    </motion.div>
  );
}

export function FurnitureShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? furniture
      : furniture.filter((f) => f.category === activeCategory);

  return (
    <section className="section-padding py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-gold border border-gold/20 mb-4">
              Furniture Catalog
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Find What Fits{" "}
              <span className="gradient-text">Your Corner</span>
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-lg">
              Browse 50,000+ curated pieces. Hover any item to preview it in AR inside your actual room.
            </p>
          </div>

          <Link
            href="/features"
            className="btn-secondary flex items-center gap-2 text-sm flex-shrink-0 self-start sm:self-end"
          >
            View Full Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 flex-wrap mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-electric-blue text-white shadow-glow-blue-sm"
                  : "glass text-white/50 hover:text-white hover:bg-white/8 border border-white/8"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="ml-2 text-xs opacity-70">
                  {cat === "All" ? furniture.length : furniture.filter((f) => f.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <FurnitureCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4">
            Showing {filtered.length} of 50,000+ items
          </p>
          <Link
            href="/pricing"
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            Unlock Full Catalog — Try Pro Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
