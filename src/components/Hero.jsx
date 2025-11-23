import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { HOSTEL_INFO } from "../constants/theme";

const Hero = memo(() => {
  const scrollToSection = useSmoothScroll();

  const scrollToRooms = useCallback(() => {
    scrollToSection("rooms");
  }, [scrollToSection]);

  const scrollToContact = useCallback(() => {
    scrollToSection("contact");
  }, [scrollToSection]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#8B1A5C]/5 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent">
                {HOSTEL_INFO.name.split(' ')[0]}
              </span>
              <span className="block text-[#1E3A8A] text-3xl md:text-4xl lg:text-5xl font-serif italic mt-2">
                Ladies Hostel
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent font-semibold">
                {HOSTEL_INFO.targetAudience}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#8B1A5C] italic leading-relaxed font-light"
            >
              {HOSTEL_INFO.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToRooms}
                className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] hover:from-[#7A1650] hover:to-[#D81B60] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Rooms
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#8B1A5C] text-[#8B1A5C] hover:bg-gradient-to-r hover:from-[#8B1A5C] hover:to-[#E91E63] hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Navigate to contact section"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Modern hostel common area with comfortable seating"
                src="https://images.unsplash.com/photo-1592494804071-faea15d93a8a"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-auto object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] text-white p-6 rounded-xl shadow-xl"
            >
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm">Security</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
          onClick={scrollToRooms}
          aria-label="Scroll to rooms section"
        >
          <ChevronDown className="w-8 h-8 text-[#8B1A5C]" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
