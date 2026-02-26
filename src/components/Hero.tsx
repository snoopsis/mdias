"use client";

import { motion } from "framer-motion";
import { ArrowDown, GithubIcon as Github, LinkedinIcon as Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-card-border bg-card/50 text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.hero.badge}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          {t.hero.greeting}{" "}
          <span className="gradient-text">{t.hero.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}{" "}
          <span className="text-foreground">{t.hero.subtitleHighlight}</span>
          {t.hero.subtitleEnd}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition-colors duration-200">
            {t.hero.cta1}
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-card-border text-muted hover:text-foreground hover:border-muted transition-colors duration-200">
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          <a href="https://github.com/snoopsis" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors duration-200" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/migueldev/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors duration-200" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:migueledias@gmail.com" className="text-muted hover:text-foreground transition-colors duration-200" aria-label="Email"><Mail size={20} /></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={20} className="text-muted animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
