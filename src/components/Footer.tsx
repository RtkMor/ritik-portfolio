import { FiGithub, FiLinkedin, FiCode, FiGlobe } from "react-icons/fi";
import { profile } from "../data/portfolio";

const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FiCode, href: profile.socials.leetcode, label: "LeetCode" },
  { icon: FiGlobe, href: profile.socials.portfolio, label: "Portfolio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-[--color-muted] transition-colors hover:text-[--color-accent]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-[--color-muted]">
          Designed & built by {profile.name} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
