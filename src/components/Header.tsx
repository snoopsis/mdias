"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLocale, t } = useTranslation();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">md</span>
          <span className="text-muted">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-200"
            >
              {t.nav.cta}
            </a>
          </li>
          <li>
            <button
              onClick={toggleLocale}
              className="flex items-center gap-0.5 rounded-full border border-card-border bg-card/50 p-0.5 text-xs font-medium transition-colors duration-200 hover:border-accent/30"
              aria-label="Toggle language"
            >
              <span
                className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
                  locale === "pt"
                    ? "bg-accent/15 text-accent"
                    : "text-muted"
                }`}
              >
                PT
              </span>
              <span
                className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
                  locale === "en"
                    ? "bg-accent/15 text-accent"
                    : "text-muted"
                }`}
              >
                EN
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile: language toggle + menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-0.5 rounded-full border border-card-border bg-card/50 p-0.5 text-xs font-medium"
            aria-label="Toggle language"
          >
            <span
              className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                locale === "pt" ? "bg-accent/15 text-accent" : "text-muted"
              }`}
            >
              PT
            </span>
            <span
              className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                locale === "en" ? "bg-accent/15 text-accent" : "text-muted"
              }`}
            >
              EN
            </span>
          </button>
          <button
            className="text-muted hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-card-border"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent"
                >
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
