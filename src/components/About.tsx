import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const highlights = [
  "4 role-based consoles owned in production",
  "Reusable CSV framework across ~10 flows",
  "A restaurant SaaS shipped solo, live in daily use",
  "2 years of React + TypeScript in production",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01." title="About Me" />
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <p className="text-base leading-relaxed text-[--color-muted]">
            {profile.about}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-[--color-muted]"
              >
                <span className="mt-1 text-[--color-accent]">▹</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-2"
        >
          <div className="rounded-xl border border-[--color-border] bg-[--color-card] p-6">
            <h3 className="text-sm font-semibold text-white">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-[--color-muted]">Experience</dt>
                <dd className="text-[--color-text]">2 years</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[--color-muted]">Focus</dt>
                <dd className="text-[--color-text]">React · TypeScript</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[--color-muted]">Domains</dt>
                <dd className="text-[--color-text]">Fintech · Insurance</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[--color-muted]">Location</dt>
                <dd className="text-right text-[--color-text]">
                  {profile.location}
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
