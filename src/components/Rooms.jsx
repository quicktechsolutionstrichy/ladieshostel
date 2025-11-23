import React, { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bed, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const Rooms = memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const handleBooking = useCallback(() => {
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  }, [toast]);

  const rooms = useMemo(() => [
    {
      title: "1 Sharing Room",
      description: "Perfect for those who value privacy and personal space",
      icon: Bed,
      features: ["Private bathroom", "Study desk", "Wardrobe", "AC/Non-AC"],
      image: "Clean single bedroom with study desk and natural light",
    },
    {
      title: "2 Sharing Room",
      description: "Ideal for making friends while enjoying comfort",
      icon: Users,
      features: ["Attached bathroom", "Individual storage", "Study area", "AC/Non-AC"],
      image: "Spacious double occupancy room with two beds and study area",
    },
    {
      title: "3 Sharing Room",
      description: "Budget-friendly option with all essential amenities",
      icon: Users,
      features: [
        "Common bathroom",
        "Personal lockers",
        "Shared study space",
        "AC/Non-AC",
      ],
      image: "Well-organized triple sharing room with comfortable beds",
    },
    {
      title: "4 Sharing Room",
      description: "Spacious accommodation for groups",
      icon: Users,
      features: [
        "Common bathroom",
        "Individual storage",
        "Study area",
        "AC/Non-AC",
      ],
      image: "Comfortable four sharing room",
    },
    {
      title: "5 Sharing Room",
      description: "Economical option with all facilities",
      icon: Users,
      features: [
        "Common bathroom",
        "Personal lockers",
        "Shared study space",
        "AC/Non-AC",
      ],
      image: "Well-organized five sharing room",
    },
  ], []);

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of thoughtfully designed rooms that suit your
            needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={`${room.title} - ${room.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1699598399746-d1473e05cd97"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] text-white p-3 rounded-full">
                    <room.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {room.title}
                  </h3>
                  <p className="text-gray-600">{room.description}</p>

                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#8B1A5C] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] hover:from-[#7A1650] hover:to-[#D81B60] text-white py-6 rounded-lg transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Rooms.displayName = 'Rooms';

export default Rooms;
