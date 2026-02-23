"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GithubIcon as Github, LinkedinIcon as Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // mailto fallback
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:migueledias@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-card-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">05 — Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-muted max-w-lg">
            Have a project in mind or want to discuss an opportunity? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <a
                  href="mailto:migueledias@gmail.com"
                  className="text-sm hover:text-accent transition-colors"
                >
                  migueledias@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="text-sm">Guimaraes, Portugal</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Linkedin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/migueldev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  linkedin.com/in/migueldev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Github size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">GitHub</p>
                <a
                  href="https://github.com/snoopsis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  github.com/snoopsis
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs text-muted mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-muted mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs text-muted mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light disabled:opacity-50 transition-colors duration-200"
            >
              {status === "sent" ? (
                "Message opened in email client!"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
