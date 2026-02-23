"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer & AI Solutions",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    description:
      "Building complete web applications with AI integration. Developing booking platforms, CMS-powered websites, and payment systems using Next.js, Strapi, Stripe, and modern AI APIs.",
    tech: ["Next.js", "TypeScript", "Strapi", "Stripe", "AI APIs", "PostgreSQL"],
  },
  {
    role: "Web Developer",
    company: "Freelance Projects",
    period: "2020 — 2023",
    description:
      "Developed custom web applications for clients including community platforms, admin dashboards, CRUD systems, and e-commerce solutions using React and Node.js.",
    tech: ["React", "Node.js", "Material UI", "MongoDB", "PHP", "WordPress"],
  },
  {
    role: "Self-Taught Developer",
    company: "Continuous Learning",
    period: "2019 — 2020",
    description:
      "Started the journey into web development through self-learning. Built foundational projects to master HTML, CSS, JavaScript, PHP, and modern frameworks. Created YouTube tutorials to share knowledge.",
    tech: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git", "Linux"],
  },
];

export default function Experience() {
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
            03 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve been
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
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
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-accent/5 text-accent/70 border border-accent/10"
                      >
                        {t}
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
