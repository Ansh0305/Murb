import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

const Shop = () => {
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Explore our complete collection of performance gear.
            </p>
          </motion.div>

          {/* Products Grid - Murb.in style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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

                      {/* Category Badge */}
                      <span className="absolute top-3 right-3 bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>

                      {/* Live Badge */}
                      <span className="absolute top-3 left-3 bg-white text-indigo-600 px-2 py-0.5 rounded text-xs font-medium">
                        Live
                      </span>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-start gap-2 text-black text-sm mb-3">
                        <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{product.description.slice(0, 50)}...</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-black mb-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        <span>{Math.floor(Math.random() * 5000 + 1000)} slots</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-foreground font-bold text-xl">
                          ₹{product.price}
                        </p>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
