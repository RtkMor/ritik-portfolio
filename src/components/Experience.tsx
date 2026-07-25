import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02." title="Where I've Worked" />

      <div className="relative border-l border-[--color-border] pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-[--color-accent] bg-[--color-bg]" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">
                {job.role}{" "}
                <span className="text-[--color-accent]">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-[--color-muted]">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[--color-muted]">{job.location}</p>

            <ul className="mt-4 space-y-3">
              {job.points.map((p, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-sm leading-relaxed text-[--color-muted]"
                >
                  <span className="mt-1 shrink-0 text-[--color-accent]">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[--color-border] px-3 py-1 font-mono text-xs text-[--color-muted]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
