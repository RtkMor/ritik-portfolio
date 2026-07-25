import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[--color-border] bg-[--color-bg]/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold text-white">
          RM<span className="text-[--color-accent]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[--color-muted] transition-colors hover:text-[--color-accent]"
              >
                <span className="font-mono text-[--color-accent]">
                  0{i + 1}.
                </span>{" "}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-[--color-text] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[--color-border] bg-[--color-bg] px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-[--color-muted] hover:text-[--color-accent]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}
