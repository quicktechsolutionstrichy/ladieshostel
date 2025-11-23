import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FACILITIES, CONTACT_INFO } from "../constants/theme";

const Amenities = memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="amenities"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] rounded-full px-8 py-3 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-serif italic text-white">
                Facilities
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto"
        >
          {/* Left Column */}
          <div className="space-y-4" role="list">
            {FACILITIES.left.map((facility, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-3"
                role="listitem"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-[#8B1A5C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 7l7 5 7-5" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#8B1A5C]">{facility}</p>
              </motion.li>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4" role="list">
            {FACILITIES.right.map((facility, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-3"
                role="listitem"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-[#8B1A5C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 7l7 5 7-5" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#8B1A5C]">{facility}</p>
              </motion.li>
            ))}
          </div>
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] rounded-2xl p-6 md:p-8 text-center shadow-xl"
          role="region"
          aria-label="Contact information"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-white text-xl md:text-2xl font-bold">
            {CONTACT_INFO.phones.map((phone, idx) => (
              <React.Fragment key={idx}>
                <a
                  href={phone.isWhatsApp ? `https://wa.me/91${phone.number.replace(/\s/g, '')}` : `tel:+91${phone.number.replace(/\s/g, '')}`}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8B1A5C] rounded px-2"
                  aria-label={`${phone.isWhatsApp ? 'WhatsApp' : 'Call'} ${phone.number}`}
                >
                  {phone.number}
                </a>
                {idx < CONTACT_INFO.phones.length - 1 && (
                  <span className="text-white/70" aria-hidden="true">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          className="text-[#8B1A5C]"
        >
          <path
            d="M100,50 Q50,100 100,150 Q150,100 100,50 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
});

Amenities.displayName = 'Amenities';

export default Amenities;
