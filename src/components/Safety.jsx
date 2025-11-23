import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Camera, Lock, Clock, UserCheck, Phone } from "lucide-react";

const Safety = memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const safetyFeatures = useMemo(() => [
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security personnel ensuring your safety",
    },
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "Complete premises monitored with advanced camera systems",
    },
    {
      icon: Lock,
      title: "Biometric Access",
      description: "Secure entry with fingerprint and card-based systems",
    },
    {
      icon: Clock,
      title: "Visitor Management",
      description: "Strict visitor policies with proper verification",
    },
    {
      icon: UserCheck,
      title: "Female Staff",
      description: "Dedicated female wardens and support staff",
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Immediate assistance available at all times",
    },
  ], []);

  return (
    <section id="safety" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent">Safety</span> is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive security measures to ensure peace of mind for you and
            your family
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              alt="Secure hostel entrance with security personnel"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1684389705723-8d3752e73770"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B1A5C]/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#8B1A5C] group-hover:to-[#E91E63] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#8B1A5C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Parents' Peace of Mind</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            We understand the trust you place in us. Our comprehensive safety
            protocols and caring staff ensure that your daughter is in a secure,
            supportive environment where she can focus on her studies and
            personal growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

Safety.displayName = 'Safety';

export default Safety;
