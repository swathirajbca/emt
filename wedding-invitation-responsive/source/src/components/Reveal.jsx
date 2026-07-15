import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  y = 40,
  x = 0,
  className = "",
  once = true,
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, x }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.19, 1, 0.22, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MaskLine = ({ children, delay = 0, className = "" }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="mask-line"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.span
        className={`block ${className}`}
        variants={{ hidden: { y: "115%" }, show: { y: "0%" } }}
        transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default Reveal;
