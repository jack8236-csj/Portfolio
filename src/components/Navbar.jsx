import React, { useState } from "react";
import { FaBars, FaDownload, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#screens", label: "Screens" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
            Portfolio
          </span>
          <span className="mt-2 text-lg font-semibold">Chung Shi Jie</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--text-muted)] lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[var(--accent)]">
              {link.label}
            </a>
          ))}
          <a href="mailto:jackchung10@gmail.com" className="transition-colors hover:text-[var(--accent)]">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/jack8236-csj"
            target="_blank"
            rel="noreferrer"
            className="pill transition-colors hover:text-[var(--accent)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chung-shi-jie-561127233/"
            target="_blank"
            rel="noreferrer"
            className="pill transition-colors hover:text-[var(--accent)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <ThemeToggle />
          <a className="btn-primary" href="/Resume- Chung Shi Jie (2).pdf" download>
            <FaDownload />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="pill"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] px-4 py-4 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-semibold">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[var(--line)] px-4 py-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:jackchung10@gmail.com"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-[var(--line)] px-4 py-3"
            >
              Contact
            </a>
            <a className="btn-primary mt-1" href="/Resume- Chung Shi Jie (2).pdf" download>
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
