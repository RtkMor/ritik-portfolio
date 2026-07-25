import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 font-mono text-sm text-[--color-accent]">
          05. What's Next?
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[--color-muted]">
          I'm always up for a good frontend conversation — an interesting
          problem, a new opportunity, or just to say hi. My inbox is always
          open, and I'll do my best to get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-md border border-[--color-accent] px-8 py-4 text-sm font-semibold text-[--color-accent] transition-colors hover:bg-[--color-accent]/10"
        >
          <FiMail />
          Say Hello
        </a>

        <p className="mt-6 font-mono text-xs text-[--color-muted]">
          {profile.email} · {profile.phone}
        </p>
      </motion.div>
    </section>
  );
}
