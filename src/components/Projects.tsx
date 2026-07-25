import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03." title="Things I've Built" />

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-xl border border-[--color-border] bg-[--color-card] p-8 transition-colors hover:border-[--color-accent]/50"
          >
            {project.featured && (
              <span className="mb-4 inline-block font-mono text-xs text-[--color-accent]">
                ★ Featured Project
              </span>
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[--color-accent] hover:underline"
                >
                  Live site <FiExternalLink />
                </a>
              )}
            </div>

            <p className="mt-1 font-mono text-xs text-[--color-muted]">
              {project.tagline}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[--color-muted]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[--color-border] px-3 py-1 font-mono text-xs text-[--color-muted]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
