import { FiGithub, FiLinkedin, FiCode, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

const items = [
  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FiCode, href: profile.socials.leetcode, label: "LeetCode" },
  { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function SocialRail() {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 lg:flex">
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-[--color-muted] transition-all hover:-translate-y-1 hover:text-[--color-accent]"
        >
          <Icon size={18} />
        </a>
      ))}
      <span className="h-24 w-px bg-[--color-border]" />
    </div>
  );
}
