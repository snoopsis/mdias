"use client";

import { GithubIcon as Github, LinkedinIcon as Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Miguel Dias. Built with Next.js &
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/snoopsis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/migueldev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:migueledias@gmail.com"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
