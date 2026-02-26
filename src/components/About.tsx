"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles, GraduationCap } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const icons = [Code2, Sparkles, GraduationCap, MapPin];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">{t.about.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted leading-relaxed"
          >
            <p>{t.about.p1}</p>
            <p>
              {t.about.p2}{" "}
              <span className="text-foreground">{t.about.p2Highlight}</span>
              {t.about.p2End}
            </p>
            <p>{t.about.p3}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="p-5 rounded-xl border border-card-border bg-card/50 hover:border-accent/30 transition-colors duration-300"
                >
                  <Icon size={20} className="text-accent mb-3" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
