import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function FeaturedProducts() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes?.[0], product.colors?.[0]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">
            Trending
          </h2>
        </motion.div>

        {/* Products Grid - Murb.in style cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to={`/product/${product.id}`} className="group block">
                <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category Badge - Top Right */}
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>

                    {/* Live Badge - Bottom Right */}
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
                      Live
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Location/Description */}
                    <div className="flex items-start gap-2 text-muted-foreground text-sm mb-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{product.description.slice(0, 60)}...</span>
                    </div>

                    {/* Slots indicator */}
                    <div className="flex items-center gap-1 text-xs text-primary mb-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                      <span>{Math.floor(Math.random() * 5000 + 1000)} slots</span>
                    </div>

                    {/* Price and Button Row */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground font-bold text-xl">
                          ₹{product.price}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="rounded-full px-6"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        Buy
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Button
            className="rounded-full px-8"
            asChild
          >
            <Link to="/shop">
              View All
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
