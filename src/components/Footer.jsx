import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { HOSTEL_INFO, CONTACT_INFO } from "../constants/theme";

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent mb-4">
              {HOSTEL_INFO.name}
            </h3>
            <p className="text-gray-400">
              {HOSTEL_INFO.description}
            </p>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-[#E91E63] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-gray-400 hover:text-[#E91E63] transition-colors"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-gray-400 hover:text-[#E91E63] transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-gray-400 hover:text-[#E91E63] transition-colors"
                >
                  Safety
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Contact</span>
            <ul className="space-y-2 text-gray-400">
              <li>{CONTACT_INFO.address.line1}</li>
              <li>{CONTACT_INFO.address.line2}</li>
              <li>{CONTACT_INFO.address.line3}</li>
              {CONTACT_INFO.phones.map((phone, idx) => (
                <li key={idx}>
                  {phone.number}
                  {phone.isWhatsApp && <span className="text-whatsapp ml-1">(WhatsApp)</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Follow Us</span>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8B1A5C] hover:to-[#E91E63] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8B1A5C] hover:to-[#E91E63] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8B1A5C] hover:to-[#E91E63] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#8B1A5C] hover:to-[#E91E63] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {HOSTEL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
