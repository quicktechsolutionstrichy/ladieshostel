import React, { useState, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { CONTACT_INFO } from "../constants/theme";
import { getWhatsAppLink, getTelLink } from "../utils/index";

const Contact = memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = useMemo(() => [
    {
      icon: MapPin,
      title: "Visit Us",
      content: CONTACT_INFO.address.full,
    },
    {
      icon: Phone,
      title: "Call Us",
      phones: CONTACT_INFO.phones,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: CONTACT_INFO.officeHours,
    },
  ], []);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#D3D3D3]/10 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#8B1A5C]/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#8B1A5C] group-hover:to-[#E91E63] transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-[#8B1A5C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.phones ? (
                        <div className="space-y-2">
                          {info.phones.map((phone, idx) => (
                            <a
                              key={idx}
                              href={phone.isWhatsApp ? getWhatsAppLink(phone.number) : getTelLink(phone.number)}
                              className="flex items-center text-gray-600 hover:text-[#8B1A5C] transition-colors group"
                              aria-label={`${phone.isWhatsApp ? 'WhatsApp' : 'Call'} ${phone.number}`}
                            >
                              {phone.isWhatsApp && (
                                <span 
                                  className="inline-block w-4 h-4 mr-2 bg-whatsapp rounded-full flex-shrink-0"
                                  aria-hidden="true"
                                ></span>
                              )}
                              <span className="group-hover:underline">{phone.number}</span>
                              {phone.isWhatsApp && (
                                <span className="text-whatsapp ml-2 text-sm" aria-label="WhatsApp available">
                                  (WhatsApp)
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      ) : info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-[#8B1A5C] transition-colors hover:underline"
                          aria-label={`${info.title}: ${info.content}`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-lg h-64"
            >
              <img
                alt="Hostel location map"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1501638516946-eba1122a4bce"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1A5C] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1A5C] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1A5C] focus:border-transparent transition-all duration-300"
                  placeholder="+91 97516 69229"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1A5C] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] hover:from-[#7A1650] hover:to-[#D81B60] text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
