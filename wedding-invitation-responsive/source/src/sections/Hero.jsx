import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { weddingConfig as C } from "../config/weddingConfig";
import { LotusMark, KolamDivider, FluteMotif } from "../components/decor/Ornaments";
import goldLotus from "../assets/gold-lotus.png";
import templeBackdrop from "../assets/temple-backdrop.svg";


const Hero = ({ started }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const line = (delay) => ({
    initial: reduceMotion ? false : { y: "115%" },
    animate: reduceMotion || started ? { y: "0%" } : { y: "115%" },
    transition: { duration: 1.05, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={ref} data-testid="hero-section" className="hero-section warm-glow" aria-labelledby="wedding-title">
      <motion.div
        style={reduceMotion ? undefined : { y: bgY, scale: bgScale }}
        className="hero-backdrop"
        aria-hidden="true"
      >
        <img
          src={templeBackdrop}
          alt=""
          className="hero-backdrop-image"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/70 to-cream" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/50" />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="hero-content section-shell"
      >
        <motion.img
          src={goldLotus}
          alt="Golden lotus"
          className="hero-lotus"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
          animate={started ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="hero-flute text-gold"
          aria-hidden="true"
        >
          <FluteMotif className="w-full" />
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="eyebrow text-inkSoft"
        >
          {C.inviteOverline}
        </motion.p>

        <h1 id="wedding-title" className="hero-title font-display text-maroon">
          <span className="hero-name-mask">
            <motion.span {...line(0.45)} className="hero-name">
              {C.brideFirstName}
            </motion.span>
          </span>
          <span className="hero-weds-mask" aria-label="weds">
            <motion.span {...line(0.7)} className="hero-weds text-gold-gradient">
              &amp;
            </motion.span>
          </span>
          <span className="hero-name-mask">
            <motion.span {...line(0.9)} className="hero-name">
              {C.groomFirstName}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
          animate={started ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.95, delay: 1.2 }}
          className="hero-divider text-gold"
          aria-hidden="true"
        >
          <KolamDivider className="w-full" />
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 1.4 }}
          className="hero-date font-deco text-ink"
        >
          {C.weddingDay}, {C.weddingDateText}
        </motion.p>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 1.52 }}
          className="hero-venue font-body text-inkSoft"
        >
          {C.venueName}, Coimbatore
        </motion.p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="scroll-cue"
        aria-hidden="true"
      >
        <span className="eyebrow text-inkSoft">Scroll</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <LotusMark className="h-6 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
