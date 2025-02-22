"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Updated navigation items with dropdown menus
const navigation = [
  {
    name: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Partners", href: "/about/partners" },
    ],
  },
  {
    name: "Our Science",
    href: "/works",
    hasDropdown: true,
    dropdownItems: [
      { name: "Technology", href: "/works/technology" },
      { name: "Research", href: "/works/research" },
      { name: "Publications", href: "/works/publications" },
    ],
  },
  {
    name: "NexCAR19",
    href: "/nexcar19",
    hasDropdown: true,
    dropdownItems: [
      { name: "Overview", href: "/nexcar19/overview" },
      { name: "Clinical Trials", href: "/nexcar19/trials" },
      { name: "Patient Information", href: "/nexcar19/patients" },
    ],
  },
  { name: "Careers", href: "/faq" },
];

// Updated NavLink component to include dropdown
const NavLink = memo(
  ({ href, name, isActive, isMobile, onClick, hasDropdown, dropdownItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div className="relative group">
        <div className="flex items-center">
          <Link
            href={hasDropdown ? "#" : href}
            className={cn(
              "relative font-medium transition-colors hover:text-[#ff6300]",
              isMobile
                ? "block w-full text-center py-4 text-lg"
                : "px-3 py-2 text-sm",
              isActive ? "text-[#400406]" : "text-gray-600",
              !isMobile &&
                "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-[#400406] before:transition-transform hover:before:scale-x-100",
              !isMobile && isActive && "before:scale-x-100"
            )}
            onClick={(e) => {
              if (hasDropdown) {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }
              onClick && onClick();
            }}
          >
            <span className="flex items-center gap-1">
              {name}
              {hasDropdown && (
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </Link>
        </div>

        {/* Desktop Dropdown */}
        {!isMobile && hasDropdown && (
          <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/30 backdrop-blur-md shadow-lg rounded-md overflow-hidden">
            {dropdownItems?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ff6300]"
                onClick={onClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Dropdown */}
        {isMobile && hasDropdown && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-50 w-full"
          >
            {dropdownItems?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ff6300] text-center"
                onClick={onClick}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    );
  }
);
NavLink.displayName = "NavLink";

// Memoized contact button component
const ContactButton = memo(({ isMobile = false }) => (
  <motion.button
    className={cn(
      "bg-[#400406] hover:bg-[#d7be82] text-white hover:text-black font-medium rounded-full transition-all duration-300",
      isMobile
        ? "mt-8 w-full max-w-xs py-3 text-lg"
        : "hidden lg:block px-6 py-3 text-sm"
    )}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Us
  </motion.button>
));
ContactButton.displayName = "ContactButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 20;
    if (shouldBeScrolled !== scrolled) {
      setScrolled(shouldBeScrolled);
    }
  }, [scrolled]);

  // Optimized scroll effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black bg-opacity-15 transition-opacity delay-200 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        isOpen && "bg-white"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/assets/common/ImmunoACT_Logo.png"
              alt="Brand Logo"
              width={160}
              height={57}
              className=""
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  name={item.name}
                  isActive={pathname === item.href}
                  isMobile={false}
                  onClick={() => setIsOpen(false)}
                  hasDropdown={item.hasDropdown}
                  dropdownItems={item.dropdownItems}
                />
              ))}
            </div>
          </nav>

          {/* Contact Button - Desktop */}
          <ContactButton />

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-16 bg-white z-40 lg:hidden overflow-y-auto"
                aria-label="Mobile navigation"
              >
                <nav className="flex flex-col items-center justify-start pt-8 px-4 h-[calc(100vh-4rem)] max-w-[360px] w-full mx-auto">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <NavLink
                        href={item.href}
                        name={item.name}
                        isActive={pathname === item.href}
                        isMobile
                        onClick={() => setIsOpen(true)}
                        hasDropdown={item.hasDropdown}
                        dropdownItems={item.dropdownItems}
                      />
                    </motion.div>
                  ))}

                  {/* Contact Button - Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                    className="w-full px-4 sm:px-8"
                  >
                    <ContactButton isMobile />
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
