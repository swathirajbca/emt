import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Bell = ({ delay = 0, flip = false }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="origin-top"
      style={{ transformOrigin: "50% 0%" }}
      animate={reduceMotion ? undefined : { rotate: [-7, 7, -7] }}
      transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, delay }}
      aria-hidden="true"
    >
      <svg className="bell-svg" viewBox="0 0 46 90" fill="none" style={{ transform: flip ? "scaleX(-1)" : "none" }}>
        <path d="M23 0v18" stroke="#A9821F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="23" cy="20" r="4" fill="#A9821F" />
        <path d="M23 24c-9 0-15 8-16 22-1 8-3 12-5 16h42c-2-4-4-8-5-16-1-14-7-22-16-22z" fill="url(#bellGrad)" stroke="#8A6A18" strokeWidth="1" />
        <ellipse cx="23" cy="62" rx="21" ry="4" fill="#C9A233" />
        <circle cx="23" cy="70" r="4" fill="#8A6A18" />
        <defs>
          <linearGradient id="bellGrad" x1="7" y1="24" x2="39" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F1D98A" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#A9821F" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const HangingBells = () => (
  <div className="hanging-bells" aria-hidden="true">
    <Bell />
    <Bell delay={0.5} flip />
  </div>
);

export default HangingBells;
