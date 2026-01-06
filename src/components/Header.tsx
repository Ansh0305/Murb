import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, MapPin, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "New Arrivals", href: "/shop" },
  { name: "Sale", href: "/shop" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Main Header with Tan Background like Murb.in */}
      <div className="bg-primary">
        <div className="container mx-auto px-14 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="Murb Logo"
                className="h-24 w-24 -my-3 object-contain"
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-4 lg:mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Sports & Related Experiences..."
                  className="w-full pl-4 pr-12 py-2 rounded-full bg-white border-none text-black placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-transparent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Location - Desktop */}
              <button className="hidden lg:flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm">
                <MapPin className="h-4 w-4" />
                <span>Location</span>
              </button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              {/* Cart Button */}
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-white/20"
                asChild
              >
                <Link to="/cart">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </Button>

              {/* CTA Button - Desktop */}
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:flex bg-white text-primary hover:bg-white/90 font-medium"
                asChild
              >
                <Link to="/shop">Shop Now</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg"
          >
            {/* Mobile Search */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-3 rounded-full bg-secondary border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary text-lg font-medium py-3 px-2 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
