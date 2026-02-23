"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Fullstack Developer",
    description:
      "Building complete web solutions from frontend interfaces to backend APIs and databases.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Developing intelligent solutions that leverage AI to automate processes and enhance user experiences.",
  },
  {
    icon: GraduationCap,
    title: "Self-Taught",
    description:
      "Passionate learner constantly exploring new technologies, frameworks, and best practices.",
  },
  {
    icon: MapPin,
    title: "Portugal Based",
    description:
      "Working from Guimaraes, Portugal. Available for remote projects worldwide.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">01 — About</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A bit about me
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
            <p>
              I&apos;m a passionate fullstack web developer with experience building
              web applications using modern technologies. My journey in tech started
              as a self-taught developer, and that curiosity and drive to learn has
              never stopped.
            </p>
            <p>
              I specialize in creating complete digital solutions — from responsive
              frontends with React and Next.js to robust backends with Node.js and
              databases. Recently, I&apos;ve been focused on integrating{" "}
              <span className="text-foreground">artificial intelligence</span> into
              web applications to deliver smarter, more efficient products.
            </p>
            <p>
              Whether it&apos;s building a booking platform with payment processing,
              a CMS-powered website, or an AI-enhanced application, I bring the same
              commitment to clean code, great UX, and reliable performance.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-5 rounded-xl border border-card-border bg-card/50 hover:border-accent/30 transition-colors duration-300"
              >
                <item.icon size={20} className="text-accent mb-3" />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
