import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] glass transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-full">
        <motion.a
          href="#home"
          className="font-[Outfit] text-2xl font-extrabold tracking-tight"
          onClick={() => handleNavClick("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="gradient-text">VM</span>
        </motion.a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-2">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300
                  ${activeSection === href.slice(1) ? "text-accent" : "text-text-secondary hover:text-text-primary"}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <motion.span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-card text-text-primary border border-border transition-all duration-300 hover:border-accent hover:text-accent"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ scale: 0, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: 90 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex"
              >
                {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            className="flex md:hidden w-10 h-10 items-center justify-center rounded-full bg-bg-card text-text-primary border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-[72px] left-4 right-4 p-3 rounded-xl glass flex flex-col gap-1 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                className={`px-5 py-3 text-[0.95rem] font-medium rounded-xl transition-all duration-300
                  ${activeSection === href.slice(1) ? "text-accent bg-accent-soft" : "text-text-secondary hover:text-accent hover:bg-accent-soft"}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 150, damping: 18 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
