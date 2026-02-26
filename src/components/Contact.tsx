"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GithubIcon as Github, LinkedinIcon as Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:migueledias@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-mono mb-2">{t.contact.label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.contact.title}</h2>
          <p className="mt-3 text-muted max-w-lg">{t.contact.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><Mail size={18} className="text-accent" /></div>
              <div>
                <p className="text-xs text-muted">{t.contact.info.email}</p>
                <a href="mailto:migueledias@gmail.com" className="text-sm hover:text-accent transition-colors">migueledias@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><MapPin size={18} className="text-accent" /></div>
              <div>
                <p className="text-xs text-muted">{t.contact.info.location}</p>
                <p className="text-sm">Guimaraes, Portugal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><Linkedin size={18} className="text-accent" /></div>
              <div>
                <p className="text-xs text-muted">{t.contact.info.linkedin}</p>
                <a href="https://www.linkedin.com/in/migueldev/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">linkedin.com/in/migueldev</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card/30">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><Github size={18} className="text-accent" /></div>
              <div>
                <p className="text-xs text-muted">{t.contact.info.github}</p>
                <a href="https://github.com/snoopsis" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">github.com/snoopsis</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs text-muted mb-1.5">{t.contact.form.name}</label>
              <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors" placeholder={t.contact.form.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-muted mb-1.5">{t.contact.form.email}</label>
              <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors" placeholder={t.contact.form.emailPlaceholder} />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-muted mb-1.5">{t.contact.form.message}</label>
              <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none" placeholder={t.contact.form.messagePlaceholder} />
            </div>
            <button type="submit" disabled={status === "sending"} className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light disabled:opacity-50 transition-colors duration-200">
              {status === "sent" ? t.contact.form.sent : (<><Send size={16} />{t.contact.form.send}</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
