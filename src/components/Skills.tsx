"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "PHP", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "Strapi CMS", level: 80 },
      { name: "WordPress", level: 75 },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Git / GitHub", level: 88 },
      { name: "Linux / Bash", level: 75 },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "AI Integration", level: 80 },
      { name: "Claude / GPT APIs", level: 82 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Stripe / Payments", level: 78 },
      { name: "Vercel / Railway", level: 82 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">02 — Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="p-6 rounded-xl border border-card-border bg-card/30"
            >
              <h3 className="text-sm font-semibold text-accent mb-5">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
