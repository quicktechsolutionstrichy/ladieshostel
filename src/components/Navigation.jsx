import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useScroll } from "../hooks/useScroll";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Navigation = React.memo(() => {
  const isScrolled = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  const handleNavClick = useCallback(
    (id) => {
      scrollToSection(id);
      setIsMobileMenuOpen(false);
    },
    [scrollToSection]
  );

  const navItems = [
    { label: "Home", id: "hero", ariaLabel: "Navigate to home section" },
    { label: "Rooms", id: "rooms", ariaLabel: "Navigate to rooms section" },
    {
      label: "Amenities",
      id: "amenities",
      ariaLabel: "Navigate to amenities section",
    },
    { label: "Safety", id: "safety", ariaLabel: "Navigate to safety section" },
    {
      label: "Contact",
      id: "contact",
      ariaLabel: "Navigate to contact section",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            onClick={() => handleNavClick("hero")}
            aria-label="Seetha Ladies Hostel - Go to home"
          >
            Seetha Hostels
          </motion.button>

          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                aria-label={item.ariaLabel}
                className="text-gray-700 hover:text-[#8B1A5C] focus:text-[#8B1A5C] font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] group-hover:w-full group-focus:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-label={item.ariaLabel}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#D3D3D3]/20 hover:text-[#8B1A5C] focus:bg-[#D3D3D3]/20 focus:text-[#8B1A5C] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
