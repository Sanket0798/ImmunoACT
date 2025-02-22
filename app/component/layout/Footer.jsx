"use client";
import { motion } from "framer-motion";
import React, { useState, useCallback, useMemo } from "react";
import "../../styles/globals.css";
import {
  socialLinks,
  contactInfo,
  footerSections,
} from "../../data/sharedData";
import Image from "next/image";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!formData.name.trim() || !formData.email.trim()) {
        alert("Please enter both your name and email.");
        return;
      }
      alert(
        `Thank you, ${formData.name}! You have subscribed with ${formData.email}`
      );
      setFormData({ name: "", email: "" });
    },
    [formData]
  );

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 avenir-font"
    >
      <div className="container mx-auto">
        <hr className="bg-[#404040]/40 w-full h-[1px]" />

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <Image
            src="/assets/common/ImmunoACT_Logo.png"
            alt="Logo"
            width={170}
            height={100}
            className="mb-4 md:mb-0"
          />
          <div className="flex flex-col items-end space-y-4 md:space-y-2 md:space-x-4">
            <h2 className="text-lg font-bold text-center md:text-left">
              Join our newsletter to keep up to date with us!
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-3 w-full md:w-auto"
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-lg placeholder:text-sm w-full md:w-auto"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded-lg placeholder:text-sm w-full md:w-auto"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Render Footer Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg text-gray-900 mb-4 font-bold">{title}</h3>
              <ul className="space-y-2 text-[#ababab]">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.name)}
                      className={`text-sm transition-colors flex items-center ${
                        activeLink === link.name
                          ? "text-black"
                          : "text-black hover:text-[#a3320b]"
                      }`}
                    >
                      {link.icon && <span className="mr-2">{link.icon}</span>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Render Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((contact) => (
                <li key={contact.name} className="flex items-start">
                  {contact.icon && <span className="mr-2">{contact.icon}</span>}
                  <a
                    href={contact.href}
                    className="text-sm md:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <hr className="bg-[#404040]/40 w-full h-[1px]" />

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0 text-center sm:text-left">
            © {currentYear} by <span className="font-semibold">ImmunoACT</span>.
            All Right Reserved.
          </p>
          <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
