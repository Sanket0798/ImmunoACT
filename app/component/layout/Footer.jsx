"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "../../styles/globals.css";
import {
  FooterYouTube,
  FooterMeta,
  FooterLinkedIn,
  FooterTwitter,
  FooterInstagram,
  FooterMail,
  FooterMap,
} from "../../../public/assets/svg/Icons";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Image from "next/image";

const Footer = () => {
  // const [formData, setFormData] = useState({ name: "", email: "" });
  const [activeLink, setActiveLink] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please enter both your name and email.");
      return;
    }
    alert(
      `Thank you, ${formData.name}! You have subscribed with ${formData.email}`
    );
    setFormData({ name: "", email: "" });
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const currentYear = new Date().getFullYear();

  const footerSections = {
    "I am a": [
      { name: "Patient / Caregiver", href: "#" },
      { name: "Healthcare Professional", href: "#" },
      { name: "Industry Professional", href: "#" },
    ],
    About: [
      { name: "About Us", href: "#" },
      { name: "Media", href: "#" },
      { name: "Our Team", href: "#" },
    ],
    Resources: [{ name: "Privacy Policy", href: "#" }],
  };

  const contactInfo = [
    {
      name: "1st Floor, Plot R-977, TTC Industrial Area, MIDC Rabale, Navi Mumbai 400701 India.",
      href: "https://www.google.com/maps?q=1st+Floor,+Plot+R-977,+TTC+Industrial+Area,+MIDC+Rabale,+Navi+Mumbai+400701+India",
      icon: <FooterMap />,
    },
    {
      name: "helpdesk@immunoact.com",
      href: "mailto:youremail@id.com",
      icon: <FooterMail />,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <FooterMeta />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FooterInstagram />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FooterTwitter />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <FooterLinkedIn />,
    },
    {
      name: "Youtube",
      href: "#",
      icon: <FooterYouTube />,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 avenir-font"
    >
      {/* Fade Effect Border */}
      {/* <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-t from-gray to-transparent"></div> */}
      {/* <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-20 bg-gradient-to-t from-gray-800 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 sm:w-1/4 bg-gradient-to-t from-background z-10"></div> */}

      <div className="container mx-auto">
        {/* Newsletter Section */}
        {/* <div className="mb-12 flex flex-col sm:flex-row items-center gap-4">
          <img
            src="/assets/common/ImmunoACT_Logo.png"
            alt="ImmunoACT Logo"
            className="h-12"
          />
          <div>
            <h2 className="text-lg font-semibold mb-2">Subscribe Now</h2>
            <p className="text-sm text-gray-600 mb-4">Your Tagline here</p> */}
        {/* <div className="flex flex-col gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div> */}
        {/* <motion.div
              className="max-w-md w-full p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-white text-center">
                Stay Updated 🚀
              </h2>
              <Input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Button>Subscribe</Button>
            </motion.div>
          </div>
        </div> */}

        <hr className="bg-[#404040]/40 w-full h-[1px]" />

        <div className="flex-center-between-row py-6">
          {/* <div className="max-w-2xl w-full  p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4"> */}
          {/* <Image src="/assets/common/ImmunoACT_Logo.png" alt="Logo" width={50} height={50} /> */}
          <Image
            src="/assets/common/ImmunoACT_Logo.png"
            alt="Logo"
            width={170}
            height={100}
          />
          <div className="flex items-end justify-between flex-col">
            <h2 className="text-xl font-semibold">
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
                className="p-2 rounded-xl"
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
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
          {/* </div> */}
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
              <h3
                className="text-lg text-gray-900 mb-4"
                style={{ fontWeight: "bold" }}
              >
                {title}
              </h3>
              {/* <ul className="space-y-2 text-[#ababab]">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                    >
                      {link.icon && <span className="mr-2">{link.icon}</span>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul> */}
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
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            © {currentYear} by <span className="text-semibold">ImmunoACT</span>.
            All Right Reserved.
          </p>
          <div className="flex items-center justify-start space-x-4">
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
