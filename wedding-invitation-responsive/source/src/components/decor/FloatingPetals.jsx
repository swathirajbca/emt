import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Petal = ({ startX, size, duration, delay, hue, drift }) => (
  <motion.div
    className="absolute -top-[8%]"
    style={{ left: `${startX}%` }}
    initial={{ y: "-10vh", x: 0, rotate: 0, opacity: 0 }}
    animate={{
      y: "115vh",
      x: [0, drift, drift * 0.4, drift],
      rotate: [0, 180, 320, 420],
      opacity: [0, 0.85, 0.85, 0],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    aria-hidden="true"
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c4 3 7 7 7 11 0 4-3 9-7 9s-7-5-7-9c0-4 3-8 7-11z" fill={hue} opacity="0.85" />
    </svg>
  </motion.div>
);

const HUES = ["#F4C2C2", "#F9E4C5", "#E8D399", "#FBEFE0", "#F6D6C6"];

const FloatingPetals = ({ count = 12 }) => {
  const petals = useMemo(
    () => Array.from({ length: count }, (_, index) => ({
      id: index,
      startX: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 12 + Math.random() * 11,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 120,
      hue: HUES[index % HUES.length],
    })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => <Petal key={petal.id} {...petal} />)}
    </div>
  );
};

export default FloatingPetals;
