import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { KolamDivider } from "./decor/Ornaments";
import goldLotus from "../assets/gold-lotus.png";

const Loader = ({ show }) => {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="intro-loader"
          className="loader-screen warm-glow"
          role="status"
          aria-label="Opening Shruthi and Vignesh's wedding invitation"
          exit={reduceMotion ? undefined : { opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.img
            src={goldLotus}
            alt=""
            aria-hidden="true"
            className="loader-lotus"
            initial={reduceMotion ? false : { scale: 0.65, opacity: 0, rotate: -8 }}
            animate={reduceMotion ? undefined : { scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          />
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="eyebrow mt-5 text-maroon/70"
          >
            Shubha Vivaham
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="mt-4 text-gold"
          >
            <KolamDivider className="w-48 sm:w-56" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
