// "use client";
// import React, { useState, useEffect, useCallback, memo } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { cn } from "../../lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// // Memoized navigation items to prevent unnecessary re-renders
// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Works", href: "/works" },
//   { name: "About", href: "/about" },
//   { name: "FAQ", href: "/faq" },
// ];

// // Memoized navigation link component for better performance
// const NavLink = memo(({ href, name, isActive, isMobile, onClick }) => (
//   <Link
//     href={href}
//     className={cn(
//       "relative font-medium transition-colors hover:text-[#ff6300]",
//       isMobile ? "block w-full text-center py-4 text-lg" : "px-3 py-2 text-sm",
//       isActive ? "text-[#400406]" : "text-gray-600",
//       !isMobile &&
//         "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-[#400406] before:transition-transform hover:before:scale-x-100",
//       !isMobile && isActive && "before:scale-x-100"
//     )}
//     onClick={onClick}
//   >
//     {name}
//   </Link>
// ));
// NavLink.displayName = "NavLink";

// // Memoized contact button component
// const ContactButton = memo(({ isMobile = false }) => (
//   <motion.button
//     className={cn(
//       "bg-[#400406] hover:bg-[#d7be82] text-white hover:text-black font-medium rounded-full transition-all duration-300",
//       isMobile
//         ? "mt-8 w-full max-w-xs py-3 text-lg"
//         : "hidden lg:block px-6 py-3 text-sm"
//     )}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     Contact Us
//   </motion.button>
// ));
// ContactButton.displayName = "ContactButton";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Memoized scroll handler
//   const handleScroll = useCallback(() => {
//     const shouldBeScrolled = window.scrollY > 20;
//     if (shouldBeScrolled !== scrolled) {
//       setScrolled(shouldBeScrolled);
//     }
//   }, [scrolled]);

//   // Optimized scroll effect
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Prevent scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         scrolled
//           ? "bg-black bg-opacity-15 transition-opacity delay-200 backdrop-blur-md shadow-sm"
//           : "bg-transparent",
//         isOpen && "bg-white"
//       )}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="relative z-50 flex items-center"
//             onClick={() => setIsOpen(false)}
//           >
//             <Image
//               src="/assets/images/Common/Navbar/Logo.png"
//               alt="Brand Logo"
//               width={56}
//               height={48}
//               className="h-8 w-10 sm:h-10 sm:w-12 lg:h-12 lg:w-14"
//               priority
//             />
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             className="relative z-50 lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle navigation menu"
//             aria-expanded={isOpen}
//             aria-controls="mobile-menu"
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               {isOpen ? (
//                 <motion.div
//                   key="close"
//                   initial={{ opacity: 0, rotate: -90 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   exit={{ opacity: 0, rotate: 90 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ opacity: 0, rotate: 90 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   exit={{ opacity: 0, rotate: -90 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </button>

//           {/* Desktop Navigation */}
//           <nav
//             className="hidden lg:flex items-center space-x-8"
//             aria-label="Main navigation"
//           >
//             <div className="flex items-center gap-8">
//               {navigation.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   href={item.href}
//                   name={item.name}
//                   isActive={pathname === item.href}
//                 />
//               ))}
//             </div>
//           </nav>

//           {/* Contact Button - Desktop */}
//           <ContactButton />

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 id="mobile-menu"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="fixed inset-0 top-16 bg-white z-40 lg:hidden overflow-y-auto"
//                 aria-label="Mobile navigation"
//               >
//                 {/* <nav className="flex flex-col items-center justify-start pt-8 px-4 h-[calc(100vh-4rem)]"> */}
//                 <nav className="flex flex-col items-center justify-start pt-8 px-4 h-[calc(100vh-4rem)] max-w-[360px] w-full mx-auto">
//                   {navigation.map((item, index) => (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="w-full"
//                     >
//                       <NavLink
//                         href={item.href}
//                         name={item.name}
//                         isActive={pathname === item.href}
//                         isMobile
//                         onClick={() => setIsOpen(false)}
//                       />
//                     </motion.div>
//                   ))}

//                   {/* Contact Button - Mobile */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: navigation.length * 0.1 }}
//                     className="w-full px-4 sm:px-8"
//                   >
//                     <ContactButton isMobile />
//                   </motion.div>
//                 </nav>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default memo(Navbar);

import React from "react";

const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
