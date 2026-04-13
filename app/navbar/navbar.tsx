"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Heart, Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nunito, Sniglet } from 'next/font/google';

// Placeholder for your logo
import logo from "../../public/logopng.png"; 

// --- FONTS ---
// Sniglet for the chunky, soft accents (like the button)
const accentFont = Sniglet({ weight: ['400', '800'], subsets: ['latin'] });
// Nunito for highly readable, soft, rounded body text
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'] });

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll Effect & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["about", "programs", "gallery"];
        let current = "";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `/#${section}`;
            }
          }
        }
        if (current) setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#programs", label: "Programs" },
    { href: "/Whyus", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
    { href: "/Ourcenters", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Softened social links to match the peaceful pastel theme
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/littledreamersatcambridge/", 
      className: "text-blue-400 bg-blue-50 hover:bg-blue-100 border-blue-100" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/little_dreamers_at_cambridge/", 
      className: "text-rose-400 bg-rose-50 hover:bg-rose-100 border-rose-100" 
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@LittleDreamersAtCambridge", 
      className: "text-red-400 bg-red-50 hover:bg-red-100 border-red-100" 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          // Uses the warm off-white from the hero section when scrolled
          ? "bg-[#fffaf8]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-[220px] md:w-[260px] transition-transform duration-300"
            >
              <Image 
                src={logo} 
                width={260}  
                height={80}
                alt="Motherhood Preschool Logo"
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                hoveredLink === link.href || 
                pathname === link.href || 
                (pathname === "/" && activeSection === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group py-2"
                >
                  {/* Gentle Floating Heart Indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2"
                      >
                         <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className={`text-base transition-colors duration-300 ${
                    isActive ? "text-rose-500 font-black" : "text-stone-500 font-bold hover:text-rose-400"
                  } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Softened Chunky "Enroll" Button to match Hero */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 2 }}
                className={`
                  bg-rose-400 text-white rounded-full px-6 py-2.5 
                  shadow-[0_4px_0_0_#e11d48] active:shadow-none active:translate-y-[4px] 
                  flex items-center gap-2 text-sm font-black transition-all border-2 border-rose-500
                  ${accentFont.className} tracking-wide
                `}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-2 border-l-2 border-stone-100 pl-6">
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`p-2 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${social.className}`}
                    >
                        <social.icon className="w-4 h-4" />
                    </a>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-stone-500 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-[#fffaf8] absolute w-full left-0 top-full overflow-y-auto pb-24"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link, i) => {
                 const isActive = pathname === link.href || (pathname === "/" && activeSection === link.href);
                 
                 return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-4 rounded-2xl text-lg font-black transition-all border-2 ${bodyFont.className} ${
                        isActive 
                          ? "text-rose-500 bg-rose-50 border-rose-100 shadow-sm" 
                          : "text-stone-600 bg-white border-transparent hover:border-stone-100 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isActive ? <Heart className="w-5 h-5 fill-rose-300 text-rose-400" /> : <span className="w-5" />}
                        {link.label}
                      </div>
                    </Link>
                  </motion.div>
                 );
              })}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`
                    w-full bg-rose-400 text-white py-4 rounded-2xl font-black text-lg 
                    shadow-[0_5px_0_0_#e11d48] active:shadow-none active:translate-y-[5px]
                    flex justify-center items-center gap-2 border-2 border-rose-500 transition-all
                    ${accentFont.className} tracking-wide
                  `}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>

              {/* Mobile Socials */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4 py-8 border-t-2 border-stone-100 mt-6"
              >
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        className={`p-3.5 rounded-full border shadow-sm ${social.className}`}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;