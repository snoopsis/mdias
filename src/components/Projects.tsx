"use client";

import { motion } from "framer-motion";
import { ExternalLink, GithubIcon as Github, Globe, CreditCard, Bot, Code2 } from "lucide-react";

const projects = [
  {
    title: "Sopro Binario",
    description:
      "Full-featured TVDE transport booking platform with Stripe payment integration, email notifications, and a Strapi CMS backend. Deployed on Vercel + Railway.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Strapi", "Stripe", "PostgreSQL"],
    icon: CreditCard,
    links: {
      live: "https://www.soprobinario.pt",
    },
    featured: true,
  },
  {
    title: "AI-Powered Web Solutions",
    description:
      "Building web applications enhanced with AI capabilities — from intelligent chatbots to automated content generation and smart data processing pipelines.",
    tech: ["Claude API", "OpenAI", "Next.js", "Node.js", "Prompt Engineering"],
    icon: Bot,
    links: {},
    featured: true,
  },
  {
    title: "React CRUD with Material UI",
    description:
      "Complete CRUD application built with React and Material UI, featuring user management, data validation, and responsive design.",
    tech: ["React", "Material UI", "JavaScript", "REST API"],
    icon: Code2,
    links: {
      github: "https://github.com/snoopsis/reactMaterialUiCrud",
    },
    featured: false,
  },
  {
    title: "Authentication System",
    description:
      "User authentication and registration system with React frontend, secure login/register flows, and session management.",
    tech: ["React", "Material UI", "Node.js", "Authentication"],
    icon: Code2,
    links: {
      github: "https://github.com/snoopsis/reactLoginRegister",
    },
    featured: false,
  },
  {
    title: "CPMVE Community Platform",
    description:
      "Community website for Electric Micro Vehicle owners in Portugal, featuring information sharing and community engagement features.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    links: {
      github: "https://github.com/snoopsis/cpmve",
    },
    featured: false,
  },
  {
    title: "PHP MVC Framework",
    description:
      "Custom MVC framework built from scratch in PHP, demonstrating deep understanding of design patterns and web architecture.",
    tech: ["PHP", "MVC", "MySQL", "Architecture"],
    icon: Code2,
    links: {
      github: "https://github.com/snoopsis/phpMVC",
    },
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">04 — Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-muted max-w-lg">
            A selection of projects that showcase my skills in fullstack
            development and AI integration.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group relative p-6 rounded-xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon size={24} className="text-accent" />
                  <div className="flex gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other projects */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-5 rounded-xl border border-card-border bg-card/20 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <project.icon size={18} className="text-muted" />
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
                <h3 className="text-sm font-semibold mb-1.5 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-card-border/50 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/snoopsis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
