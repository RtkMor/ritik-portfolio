import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04." title="Skills & Tools" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-xl border border-[--color-border] bg-[--color-card] p-6"
          >
            <h3 className="mb-4 text-sm font-semibold text-[--color-accent]">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-[--color-bg-soft] px-2.5 py-1 text-xs text-[--color-muted]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
