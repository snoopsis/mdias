"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const techStacks = [
  ["Next.js", "TypeScript", "Strapi", "Stripe", "AI APIs", "PostgreSQL"],
  ["React", "Node.js", "Material UI", "MongoDB", "PHP", "WordPress"],
  ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git", "Linux"],
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">
            {t.experience.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-10">
            {t.experience.items.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-1 w-px h-px">
                  <div className="absolute -left-[5px] -top-[5px] w-[11px] h-[11px] rounded-full border-2 border-accent bg-background" />
                </div>

                <div className="p-6 rounded-xl border border-card-border bg-card/20 hover:border-accent/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStacks[i]?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-accent/5 text-accent/70 border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
