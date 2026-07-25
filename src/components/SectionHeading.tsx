import { motion } from "framer-motion";

type Props = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-center gap-4"
    >
      <span className="font-mono text-sm text-[--color-accent]">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[--color-border]" />
    </motion.div>
  );
}
