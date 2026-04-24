"use client";

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function TextReveal({
  children,
  as: Tag = "h1",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="overflow-hidden"
    >
      <motion.div variants={variants}>
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </motion.div>
  );
}
