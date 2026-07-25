import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-glow relative flex min-h-screen items-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-sm text-[--color-accent]"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-2 text-3xl font-bold tracking-tight text-[--color-muted] sm:text-5xl lg:text-6xl"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-[--color-muted]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-6 py-3 text-sm font-semibold text-[--color-bg] transition-transform hover:-translate-y-0.5"
          >
            View my work
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[--color-accent] px-6 py-3 text-sm font-semibold text-[--color-accent] transition-colors hover:bg-[--color-accent]/10"
          >
            <FiDownload />
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
